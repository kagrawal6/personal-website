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

interface Project {
  topic: string
}

export default function PortfolioWebsite({ isVisible = false }: PortfolioWebsiteProps) {
  console.log("[v0] PortfolioWebsite render - isVisible:", isVisible)

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [selectedProjectTopic, setSelectedProjectTopic] = useState<string>("All")
  const [selectedExperienceTab, setSelectedExperienceTab] = useState<string>("Professional")
  const [selectedExperience, setSelectedExperience] = useState<any>(null)

  const projectTopics = ["All", "Machine Learning", "IoT/Hardware", "Web Development", "Mobile Apps"]

  const experienceCategories = ["Professional", "Academic", "Volunteering"]

  const experienceData = {
    Professional: [
      {
        id: "professional-placeholder",
        company: "Coming Soon",
        role: "Professional Experience",
        period: "TBD",
        logo: "PRO",
        description: "Updated professional experience details will be added shortly.",
        detailedDescription: "This section is being refreshed. Check back soon for accurate information about recent professional roles, responsibilities, and accomplishments.",
        technologies: [],
        achievements: []
      },
    ],
    Academic: [
      {
        id: "academic-placeholder",
        company: "Coming Soon",
        role: "Academic Experience",
        period: "TBD",
        logo: "ACAD",
        description: "Updated academic information will be available soon.",
        detailedDescription: "Academic roles, teaching positions, and research experiences are being updated. Please check back for verified information.",
        technologies: [],
        achievements: []
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
        detailedDescription: "Volunteer experiences and community involvement will be documented here as they develop.",
        technologies: [],
        achievements: []
      },
    ],
  }

  const projects: Project[] = []

  const filteredProjects =
    selectedProjectTopic === "All" ? projects : projects.filter((project) => project.topic === selectedProjectTopic)

  const sectionHeadingClass =
    "font-serif section-separator elegant-heading text-[clamp(1.6rem,4vw,2.5rem)] text-center mb-6"

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
                  <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-wide elegant-heading text-center lg:text-left" style={{ color: '#8b1538' }}>
                    KUSHAL AGRAWAL
                  </h1>
              <a
                href="mailto:kagrawal24@wisc.edu"
                className="text-foreground transition-colors duration-300 text-sm sm:text-base font-serif text-center lg:text-left"
                onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                kagrawal24@wisc.edu
              </a>
            </div>
            
            {/* Center section: Navigation */}
            <nav className="hidden lg:block lg:w-1/3">
              <div className="flex justify-center space-x-10 font-serif text-lg">
                <a href="#about" className="text-foreground transition-colors duration-300 font-medium"
                   onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                   onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  About
                </a>
                <a href="#experience" className="text-foreground transition-colors duration-300 font-medium"
                   onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                   onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Experience
                </a>
                <a href="#projects" className="text-foreground transition-colors duration-300 font-medium"
                   onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                   onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Projects
                </a>
                <a href="#education" className="text-foreground transition-colors duration-300 font-medium"
                   onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                   onMouseLeave={(e) => e.currentTarget.style.color = ''}>
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
                className="text-foreground transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kushal200903/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-foreground transition-colors duration-300 text-lg font-serif underline font-medium"
                onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                CV
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="lg:hidden mt-4 pt-3 border-t border-border">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-serif text-lg">
                <a href="#about" className="text-foreground transition-colors duration-300 font-medium"
                   onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                   onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  About
                </a>
                <a href="#experience" className="text-foreground transition-colors duration-300 font-medium"
                   onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                   onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Experience
                </a>
                <a href="#projects" className="text-foreground transition-colors duration-300 font-medium"
                   onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                   onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Projects
                </a>
                <a href="#education" className="text-foreground transition-colors duration-300 font-medium"
                   onMouseEnter={(e) => e.currentTarget.style.color = '#8b1538'}
                   onMouseLeave={(e) => e.currentTarget.style.color = ''}>
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
        <section id="about" className="mb-20 sm:mb-24 fade-in-up delay-100 px-2">
          <h2 className={`${sectionHeadingClass} text-center`} style={{ color: '#8b1538' }}>
            About
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 space-y-6 lg:space-y-0">
            <div className="lg:w-1/3 flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/images/profile-improved.jpg"
                  alt="Kushal Agrawal"
                  className="w-48 sm:w-56 lg:w-full aspect-square object-cover rounded-lg border border-border"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-4 sm:space-y-5">
                <p className="text-[clamp(0.95rem,2.7vw,1.05rem)] text-foreground leading-relaxed font-serif font-light elegant-body text-center lg:text-left">
                  I grew up on Doraemon, always amazed by the gadgets from the future and wishing I could build one myself. That curiosity is what first pulled me into technology, the idea that imagination and engineering could shape the world around us.
                </p>
                <p className="text-[clamp(0.95rem,2.7vw,1.05rem)] text-foreground leading-relaxed font-serif font-light elegant-body text-center lg:text-left">
                  I am now a <span className="font-bold">4th-year Computer Engineering and Computer Science student at UW–Madison</span>, currently on a co-op with <span className="font-bold">Endress+Hauser Group</span> where I work on Netilion, their IIoT platform, including gateways and Bluetooth connectivity features. Through my courses and projects I have been exploring hardware-dependent code, parallel performance tuning, and how modern AI tools are built from a systems perspective.
                </p>
                <p className="text-[clamp(0.95rem,2.7vw,1.05rem)] text-foreground leading-relaxed font-serif font-light elegant-body text-center lg:text-left">
                  For me, it is about chasing the questions that keep me curious and turning those answers into tools that make life and work easier for others, and in doing so, shaping technology that moves us closer to the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-16 sm:mb-20 fade-in-up delay-200 px-2">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className={sectionHeadingClass} style={{ color: '#8b1538' }}>
              Experience
            </h2>
            <p className="text-[clamp(0.95rem,2.8vw,1.125rem)] text-foreground font-serif font-light max-w-2xl mx-auto">
              A concise look at professional, academic, and volunteering journeys.
            </p>
          </div>

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

          <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto px-2 sm:px-4">
            {experienceData[selectedExperienceTab as keyof typeof experienceData].map((exp) => (
              <div 
                key={exp.id} 
                className="border-b border-border pb-6 sm:pb-8 last:border-b-0 cursor-pointer hover:opacity-80 transition-opacity duration-200 text-center px-4"
                onClick={() => setSelectedExperience(exp)}
              >
                <div>
                  <div className="text-xs sm:text-sm text-foreground font-mono mb-1">{exp.period}</div>
                  <div className="text-xs text-foreground opacity-70 font-sans mb-3">{exp.company}</div>
                  <h4 className="text-[clamp(1.15rem,3vw,1.5rem)] font-serif text-foreground elegant-heading mb-3 flex items-center justify-center gap-2">
                    {exp.role}
                    <svg className="w-3 h-3 text-foreground opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </h4>
                  <p className="text-[clamp(0.95rem,2.4vw,1.1rem)] text-foreground font-serif font-light elegant-body leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-3 text-xs text-foreground opacity-60 font-sans">
                    Click to view details →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20 fade-in-up delay-300 px-2">
          <h2 className={sectionHeadingClass} style={{ color: '#8b1538' }}>
            Projects
          </h2>
          <div className="text-center bg-card p-6 border border-border rounded-lg max-w-3xl mx-auto">
            <p className="text-[clamp(1rem,2.8vw,1.15rem)] text-muted-foreground font-serif font-light">
              Coming soon - showcasing innovative projects
            </p>
          </div>
        </section>

        <section id="education" className="mb-20 fade-in-up delay-400 px-2">
          <h2 className={sectionHeadingClass} style={{ color: '#8b1538' }}>
            Education
          </h2>
          <div className="bg-card p-5 border border-border rounded-lg max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-5 space-y-4 sm:space-y-0">
              <div className="w-14 h-14 bg-foreground text-background flex items-center justify-center flex-shrink-0 border-2 border-foreground mx-auto sm:mx-0">
                <span className="text-base font-sans font-bold">UW</span>
              </div>
              <div className="flex-1">
                <h3 className="text-[clamp(1.2rem,3.2vw,1.6rem)] font-serif font-bold text-card-foreground mb-2 elegant-heading text-center sm:text-left">
                  University of Wisconsin-Madison
                </h3>
                <h4 className="text-[clamp(1rem,2.8vw,1.15rem)] text-muted-foreground mb-3 font-serif font-light text-center sm:text-left">
                  BS Computer Engineering
                </h4>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-xs font-mono">
                  <span className="bg-foreground text-background px-2 py-1 border border-foreground">2022-2026</span>
                  <span className="bg-foreground text-background px-2 py-1 border border-foreground">GPA: 3.8/4.0</span>
                  <span className="bg-foreground text-background px-2 py-1 border border-foreground">Dean's List</span>
                </div>
              </div>
            </div>
          </div>
        </section>
          </main>

          {/* Experience Detail Modal */}
          {selectedExperience && (
            <div className="fixed inset-0 bg-background bg-opacity-95 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedExperience(null)}>
              <div className="bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg border-2 border-border shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-serif text-foreground elegant-heading mb-2">
                        {selectedExperience.role}
                      </h3>
                      <div className="text-base text-foreground font-sans mb-1">{selectedExperience.company}</div>
                      <div className="text-xs text-foreground opacity-70 font-mono">{selectedExperience.period}</div>
                    </div>
                    <button
                      onClick={() => setSelectedExperience(null)}
                      className="text-foreground hover:text-accent transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h4 className="text-base font-serif text-foreground mb-3 elegant-heading">Overview</h4>
                      <p className="text-sm text-foreground font-serif font-light elegant-body leading-relaxed">
                        {selectedExperience.detailedDescription}
                      </p>
                    </div>

                    {selectedExperience.technologies.length > 0 && (
                      <div>
                        <h4 className="text-base font-serif text-foreground mb-3 elegant-heading">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedExperience.technologies.map((tech: string) => (
                            <span key={tech} className="px-2 py-1 text-xs border border-foreground text-foreground font-serif">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedExperience.achievements.length > 0 && (
                      <div>
                        <h4 className="text-base font-serif text-foreground mb-3 elegant-heading">Key Achievements</h4>
                        <ul className="space-y-2">
                          {selectedExperience.achievements.map((achievement: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="text-foreground mr-2">•</span>
                              <span className="text-sm text-foreground font-serif font-light elegant-body">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

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
