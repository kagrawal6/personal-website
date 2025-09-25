"use client"

import { useState } from "react"

interface DetailedExperiencesProps {
  isVisible?: boolean
  onClose?: () => void
}

export default function DetailedExperiences({ isVisible = false, onClose }: DetailedExperiencesProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All")

  const experienceCategories = ["All", "Professional", "Academic", "Volunteering"]

  const allExperiences = [
    {
      id: "samsara",
      company: "Samsara",
      role: "Incoming Software Engineer Intern",
      period: "May 2025 - August 2025",
      category: "Professional",
      description: "Incoming software engineering intern focusing on IoT and fleet management solutions.",
      detailedDescription: "Upcoming internship focused on developing scalable IoT solutions for fleet management. Will be working on real-time data processing, vehicle telematics, and dashboard analytics to help businesses optimize their fleet operations.",
      technologies: ["Python", "JavaScript", "React", "IoT", "Real-time Systems"],
      achievements: ["Selected from competitive applicant pool", "Focus on scalable fleet management solutions"],
      startDate: "2025-05-01"
    },
    {
      id: "endress-hauser",
      company: "Endress+Hauser Group",
      role: "Software Engineering Co-op",
      period: "Jan 2025 - Current",
      category: "Professional",
      description: "Working on Netilion IIoT platform, developing gateways and Bluetooth connectivity features.",
      detailedDescription: "Currently developing features for Netilion, Endress+Hauser's Industrial Internet of Things platform. Focus on gateway development and Bluetooth connectivity solutions to enable seamless device communication and data collection in industrial environments.",
      technologies: ["IIoT", "Bluetooth", "Gateway Development", "Industrial Systems", "Connectivity Protocols"],
      achievements: ["Contributing to enterprise IIoT platform", "Developing Bluetooth connectivity features", "Working with industrial gateway systems"],
      startDate: "2025-01-01"
    },
    {
      id: "uw-cdis",
      company: "UW Madison CDIS",
      role: "CS 544 (Big Data Systems) Course Assistant",
      period: "Sep 2024 - Jan 2025",
      category: "Academic",
      description: "Teaching assistant for advanced big data systems course, helping students with distributed computing concepts.",
      detailedDescription: "Teaching assistant for CS 544, an advanced graduate-level course on big data systems. Helped students understand distributed computing concepts, MapReduce, Spark, and modern data processing frameworks.",
      technologies: ["Apache Spark", "Hadoop", "MapReduce", "Distributed Systems", "Python"],
      achievements: ["Assisted 100+ graduate students", "Led weekly office hours", "Created supplementary learning materials"],
      startDate: "2024-09-01"
    },
    {
      id: "qualcomm",
      company: "Qualcomm",
      role: "Software Engineer Intern",
      period: "May 2024 - Aug 2024",
      category: "Professional",
      description: "Developed embedded software solutions for mobile chipsets and wireless communication systems.",
      detailedDescription: "Worked on embedded software development for next-generation mobile chipsets. Contributed to wireless communication protocols and optimized low-level system performance for mobile devices.",
      technologies: ["C/C++", "Embedded Systems", "Wireless Protocols", "ARM", "RTOS"],
      achievements: ["Optimized system performance by 15%", "Contributed to 5G protocol implementation", "Received positive feedback from senior engineers"],
      startDate: "2024-05-01"
    },
    {
      id: "uw-business",
      company: "Wisconsin School of Business",
      role: "RA Data Analyst",
      period: "Jul 2023 - Sep 2023",
      category: "Academic",
      description: "Research assistant analyzing business data and creating statistical models for academic research.",
      detailedDescription: "Conducted data analysis for business research projects, creating statistical models to understand market trends and consumer behavior. Worked with large datasets to derive actionable insights for academic publications.",
      technologies: ["R", "Python", "Statistical Modeling", "Data Visualization", "Excel"],
      achievements: ["Analyzed datasets with 50K+ records", "Contributed to 2 research papers", "Developed automated analysis pipelines"],
      startDate: "2023-07-01"
    },
    {
      id: "level",
      company: "The Level Company",
      role: "Product Intern",
      period: "Jun 2023 - Oct 2023",
      category: "Professional",
      description: "Built product features and analyzed user data to improve platform engagement.",
      detailedDescription: "Led product development initiatives to enhance user engagement and platform growth. Analyzed user behavior data and implemented features that improved user retention and satisfaction.",
      technologies: ["React", "Node.js", "Data Analytics", "SQL", "A/B Testing"],
      achievements: ["Increased user engagement by 25%", "Led design of 3 major features", "Analyzed data from 10K+ users"],
      startDate: "2023-06-01"
    }
  ]

  // Sort experiences chronologically (most recent first)
  const sortedExperiences = allExperiences.sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  // Filter experiences based on selected category
  const filteredExperiences = selectedFilter === "All" 
    ? sortedExperiences 
    : sortedExperiences.filter(exp => exp.category === selectedFilter)

  return (
    <div
      className={`fixed inset-0 bg-background z-50 transition-opacity duration-500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="min-h-screen overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 bg-background border-b border-border z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl sm:text-3xl font-serif elegant-heading" style={{ color: '#8b1538' }}>
                Detailed Experience
              </h1>
              <button
                onClick={onClose}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Filter Tabs */}
          <div className="experience-tabs mb-8 sm:mb-12">
            {experienceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`experience-tab font-serif text-sm sm:text-lg ${selectedFilter === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12 sm:space-y-16">
            {filteredExperiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline connector */}
                {index < filteredExperiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-full bg-border"></div>
                )}
                
                <div className="flex items-start space-x-6 sm:space-x-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-foreground rounded-full flex items-center justify-center mt-2">
                    <div className="w-4 h-4 bg-background rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-card p-6 sm:p-8 border border-border rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-serif text-foreground elegant-heading mb-2">
                            {exp.role}
                          </h3>
                          <div className="text-lg text-foreground font-sans mb-1">{exp.company}</div>
                          <div className="text-sm text-foreground opacity-70 font-mono">{exp.period}</div>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="inline-block px-3 py-1 text-xs font-serif border border-foreground text-foreground">
                            {exp.category}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <p className="text-base sm:text-lg text-foreground font-serif font-light elegant-body leading-relaxed">
                            {exp.detailedDescription}
                          </p>
                        </div>

                        {exp.technologies.length > 0 && (
                          <div>
                            <h4 className="text-base font-serif text-foreground mb-3 elegant-heading">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech: string) => (
                                <span key={tech} className="px-2 py-1 text-xs border border-border text-foreground font-serif bg-transparent">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {exp.achievements.length > 0 && (
                          <div>
                            <h4 className="text-base font-serif text-foreground mb-3 elegant-heading">Key Achievements</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement: string, achievementIndex: number) => (
                                <li key={achievementIndex} className="flex items-start">
                                  <span className="text-foreground mr-2">•</span>
                                  <span className="text-sm sm:text-base text-foreground font-serif font-light elegant-body">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
