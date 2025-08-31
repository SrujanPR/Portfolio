"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

type EducationItem = {
  id: number
  degree: string
  institution: string
  location?: string
  duration: string
  grade?: string
  major?: string
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "BE in Information Science & Engineering",
    institution: "JSS Academy of Technical Education",
    location: "Bangalore, India",
    duration: "2022 – Present",
    grade: "9.09 CGPA",
  },
  {
    id: 2,
    degree: "12th Grade (PUC)",
    institution: "Base PU College",
    location: "Bangalore, India",
    duration: "2021 – 2022",
    grade: "86%",
  },
  {
    id: 3,
    degree: "10th Grade (SSLC)",
    institution: "Presidency School Nandini Layout",
    location: "Bangalore, India",
    duration: "2019 – 2020",
    grade: "91%",
  },
]

function getStatus(duration: string) {
  const isCurrent = /present/i.test(duration)
  return {
    text: isCurrent ? "Currently Pursuing" : "Completed",
    variant: isCurrent ? "current" : "done",
  }
}

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black/0 to-purple-900/20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <p className="text-slate-300 max-w-2xl mx-auto mt-6">My academic journey and achievements.</p>
        </motion.div>

        {/* Cards list (no timeline) */}
        <div className="space-y-6">
          {educationData.map((item, index) => {
            const status = getStatus(item.duration)
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon circle */}
                      <div className="shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                          <GraduationCap className="w-7 h-7" />
                        </div>
                      </div>

                      {/* Main content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">{item.degree}</h3>

                          {/* Duration */}
                          <div className="flex items-center gap-2 text-slate-300 whitespace-nowrap">
                            <Calendar size={16} />
                            <span className="text-sm md:text-base">{item.duration}</span>
                          </div>
                        </div>

                        {/* Secondary line (use major if provided, else show grade if available) */}
                        {item.major ? (
                          <p className="mt-1 text-cyan-300 font-medium">{item.major}</p>
                        ) : item.grade ? (
                          <p className="mt-1 text-cyan-300 font-medium">{item.grade}</p>
                        ) : null}

                        {/* Institution and location */}
                        <p className="mt-2 text-slate-300">
                          {item.institution}
                          {item.location ? `, ${item.location}` : ""}
                        </p>

                        {/* Status pill */}
                        <div className="mt-4">
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                              status.variant === "current"
                                ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 border border-cyan-500/30"
                                : "bg-slate-800/60 text-slate-300 border border-slate-700"
                            }`}
                          >
                            {status.text}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
