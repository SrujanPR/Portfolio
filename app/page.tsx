import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import CustomCursor from "@/components/custom-cursor"
import Education from "@/components/education"
import Hobbies from "@/components/hobbies"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import ScrollIndicator from "@/components/scroll-indicator"
import Experience from "@/components/experience"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white overflow-hidden">
      <CustomCursor />
      <ScrollIndicator />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  )
}
