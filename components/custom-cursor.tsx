"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      try {
        const target = document.elementFromPoint(position.x, position.y) as HTMLElement | null

        // Check if target exists before accessing its properties
        if (target) {
          setIsPointer(
            window.getComputedStyle(target).cursor === "pointer" ||
              target.tagName === "BUTTON" ||
              target.tagName === "A" ||
              target.closest("button") !== null ||
              target.closest("a") !== null,
          )
        }
      } catch (error) {
        // If there's any error, default to non-pointer
        setIsPointer(false)
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousemove", updateCursorType)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousemove", updateCursorType)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [position.x, position.y])

  // Don't show custom cursor on mobile devices
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  if (isMobile) return null

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"], header {
          cursor: none;
        }
      `}</style>
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isPointer ? "bg-cyan-400/20 border border-cyan-400 w-10 h-10" : "bg-white w-1 h-1"
          } ${isClicking ? "scale-90" : "scale-100"}`}
        ></div>
        <div
          className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 border border-white mix-blend-difference ${
            isClicking ? "w-5 h-5" : "w-8 h-8"
          }`}
        ></div>
      </div>
    </>
  )
}
