"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react"

// Sample education data
const educationData = [
  {
    id: 1,
    degree: "BE in Information Science & Engineering",
    institution: "JSS Academy of Technical Education",
    location: "Bangalore, India",
    duration: "2022 - Present",
    grade: "9.09 CGPA",
  },
  {
    id: 2,
    degree: "12th Grade (PUC)",
    institution: "Base PU College",
    location: "Bangalore, India",
    duration: "2021 - 2022",
    grade: "86%",
  },
  {
    id: 3,
    degree: "10th Grade (SSLC)",
    institution: "Presidency School Nandini Layout",
    location: "Bangalore, India",
    duration: "2019 - 2020",
    grade: "91%",
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"])

  return (
    <motion.section id="education" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black/0 to-purple-900/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and skills. Here's a glimpse of my educational background
            and achievements.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-800 rounded-full hidden md:block"></div>

          {/* Animated timeline progress */}
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 rounded-full hidden md:block"
            style={{ height: lineHeight }}
          ></motion.div>

          {/* Education items */}
          <div className="space-y-12 relative">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 z-10 hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                ></motion.div>

                {/* Content */}
                <div className="md:w-1/2 w-full">
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="text-cyan-400" size={20} />
                          <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                        </div>

                        <div className="flex items-center gap-2 mb-2 text-slate-300">
                          <MapPin size={16} />
                          <span>
                            {item.institution}, {item.location}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-2 text-slate-300">
                          <Calendar size={16} />
                          <span>{item.duration}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-4 text-cyan-400 font-medium">
                          <Award size={16} />
                          <span>Grade: {item.grade}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Empty div for layout on desktop */}
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
