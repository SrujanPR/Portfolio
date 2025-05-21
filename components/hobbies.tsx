"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brush, Music, Book, Tv, Heart, Laptop, Globe, Palette } from "lucide-react"

// Sample hobbies data
const hobbiesData = [
  {
    icon: <Brush className="h-6 w-6" />,
    title: "Drawing",
    description:
      "Sketching worlds and bringing imagination to life on paper. I find joy in portraiture and exploring different artistic mediums.",
  },
  {
    icon: <Music className="h-6 w-6" />,
    title: "Listening to Music ",
    description:
      "Immersing myself in powerful rhythms and lyrical stories across rock, rap, and movie soundtracks. I love discovering new artists and reliving cinematic moments through their scores.",
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Engaging with anime and manhwa ",
    description:
      "Immersing myself in captivating animated visuals and unique storytelling from Japan and Korea. I enjoy exploring the diverse art styles and engaging narratives these mediums offer.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        {/* Cricket bat custom SVG */}
        <path d="M6 21h4" />
        <path d="M8 21v-4" />
        <path d="M8 13V8.5a4.5 4.5 0 0 1 9 0V13" />
        <path d="M14 21l-2-4" />
        <path d="M6 13h12" />
        <path d="M16 21l2-4" />
      </svg>
    ),
    title: "Playing Badminiton & Cricket",
    description:
      "Enjoying the thrill of the smash on the badminton court and the strategic plays on the cricket field. Both sports offer a fantastic way to stay active and connect with friends.",
  },
  {
    icon: <Tv className="h-6 w-6" />,
    title: "Watching Cricket",
    description:
      "Getting caught up in the excitement of every ball, from powerful hits to strategic bowling. I particularly enjoy following ODI matches and the energy of T20 leagues.",
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Streaming Movies & Series",
    description:
      "Exploring diverse stories and characters that transport me to different worlds and perspectives. I appreciate well-crafted narratives across genres, from gripping dramas to lighthearted comedies.",
  },
]

// Sample volunteering data
const volunteeringData = [
  {
    title: "Student Volunteer",
    organization: "U&I Trust",
    period: "2024 - Present",
    description:
      "Spending my Sundays teaching underprivileged children, fostering their growth and learning. It's a rewarding experience to contribute to their education and development.",
  },
  {
    title: "Volunteer",
    organization: "NSS - JSSATEB",
    period: "2022 - Present",
    description:
      "Actively contributing to the betterment of society through various campaigns and initiatives focused on crucial issues like water conservation, sustainability, and improving government school facilities. It's fulfilling to work collectively towards positive social impact.",
  },
  {
    title: "Student Co-ordinator",
    organization: "SAMYOG - JSSATEB",
    period: "2022 - Present",
    description:
      "Co-ordinating and leading technical activities like hackathons and vibrant cultural events for the college department. It's exciting to foster both innovation and community spirit among students.",
  },
]

export default function Hobbies() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section id="hobbies" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black/0 to-purple-900/20"></div>

      <motion.div className="container mx-auto px-4 relative z-10" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Interests</span> & <span className="text-cyan-400">Activities</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Beyond coding and technology, I'm passionate about various hobbies and giving back to the community through
            volunteering. Here's a glimpse into what I enjoy doing in my free time.
          </p>
        </motion.div>

        {/* Hobbies Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center"
          >
            <Palette className="mr-3 text-cyan-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Hobbies & Interests
            </span>
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hobbiesData.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px -10px rgba(34, 211, 238, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <motion.div
                      className="mb-4 p-3 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-slate-700 w-14 h-14 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-600 transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {hobby.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2 text-white">{hobby.title}</h4>
                    <p className="text-slate-300">{hobby.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Volunteering Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center"
          >
            <Heart className="mr-3 text-cyan-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Volunteering & Community Work
            </span>
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {volunteeringData.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px -10px rgba(34, 211, 238, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full overflow-hidden">
                  <motion.div
                    className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-1 text-white">{item.title}</h4>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-cyan-400 font-medium">{item.organization}</p>
                      <span className="text-sm text-slate-400">{item.period}</span>
                    </div>
                    <p className="text-slate-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Other Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
          whileHover={{
            y: -5,
            boxShadow: "0 20px 40px -20px rgba(34, 211, 238, 0.2)",
          }}
        >
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            ></motion.div>

            <motion.h3
              className="text-2xl font-bold mb-6 flex items-center justify-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Globe className="mr-3 text-cyan-400" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Other Pursuits & Interests
              </span>
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex flex-col items-center p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Book className="h-8 w-8 text-cyan-400 mb-3" />
                <h4 className="font-bold mb-1 text-white">Technical Writing</h4>
                <p className="text-sm text-slate-300 text-center">
                  Contributing articles to tech blogs and publications about web development and AI
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Globe className="h-8 w-8 text-cyan-400 mb-3" />
                <h4 className="font-bold mb-1 text-white">Language Learning</h4>
                <p className="text-sm text-slate-300 text-center">
                  Currently learning Japanese, fascinated by its cultures and communication
                </p>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I believe in continuous growth, both personally and professionally. These activities help me maintain a
              balanced life, broaden my perspective, and bring fresh ideas to my technical work. I'm always open to new
              experiences and challenges!
            </motion.p>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
