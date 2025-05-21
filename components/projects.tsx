"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Code } from "lucide-react"

// Sample project data - add more projects here
const projectsData = [
  {
    id: 1,
    title: "Info-Bot",
    description:
      "RAG based AI assistant for college website. This is designed to help users navigate and understand the resources, rules, and offerings of a college website. Whether you're a prospective student or a current one, this chatbot ensures that you get the right answers — fast and accurately.",
    tags: ["Python", "FastAPI", "FAISS", "JavaScript", "Google Gemini"],
    githubUrl: "https://github.com/SrujanPR/Info-Bot",
  },
  {
    id: 2,
    title: "Simplify Tax",
    description:
      "AI-powered tool for Indian taxpayers. Automates tax filing and optimization by reading statements, classifying income, calculating liabilities, and recommending the best tax regime and savings.",
    tags: ["AI Agents[CrewAI]", "Python", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/SrujanPR/Simplify-Tax",
  },
  {
    id: 3,
    title: "AI Diagnostic Assistant for Remote Areas",
    description:
      "AI-powered tool using multiple intelligent agents and Google's Gemini model for AI-driven differential diagnosis in remote/underserved healthcare, based on patient data.",
    tags: ["Streamlit", "CrewAI", "Python", "LiteLLM"],
    githubUrl: "https://github.com/SrujanPR/AI-Diagnostic-Assistant",
  },
  {
    id: 4,
    title: "Spam Email Classifier",
    description:
      "A machine learning web application that classifies whether an email subject line is Spam or Not Spam using a Naive Bayes model. Built using Python, Flask, and scikit-learn.",
    tags: ["HTML & CSS", "Flask", "Pandas", "Scikitlearn"],
    githubUrl: "https://github.com/SrujanPR/Spam-Email-Classifier",
  },
  {
    id: 5,
    title: "Vehicle Detection and Counting using YOLO11",
    description:
      "Real-time vehicle detection and counting using YOLOv11 and OpenCV. Processes video, tracks vehicles crossing a red line. Provides live visualizations of detections and counts.",
    tags: ["Yolo11", "OpenCV", "PyTorch", "Numpy"],
    githubUrl: "https://github.com/SrujanPR/Vehicle-Detection-and-Counter-using-Yolo11",
  },
  {
    id: 6,
    title: "Sorting Visualizer",
    description:
      "Interactive visualization tool for learning sorting algorithms. Users can generate or input arrays and see the sorting process step-by-step.",
    tags: ["Data Structures & Alogrithms", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/SrujanPR/weather-app",
  },
  {
    id: 7,
    title: "Flappy Bird",
    description:
      "This project brings the simple, addictive gameplay to a Java environment, complete with custom graphics and animation. Fly the bird through the pipes, gain points, and try to beat your high score!",
    tags: ["Java", "Swing", "Event Handling"],
    githubUrl: "https://github.com/SrujanPR/Flappy-Bird",
  },
  {
    id: 8,
    title: "PDF Summarizer BOT ",
    description:
      "Interactive PDF assistant powered by cutting-edge Gemini's Generative AI language model! This Bot enables you to interact with your PDFs in a whole new way, extracting information, summarizing content, and much more.",
    tags: ["LangChain", "PyPDF2", "Python", "Streamlit"],
    githubUrl: "https://github.com/SrujanPR/PDF-Summarizer-BOT",
  },
]

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(4)
  const [animateNewProjects, setAnimateNewProjects] = useState(false)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  // Reset animation state when new projects are shown
  useEffect(() => {
    if (visibleProjects > 4) {
      // Brief delay before triggering animation for new projects
      const timer = setTimeout(() => {
        setAnimateNewProjects(true)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [visibleProjects])

  const showMoreProjects = () => {
    console.log("Showing all projects, total:", projectsData.length)
    setVisibleProjects(projectsData.length)
    // Reset animation state for new projects
    setAnimateNewProjects(false)
  }

  const displayedProjects = projectsData.slice(0, visibleProjects)
  const hasMoreProjects = visibleProjects < projectsData.length

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
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

  // Projects added after clicking "Show All Projects"
  const newProjectsVariants = {
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
    <motion.section id="projects" ref={sectionRef} className="py-20 bg-black/50 relative" style={{ opacity }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-black/0 to-purple-900/20"></div>

      <motion.div className="container mx-auto px-4 relative z-10" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my passion for creating intuitive and impactful
            digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Initial projects (first 4) */}
          {displayedProjects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}

          {/* Additional projects shown after clicking "Show More" */}
          {displayedProjects.slice(4).map((project, index) => (
            <motion.div
              key={project.id}
              variants={newProjectsVariants}
              initial="hidden"
              animate={animateNewProjects ? "visible" : "hidden"}
              custom={index}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px -10px rgba(34, 211, 238, 0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: index * 0.1,
              }}
            >
              <ProjectCard project={project} index={index + 4} />
            </motion.div>
          ))}
        </div>

        {hasMoreProjects && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={showMoreProjects}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-black"
              >
                <Code className="mr-2 h-5 w-5 text-black" /> Show All Projects
              </Button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  )
}

// Extracted ProjectCard component for cleaner code
function ProjectCard({ project, index }) {
  return (
    <Card className="overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full group">
      {/* Gradient line at the top of the card */}
      <motion.div
        className="h-1.5 bg-gradient-to-r from-cyan-400/70 to-purple-500/70 group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      ></motion.div>

      <CardContent className="p-6">
        <motion.h3
          className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h3>

        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="px-2 py-1 bg-black/60 backdrop-blur-sm text-xs rounded-full text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * tagIndex }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(8, 145, 178, 0.2)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex gap-3 mt-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-500/50 text-black hover:bg-cyan-500/10 group-hover:border-cyan-500/70"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 text-black" /> Code
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
