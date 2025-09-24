"use client"

import { useState } from "react"

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const FileTextIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
  </svg>
)

interface PortfolioWebsiteProps {
  isVisible?: boolean
}

export default function PortfolioWebsite({ isVisible = false }: PortfolioWebsiteProps) {
  console.log("[v0] PortfolioWebsite render - isVisible:", isVisible)

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [selectedProjectTopic, setSelectedProjectTopic] = useState<string>("All")
  const [selectedExperienceTab, setSelectedExperienceTab] = useState<string>("Professional")

  const projectTopics = ["All", "Machine Learning", "IoT/Hardware", "Web Development", "Mobile Apps"]

  const experienceCategories = ["Professional", "Academic", "Volunteering"]

  const experienceData = {
    Professional: [
      {
        id: "samsara",
        company: "Samsara",
        role: "Incoming Software Engineer Intern",
        period: "May 2025 - August 2025",
        logo: "SAMS",
        description: "Incoming software engineering intern focusing on IoT and fleet management solutions.",
      },
      {
        id: "qualcomm",
        company: "Qualcomm",
        role: "Software Engineer Intern",
        period: "May 2024 - Aug 2024",
        logo: "QCOM",
        description: "Developed embedded software solutions for mobile chipsets and wireless communication systems.",
      },
      {
        id: "level",
        company: "The Level Company",
        role: "Product Intern",
        period: "Jun 2023 - Oct 2023",
        logo: "LVL",
        description: "Built product features and analyzed user data to improve platform engagement.",
      },
    ],
    Academic: [
      {
        id: "uw-cdis",
        company: "UW Madison CDIS",
        role: "CS 544 (Big Data Systems) Course Assistant",
        period: "Sep 2024 - Jan 2025",
        logo: "UW",
        description:
          "Teaching assistant for advanced big data systems course, helping students with distributed computing concepts.",
      },
      {
        id: "uw-business",
        company: "Wisconsin School of Business",
        role: "RA Data Analyst",
        period: "Jul 2023 - Sep 2023",
        logo: "WSB",
        description:
          "Research assistant analyzing business data and creating statistical models for academic research.",
      },
    ],
    Volunteering: [
      {
        id: "volunteer-placeholder",
        company: "Coming Soon",
        role: "Volunteer Experience",
        period: "TBD",
        logo: "VOL",
        description: "Volunteer experiences will be added here.",
      },
    ],
  }

  const projects = [
    // ... existing projects ...
  ]

  const filteredProjects =
    selectedProjectTopic === "All" ? projects : projects.filter((project) => project.topic === selectedProjectTopic)

  return (
    <div
      className={`min-h-screen bg-background transition-opacity duration-500 ease-out ${
        isVisible
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {console.log("[v0] PortfolioWebsite div classes applied - isVisible:", isVisible)}
      <header className={`sleek-header ${isVisible ? "opacity-100 animate-header-appear" : "opacity-0"}`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
          {/* Sleek three-section header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Left section: Name and Email */}
            <div className="flex flex-col space-y-1 lg:w-1/3 lg:pr-4">
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-foreground tracking-wide elegant-heading text-center lg:text-left">
                KUSHAL AGRAWAL
              </h1>
              <a
                href="mailto:kagrawal24@wisc.edu"
                className="text-foreground hover:text-accent transition-colors duration-300 text-sm sm:text-base font-serif text-center lg:text-left"
              >
                kagrawal24@wisc.edu
              </a>
            </div>
            
            {/* Center section: Navigation */}
            <nav className="hidden lg:block lg:w-1/3">
              <div className="flex justify-center space-x-10 font-serif text-lg">
                <a href="#about" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
                  About
                </a>
                <a href="#experience" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
                  Experience
                </a>
                <a href="#projects" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
                  Projects
                </a>
                <a href="#education" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
                  Education
                </a>
              </div>
            </nav>

            {/* Right section: Social links */}
            <div className="flex items-center justify-center lg:justify-end space-x-8 lg:w-1/3 lg:pl-4">
              <a
                href="https://github.com/kagrawal6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-300"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kushal200903/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-300"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-foreground hover:text-accent transition-colors duration-300 text-lg font-serif underline font-medium"
              >
                CV
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="lg:hidden mt-4 pt-3 border-t border-border">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-serif text-lg">
              <a href="#about" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#experience" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
                Experience
              </a>
              <a href="#projects" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
                Projects
              </a>
              <a href="#education" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
                Education
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main
        className={`max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 transition-opacity duration-400 ease-out delay-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <section id="about" className="mb-16 sm:mb-20 fade-in-up delay-100">
          <h2 className="text-xl sm:text-2xl font-serif text-foreground text-center section-separator elegant-heading mb-8 sm:mb-12">
            About
          </h2>
          <div className="bg-card p-6 sm:p-8 border border-border rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-12 space-y-6 sm:space-y-8 md:space-y-0">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src="/images/profile-improved.jpg"
                    alt="Kushal Agrawal"
                    className="w-56 sm:w-72 h-56 sm:h-72 object-cover rounded-lg border border-border"
                    style={{ objectPosition: "center 30%" }}
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-base sm:text-lg text-card-foreground leading-relaxed font-sans elegant-body">
                  Passionate Computer Engineering student at UW-Madison, building innovative solutions that bridge
                  hardware and software. I focus on creating technology with meaningful impact, combining a strong
                  foundation in theory with practical applications in machine learning, embedded systems, and web
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-16 sm:mb-20 fade-in-up delay-200">
          <h2 className="text-xl sm:text-2xl font-serif text-foreground text-center section-separator elegant-heading mb-8 sm:mb-12">
            Experience
          </h2>

          <div className="experience-tabs mb-6 sm:mb-8">
            {experienceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedExperienceTab(category)}
                className={`experience-tab font-serif text-sm sm:text-lg ${selectedExperienceTab === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experienceData[selectedExperienceTab as keyof typeof experienceData].map((exp) => (
              <div key={exp.id} className="bg-card p-4 sm:p-6 border border-border rounded-lg experience-item">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted flex items-center justify-center flex-shrink-0 text-xs sm:text-base font-sans font-bold text-muted-foreground">
                    {exp.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-serif text-card-foreground elegant-heading mb-1 sm:mb-2">
                      {exp.role} @ {exp.company}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground font-mono mb-2 sm:mb-3">{exp.period}</p>
                    <p className="text-sm sm:text-base text-card-foreground font-sans elegant-body leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20 fade-in-up delay-300">
          <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-12 text-center section-separator elegant-heading">
            Projects
          </h2>
          <div className="text-center bg-card p-8 border border-border rounded-lg">
            <p className="text-lg text-muted-foreground font-sans">Coming soon - showcasing innovative projects</p>
          </div>
        </section>

        <section id="education" className="mb-20 fade-in-up delay-400">
          <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-12 text-center section-separator elegant-heading">
            Education
          </h2>
          <div className="bg-card p-6 border border-border rounded-lg">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center flex-shrink-0 border-2 border-foreground">
                <span className="text-base font-sans font-bold">UW</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-2 elegant-heading">
                  University of Wisconsin-Madison
                </h3>
                <h4 className="text-base text-muted-foreground mb-4 font-sans">BS Computer Engineering</h4>
                <div className="flex flex-wrap gap-3 text-sm font-mono">
                  <span className="bg-foreground text-background px-3 py-1 border border-foreground">2022-2026</span>
                  <span className="bg-foreground text-background px-3 py-1 border border-foreground">GPA: 3.8/4.0</span>
                  <span className="bg-foreground text-background px-3 py-1 border border-foreground">Dean's List</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`bg-background py-6 transition-all duration-600 ease-out delay-900 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground font-mono text-xs elegant-body">
            © 2024 Kushal Agrawal | Built with passion for technology
          </p>
        </div>
      </footer>
    </div>
  )
}
