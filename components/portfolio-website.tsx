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
      className={`min-h-screen bg-background transition-all duration-800 ease-out transform-gpu ${
        isVisible
          ? "opacity-100 translate-y-0 animate-elegant-entrance"
          : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      {console.log("[v0] PortfolioWebsite div classes applied - isVisible:", isVisible)}
      <header className={`sticky-header ${isVisible ? "opacity-100 animate-header-appear" : "opacity-0"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-lg font-serif font-bold text-foreground tracking-wider elegant-heading">
                KUSHAL AGRAWAL
              </h1>
              <div className="hidden md:flex items-center space-x-4 text-sm font-serif">
                <a
                  href="mailto:kagrawal24@wisc.edu"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  kagrawal24@wisc.edu
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="tel:+16088951762"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  (608) 895-1762
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/kagrawal6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/kushal200903/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <LinkedinIcon />
              </a>
              <button className="bg-foreground text-background px-4 py-2 text-sm font-serif font-medium hover:bg-accent transition-colors duration-200 flex items-center space-x-2">
                <FileTextIcon />
                <span>Resume</span>
              </button>
            </div>
          </div>

          <nav className="flex justify-center mt-4 pt-3 border-t border-border">
            <div className="flex space-x-8 font-serif text-sm">
              <a href="#about" className="text-foreground hover:text-accent transition-colors duration-200">
                About
              </a>
              <a href="#experience" className="text-foreground hover:text-accent transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="text-foreground hover:text-accent transition-colors duration-200">
                Projects
              </a>
              <a href="#education" className="text-foreground hover:text-accent transition-colors duration-200">
                Education
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main
        className={`max-w-6xl mx-auto px-6 pt-40 pb-16 transition-all duration-600 ease-out delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <section id="about" className="compact-section fade-in-up delay-100">
          <h2 className="section-title font-serif text-foreground text-center section-separator elegant-heading">
            About
          </h2>
          <div className="compact-card">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-6 md:space-y-0">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src="/images/profile-improved.jpg"
                    alt="Kushal Agrawal"
                    className="w-64 h-64 object-cover rounded-lg"
                    style={{ objectPosition: "center 30%" }}
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm text-card-foreground leading-relaxed font-sans elegant-body">
                  Passionate Computer Engineering student at UW-Madison, building innovative solutions that bridge
                  hardware and software. I focus on creating technology with meaningful impact, combining a strong
                  foundation in theory with practical applications in machine learning, embedded systems, and web
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="compact-section fade-in-up delay-200">
          <h2 className="section-title font-serif text-foreground text-center section-separator elegant-heading">
            Experience
          </h2>

          <div className="experience-tabs">
            {experienceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedExperienceTab(category)}
                className={`experience-tab font-serif ${selectedExperienceTab === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {experienceData[selectedExperienceTab as keyof typeof experienceData].map((exp) => (
              <div key={exp.id} className="compact-card experience-item">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center flex-shrink-0 text-sm font-sans font-medium text-muted-foreground">
                    {exp.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="experience-role font-serif text-card-foreground elegant-heading">
                      {exp.role} @ {exp.company}
                    </h4>
                    <p className="experience-period text-muted-foreground font-mono mb-2">{exp.period}</p>
                    <p className="experience-description text-card-foreground font-sans elegant-body">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="compact-section fade-in-up delay-300">
          <h2 className="text-xl font-serif text-foreground mb-8 text-center section-separator elegant-heading">
            Projects
          </h2>
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-sans">Coming soon - showcasing innovative projects</p>
          </div>
        </section>

        <section id="education" className="compact-section fade-in-up delay-400">
          <h2 className="text-xl font-serif text-foreground mb-8 text-center section-separator elegant-heading">
            Education
          </h2>
          <div className="compact-card">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-sans font-bold">UW</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-serif font-bold text-card-foreground mb-1 elegant-heading">
                  University of Wisconsin-Madison
                </h3>
                <h4 className="text-sm text-muted-foreground mb-2 font-sans">BS Computer Engineering</h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="bg-muted text-muted-foreground px-2 py-1">2022-2026</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1">GPA: 3.8/4.0</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1">Dean's List</span>
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
