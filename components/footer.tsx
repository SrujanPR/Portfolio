"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="py-8 border-t border-slate-800 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-slate-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()}
          </motion.p>
          <motion.p
            className="text-slate-400 text-sm mt-2 md:mt-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Designed & Built by{" "}
            <motion.span className="text-cyan-400" whileHover={{ color: "#a855f7" }} transition={{ duration: 0.3 }}>
              Srujan P R
            </motion.span>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}
