"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"
import Image from "next/image"

// Sample certifications data - replace with your actual certifications
const certificationsData = [
  {
    id: 1,
    name: "The Complete 2024 Web Developement Bootcamp",
    organization: "Udemy",
    issueDate: "April 2024",
    credentialId: "UC-e4e93af4-dc85-4d48-85c8-c9b8342dd8ee",
    credentialURL: "https://ude.my/UC-e4e93af4-dc85-4d48-85c8-c9b8342dd8ee",
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    logo: "https://static.vecteezy.com/system/resources/previews/046/437/277/non_2x/udemy-transparent-logo-free-png.png",
  },
  {
    id: 2,
    name: "The Complete Python Pro Bootcamp",
    organization: "Udemy",
    issueDate: "Jun 2024",
    credentialId: "UC-1a860f3c-4a3f-4302-8d3a-b99f41a5edef",
    credentialURL: "https://ude.my/UC-1a860f3c-4a3f-4302-8d3a-b99f41a5edef",
    skills: ["Python", "Flask", "Pandas", "Machine Learning"],
    logo: "https://static.vecteezy.com/system/resources/previews/046/437/277/non_2x/udemy-transparent-logo-free-png.png",
  },
  {
    id: 3,
    name: "Programming with Python Professional Certificate",
    organization: "LinkedIn Learning",
    issueDate: "Sep 2024",
    credentialId: "75412f8d1c25c8e1b54d0a32d2b51f3316d30db25d7d2b3364592dcc2f9364ef",
    credentialURL:
      "https://www.linkedin.com/learning/certificates/75412f8d1c25c8e1b54d0a32d2b51f3316d30db25d7d2b3364592dcc2f9364ef?trk=share_certificate",
    skills: ["Python", "Object Oriented Programming"],
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-3.svg",
  },
  {
    id: 4,
    name: "Artificial Intelligence Fundamentals",
    organization: "IBM Skills Build",
    issueDate: "Dec 2024",
    credentialId: "e427414e-64fd-48c8-b696-c03dc60cb079",
    credentialURL: "https://www.credly.com/badges/e427414e-64fd-48c8-b696-c03dc60cb079",
    skills: ["AI", "Deep Learning", "Chatbots", "Natural Language Processing"],
    logo: "https://static.vecteezy.com/system/resources/previews/021/515/152/non_2x/ibm-brand-symbol-software-computer-logo-white-design-illustration-with-blue-background-free-vector.jpg",
  },
  {
    id: 5,
    name: "Networking Basics",
    organization: "Cisco",
    issueDate: "DEc 2024",
    credentialId: "06b51984-5f60-4b11-b02f-c744c097f458",
    credentialURL: "https://www.credly.com/badges/06b51984-5f60-4b11-b02f-c744c097f458",
    skills: ["Computer Networking", "IPv4 & IPv6", "TCP/IP", "OSI Model"],
    logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg",
  },
  {
    id: 6,
    name: "Data Structures and Algorithms",
    organization: "Infosys",
    issueDate: "June 2024",
    credentialId: "NA",
    credentialURL: "/DSA Infosys Certificate.pdf",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Java"],
    logo: "https://cdn.worldvectorlogo.com/logos/infosys-3.svg",
  },
  {
    id: 7,
    name: "MongoDB",
    organization: "MongoDB",
    issueDate: "June 2025",
    credentialId: "NA",
    credentialURL: "https://www.credly.com/badges/d16db66d-cdd0-423c-bdc5-f4d7381f0ac0/public_url",
    skills: ["CRUD Operations", "Aggregation", "Document Model"],
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
]

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  }

  return (
    <motion.section id="certifications" ref={sectionRef} className="py-20 bg-black/50 relative" style={{ opacity }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black/0 to-cyan-900/20"></div>

      <motion.div className="container mx-auto px-4 relative z-10" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-cyan-400">Certifications</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            I am committed to continuous learning and professional development. Here are some of the certifications I've
            earned to enhance my skills and expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              custom={index}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px -10px rgba(34, 211, 238, 0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Card className="h-full border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden group">
                <motion.div
                  className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <motion.div
                      className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-800 p-2 flex items-center justify-center"
                      whileHover={{ rotate: [0, -5, 5, -3, 3, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.organization}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20"
                      >
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Verified
                      </Badge>
                    </motion.div>
                  </div>

                  <motion.h3
                    className="text-xl font-bold mb-2 text-white"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {cert.name}
                  </motion.h3>

                  <motion.p
                    className="text-cyan-400 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {cert.organization}
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-2 mb-3 text-slate-300 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Calendar size={14} />
                    <span>Issued: {cert.issueDate}</span>
                  </motion.div>

                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-slate-400 mb-2">Credential ID: {cert.credentialId}</p>
                    <motion.div
                      className="flex flex-wrap gap-2 mt-3"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {cert.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-1 bg-slate-800 text-xs rounded-full text-slate-300 border border-slate-700"
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              transition: { delay: 0.1 * idx },
                            },
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(30, 41, 59, 0.8)",
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-cyan-500/50 text-black hover:bg-cyan-500/10"
                      asChild
                    >
                      <a href={cert.credentialURL} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Verify Credential
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="default"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-black hover:from-cyan-600 hover:to-purple-700 border-0"
            >
              <Award className="mr-2 h-4 w-4" /> View All Certifications
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
