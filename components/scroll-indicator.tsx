"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="h-40 w-1 bg-slate-800 rounded-full relative">
        <motion.div
          className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full -left-1"
          style={{ top: `calc(${scrollProgress * 100}% - 6px)` }}
          initial={{ boxShadow: "0 0 5px rgba(34, 211, 238, 0.5)" }}
          animate={{ boxShadow: "0 0 15px rgba(34, 211, 238, 0.8)" }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
      </div>
    </motion.div>
  )
}
