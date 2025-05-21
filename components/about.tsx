"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const textX = useTransform(scrollYProgress, [0.1, 0.5], [50, 0])
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

  return (
    <motion.section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black/50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ scale: imageScale, opacity: imageOpacity }} className="relative">
            <motion.div
              className="w-full h-[400px] relative rounded-lg overflow-hidden border-2 border-cyan-500/20"
              whileHover={{ boxShadow: "0 0 25px rgba(34, 211, 238, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pfp.jpg-SM2CdyKCCltMZpheJc7oPRosreFM5S.jpeg"
                  alt="Srujan P R"
                  width={350}
                  height={400}
                  className="object-contain"
                  style={{ maxHeight: "100%" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </motion.div>
            <motion.div
              className="absolute -bottom-5 -right-5 w-40 h-40 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>
          </motion.div>

          <motion.div style={{ x: textX, opacity: textOpacity }}>
            <motion.h3
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              I&apos;m <span className="text-cyan-400">Srujan</span>
            </motion.h3>

            <motion.p
              className="text-slate-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              AI Solutions Developer passionate about creating intelligent applications that solve real-world challenges. I build systems that enhance user experiences while delivering practical solutions with measurable impact. My approach blends technical expertise with an eye for clean, functional design.
            </motion.p>

            <motion.p
              className="text-slate-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              When not immersed in code, I'm exploring emerging technologies and contributing to innovative projects. I constantly seek opportunities to expand my knowledge and apply artificial intelligence in meaningful ways that make a difference.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="text-cyan-400 font-medium mb-2">Name:</h4>
                <p className="text-slate-300">Srujan P R</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-medium mb-2">Email:</h4>
                <p className="text-slate-300">sruja2401@gmail.com</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-medium mb-2">Location:</h4>
                <p className="text-slate-300">Bangalore, India</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-medium mb-2">Birthday:</h4>
                <p className="text-slate-300">24th January 2004</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
