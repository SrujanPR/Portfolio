"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve"
  invert?: boolean
  color?: string
}

export default function SectionDivider({
  variant = "wave",
  invert = false,
  color = "from-black to-slate-900",
}: SectionDividerProps) {
  const getPath = () => {
    switch (variant) {
      case "wave":
        return invert ? "M0,32 C320,0 480,64 1920,32 L1920,0 L0,0 Z" : "M0,0 C320,32 480,0 1920,32 L1920,64 L0,64 Z"
      case "angle":
        return invert ? "M0,32 L1920,0 L1920,0 L0,0 Z" : "M0,0 L1920,32 L1920,64 L0,64 Z"
      case "curve":
        return invert ? "M0,32 Q960,0 1920,32 L1920,0 L0,0 Z" : "M0,0 Q960,32 1920,0 L1920,64 L0,64 Z"
      default:
        return invert ? "M0,32 C320,0 480,64 1920,32 L1920,0 L0,0 Z" : "M0,0 C320,32 480,0 1920,32 L1920,64 L0,64 Z"
    }
  }

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform translate-y-1">
      <motion.svg
        className="relative block w-full h-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 64"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          className={`fill-current bg-gradient-to-b ${color}`}
          d={getPath()}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  )
}
