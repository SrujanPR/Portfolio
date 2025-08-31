"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin, Calendar, Building2 } from "lucide-react"
import Image from "next/image"

type ExperienceItem = {
  id: number
  role: string
  company: string
  location: string
  period: string
  description: string
  logo?: string
  highlights?: string[]
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "AI Core Intern",
    company: "Dots Autonomous",
    location: "Bangalore, India",
    period: "Aug 2025 – Present",
    description:
      "Designing and implementing AI-powered applications focused on user experience and measurable business outcomes.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFUXdrIhhN5BQ/company-logo_200_200/B56Zfz9_tqHUAI-/0/1752144807377/dotsautonomous_logo?e=1759363200&v=beta&t=SFD9B8tKwM7eOghpQZ43QRj-0DHnOq4V6Fou0OfIpIY",
  },
  {
    id: 2,
    role: "Full Stack Intern",
    company: "Analeptik Biologicals",
    location: "Remote",
    period: "May 2025 – Jun 2025",
    description: "Prototyped ML features and automated data workflows to support research and product teams.",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFuncKkkXgkNg/company-logo_200_200/company-logo_200_200/0/1643451256253?e=1759363200&v=beta&t=3vSqqXR98gu4AHaDp0Y4KB3JoD6731yat6qbMVCOzJk",
  },
  {
    id: 3,
    role: "UI/UX Intern",
    company: "Trawello Healthcare",
    location: "Remote",
    period: "Sep 2024 – Dec 2024",
    description: "Prototyped ML features and automated data workflows to support research and product teams.",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQHfWHk3fZjrJw/company-logo_200_200/company-logo_200_200/0/1630606006427?e=1759363200&v=beta&t=Ft_6x3N_nbgVMAzoJeZmNddSek4nZmi-tOpXpSkFBXQ",
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 14, duration: 0.5 } },
  }

  return (
    <motion.section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black/0 to-purple-900/20"></div>

      <motion.div className="container mx-auto px-4 relative z-10" style={{ y }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <p className="text-slate-300 max-w-2xl mx-auto mt-6">
            A timeline of the places I&apos;ve worked and the impact I delivered.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-800 rounded-full hidden md:block"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 z-10 hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />

                {/* Content */}
                <div className="md:w-1/2 w-full">
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.15)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center">
                            <Image
                              src={item.logo || "/placeholder.svg?height=56&width=56&query=company%20logo"}
                              alt={`${item.company} logo`}
                              width={56}
                              height={56}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                              <Briefcase className="h-5 w-5 text-cyan-400" />
                              {item.role}
                            </h3>
                            <div className="mt-1 flex flex-wrap items-center gap-3 text-slate-300">
                              <span className="inline-flex items-center gap-1">
                                <Building2 className="h-4 w-4" />
                                {item.company}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {item.location}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {item.period}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Spacer for layout */}
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
