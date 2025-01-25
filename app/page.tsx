"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Sun,
  Moon,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Mail,
  Book,
  Code,
  Award,
  Cloud,
  Briefcase,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Head from "next/head"
import { PopupWindow } from "@/components/PopupWindow"

const links = [
  {
    name: "Aayush Ki Mehnat",
    url: "https://aayushkimehnat.vercel.app",
    icon: Book,
    description: "Access study materials and resources for RTU Kota affiliated colleges.",
  },
  {
    name: "React Portfolio",
    url: "https://aayush-ki-portfolio.vercel.app",
    icon: Code,
    description: "Explore my web development projects and skills built with React.",
  },
  {
    name: "Next Js Portfolio",
    url: "https://aiclassof26.vercel.app/portfolio/aayush-sharma",
    icon: Code,
    description: "Another Protfolio Showcasing the Details",
  },
  {
    name: "Resume",
    url: "https://aayush-ki-resume.vercel.app",
    icon: Briefcase,
    description: "View my professional resume and qualifications.",
  },
  {
    name: "Pce Student Council",
    url: "https://pce-student-council.vercel.app/",
    icon: Book,
    description:
      "The PCE Student Council website is a platform for Poornima College of Engineering students, promoting engagement and community. It features information on events, student representation, club support, and campus news, encouraging students to get involved and make a difference.",
  },
  {
    name: "AiClassOf26",
    url: "https://aiclassof26.vercel.app/",
    icon: Code,
    description:
      "Creating a space where students can connect, collaborate, and share their journey in artificial intelligence.",
  },
  {
    name: "Weather App",
    url: "https://aayush-weather-app.vercel.app",
    icon: Cloud,
    description: "Check out my weather application project.",
  },
  {
    name: "Fin Smart Accounitng Replicate",
    url: "https://fin-smart-accounting-aayushkimehnat.vercel.app/",
    icon: Briefcase,
    description:
      "Fin Smart Accounting offers professional accounting and financial services, specializing in tax and business management solutions.",
  },
  {
    name: "Tailwind Portfolio",
    url: "https://aayush-ki-pehchan.vercel.app",
    icon: Code,
    description: "A portfolio built using Tailwind CSS.",
  },
  {
    name: "MERN Stack Portfolio Dashboard",
    url: "https://aayush-mern-stack-portfolio-dashboard.vercel.app",
    icon: Code,
    description: "Explore my MERN stack portfolio with an interactive dashboard.",
  },
  {
    name: "MERN Stack Portfolio",
    url: "https://aayushsharma.vercel.app",
    icon: Code,
    description: "Another MERN stack portfolio showcasing my projects and skills.",
  },
  {
    name: "Complete Education",
    url: "https://complete-education.vercel.app/",
    icon: Book,
    description: "An old educational portal with various resources.",
  },
]

export default function LinkTree() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [expandedLink, setExpandedLink] = useState(null)
  const [popupData, setPopupData] = useState({ url: "", name: "" })
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const handleLinkClick = (url: string, name: string) => {
    setPopupData({ url, name })
    setIsPopupOpen(true)
  }

  return (
    <>
      <Head>
        <title>Aayush Sharma - Web Developer & Computer Science Student</title>
        <meta
          name="description"
          content="Explore Aayush Sharma's projects, skills, and achievements. Web developer and computer science student passionate about creating innovative solutions and sharing knowledge."
        />
        <meta property="og:title" content="Aayush Sharma - Web Developer & Computer Science Student" />
        <meta
          property="og:description"
          content="Explore Aayush Sharma's projects, skills, and achievements. Web developer and computer science student passionate about creating innovative solutions and sharing knowledge."
        />
        <meta property="og:image" content="https://aayushkimehnat.vercel.app/img/aayush.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aayush Sharma - Web Developer & Computer Science Student" />
        <meta
          name="twitter:description"
          content="Explore Aayush Sharma's projects, skills, and achievements. Web developer and computer science student passionate about creating innovative solutions and sharing knowledge."
        />
        <meta name="twitter:image" content="https://aayushkimehnat.vercel.app/img/aayush.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Aayush Sharma",
            url: "https://aiclassof26.vercel.app/portfolio/aayush-sharma",
            image: "https://aayushkimehnat.vercel.app/img/aayush.png",
            sameAs: [
              "#",
              "https://github.com/aayushsh2003",
              "https://in.linkedin.com/in/aayush-sharma-a44062299",
              "https://www.instagram.com/aayushsh2003/",
            ],
            jobTitle: "Web Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            alumniOf: [
              {
                "@type": "EducationalOrganization",
                name: "Poornima College of Engineering",
              },
              {
                "@type": "EducationalOrganization",
                name: "Kendriya Vidyalaya No. 5 Jaipur",
              },
            ],
            knowsAbout: [
              "Web Development",
              "Python",
              "Student Management Systems",
              "HTML5",
              "CSS",
              "JavaScript",
              "React",
              "MERN Stack",
            ],
          })}
        </script>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl"
        >
          <div className="flex justify-end mb-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="rounded-full"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={theme === "dark" ? "dark" : "light"}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      </motion.div>
                    </AnimatePresence>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <motion.div
            className="text-center mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden"
            >
              <img
                src="https://aayushkimehnat.vercel.app/img/aayush.png"
                alt="Aayush Sharma - Web Developer and Computer Science Student"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 mix-blend-overlay"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-white"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                style={{
                  filter: "blur(20px)",
                }}
              />
            </motion.div>
          </motion.div>

          <header className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Aayush Sharma</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Web Developer & Computer Science Student</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Passionate about creating innovative solutions and sharing knowledge. Currently studying at{" "}
              <a
                href="https://www.poornima.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                Poornima College of Engineering
              </a>
              .
              <br />
              Alumnus of{" "}
              <a
                href="https://no5jaipur.kvs.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                Kendriya Vidyalaya No. 5 Jaipur
              </a>
              .
            </p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <SocialIcon Icon={Twitter} href="#" name="Twitter" />
              <SocialIcon Icon={Github} href="https://github.com/aayushsh2003" name="GitHub" />
              <SocialIcon Icon={Linkedin} href="https://in.linkedin.com/in/aayush-sharma-a44062299" name="LinkedIn" />
              <SocialIcon Icon={Instagram} href="https://www.instagram.com/aayushsh2003/" name="Instagram" />
              <SocialIcon Icon={Mail} href="mailto:aayushsharma4437@gmail.com" name="Email" />
            </motion.div>
          </header>

          <nav className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {links.map((link, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{ height: expandedLink === index ? "auto" : "60px" }}
                className="overflow-hidden"
              >
                <motion.button
                  onClick={() => setExpandedLink(expandedLink === index ? null : index)}
                  className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-purple-500 hover:text-white dark:hover:bg-purple-600 transition-colors duration-300 flex items-center justify-between"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center">
                    <link.icon className="h-5 w-5 mr-2" />
                    {link.name}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      expandedLink === index ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
                <AnimatePresence>
                  {expandedLink === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 bg-gray-50 dark:bg-gray-600 rounded-b-lg"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{link.description}</p>
                      <button
                        onClick={() => handleLinkClick(link.url, link.name)}
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit {link.name}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </nav>

          <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Aayush Sharma. All rights reserved.</p>
            <p className="mt-2">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                Next.js
              </a>{" "}
              and
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                {" "}
                Tailwind CSS
              </a>
            </p>
          </footer>
        </motion.div>
      </main>
      <PopupWindow
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        url={popupData.url}
        name={popupData.name}
      />
    </>
  )
}

function SocialIcon({ Icon, href, name }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="h-6 w-6" />
          </motion.a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

