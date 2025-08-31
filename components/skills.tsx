"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Updated skills data with logos
const skillsCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", logo: "https://skillicons.dev/icons?i=py" },
      { name: "C", logo: "https://skillicons.dev/icons?i=c" },
      { name: "Java", logo: "https://skillicons.dev/icons?i=java" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML", logo: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", logo: "https://skillicons.dev/icons?i=css" },
      { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
      { name: "React", logo: "https://skillicons.dev/icons?i=react" },
      { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts" },
      { name: "Next.JS", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      { name: "Node.JS", logo: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Flask", logo: "https://skillicons.dev/icons?i=flask" },
      { name: "FastAPI", logo: "https://skillicons.dev/icons?i=fastapi" },
      { name: "Tailwind CSS", logo: "https://skillicons.dev/icons?i=tailwind" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Pytorch", logo: "https://skillicons.dev/icons?i=pytorch" },
      { name: "TensorFlow", logo: "https://skillicons.dev/icons?i=tensorflow" },
      { name: "Scikit-Learn", logo: "https://skillicons.dev/icons?i=sklearn" },
      { name: "OpenCV", logo: "https://skillicons.dev/icons?i=opencv" },
      { name: "Yolo", logo: "https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64994922cf2a6385a4bf4489_UltralyticsYOLO_mark_blue.svg" },
      { name: "Huggigface", logo: "https://cdn.worldvectorlogo.com/logos/huggingface-2.svg" },
      { name: "Matlab", logo: "https://skillicons.dev/icons?i=matlab" },
      { name: "Pandas", logo: "https://cdn.worldvectorlogo.com/logos/pandas.svg" },
      { name: "Seaborn", logo: "https://cdn.worldvectorlogo.com/logos/seaborn-1.svg" },
      { name: "Numpy", logo: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg" },
      { name: "LangChain", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langchain.png" },
    ],
  },
  {
    category: "Devops and Automation",
    skills: [
      { name: "Jenkins", logo: "https://skillicons.dev/icons?i=jenkins" },
      { name: "Maven", logo: "https://skillicons.dev/icons?i=maven" },
      { name: "Gradle", logo: "https://skillicons.dev/icons?i=gradle" },
      { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
      { name: "Github", logo: "https://skillicons.dev/icons?i=github" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb" },
      { name: "My SQL", logo: "https://skillicons.dev/icons?i=mysql" },
      { name: "Postgre SQL", logo: "https://skillicons.dev/icons?i=postgres" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Postman", logo: "https://skillicons.dev/icons?i=postman" },
      { name: "Power BI", logo: "https://1000logos.net/wp-content/uploads/2022/12/Power-BI-Logo-768x432.png" },
      { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
      { name: "Figma", logo: "https://skillicons.dev/icons?i=figma" },
      { name: "LaTeX", logo: "https://skillicons.dev/icons?i=latex" },
      { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-wordmark-2.svg" },
      { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel" },
      { name: "Netlify", logo: "https://skillicons.dev/icons?i=netlify" },
      { name: "Microsoft Tools", logo: "https://cdn.worldvectorlogo.com/logos/office-1.svg" },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-black/0 to-cyan-900/20"></div>

      <motion.div className="container mx-auto px-4 relative z-10" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies. Here&apos;s an overview of my technical skills and
            expertise.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillsCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.h3
                      className="text-2xl font-bold mb-8 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                          ease: "linear",
                        }}
                        style={{
                          backgroundSize: "200% 200%",
                        }}
                      >
                        {category.category}
                      </motion.span>
                    </motion.h3>

                    <motion.div
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          className="flex flex-col items-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <div className="relative group">
                            <motion.div
                              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ transform: "scale(0.9)" }}
                              animate={{
                                scale: [0.9, 1, 0.9],
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                delay: (index * 0.1) % 1,
                              }}
                            ></motion.div>
                            <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-slate-800 border-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <Image
                                src={skill.logo || "/placeholder.svg"}
                                alt={skill.name}
                                width={60}
                                height={60}
                                className="p-3 z-10 transition-transform duration-300 group-hover:scale-110"
                              />
                            </div>
                          </div>
                          <span className="mt-3 text-sm font-medium text-slate-300 group-hover:text-white">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
