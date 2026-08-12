"use client"

import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRightIcon, XIcon } from "lucide-react"
import { useState } from "react"
import { SpotifyRecentlyPlayed } from "@/components/spotify-recently-played"
import {
  ABOUT_PARAGRAPHS,
  EMAIL,
  PROJECTS,
  RECENTLY_PLAYED,
  WORK_EXPERIENCE,
  Project,
  ProjectCategory,
  WorkExperience,
} from "./data"

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectFilter = "all" | ProjectCategory

const PROJECT_FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "hardware", label: "Hardware" },
  { id: "software", label: "Software" },
]

export default function Personal() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedJob, setSelectedJob] = useState<WorkExperience | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("all")

  const filteredProjects =
    projectFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === projectFilter)

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6)

  return (
    <>
      <motion.main
        className="space-y-16"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <img
                src="/images/profile-improved.jpg"
                alt="Profile"
                className="mb-6 h-32 w-32 rounded-lg object-cover sm:h-40 sm:w-40"
              />
              <div className="w-full space-y-4 text-foreground/80">
                {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                  <p key={index} className="text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="rounded-2xl border border-maroon/20 bg-maroon/5 px-4 py-3 text-sm leading-relaxed text-foreground/85 shadow-sm">
                I&apos;m currently looking for Summer 2027 internship opportunities. If you think there&apos;s a good fit, please feel free to email me at{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-medium text-maroon underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {EMAIL}
                </a>
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/kagrawal6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-muted-foreground"
                  aria-label="GitHub"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/kushalagrawal0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-muted-foreground"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-foreground underline transition-colors hover:text-muted-foreground"
                  aria-label="Resume"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium text-maroon">Education</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="https://www.ece.cmu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-hover relative block overflow-hidden rounded-2xl bg-card/40 p-4 text-inherit no-underline"
            >
              <div className="relative flex items-center gap-4">
                <img
                  src="/images/cmu-logo.png"
                  alt="Carnegie Mellon University logo"
                  className="h-14 w-14 shrink-0 rounded-lg object-contain"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="mb-1 text-lg font-normal text-foreground">
                    Carnegie Mellon University
                  </h4>
                  <div className="flex flex-col gap-1 text-base text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>Master of Science in Computer Engineering</p>
                    <p className="shrink-0 text-sm">Aug 2026 - Dec 2027</p>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://engineering.wisc.edu/departments/electrical-computer-engineering/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-hover relative block overflow-hidden rounded-2xl bg-card/40 p-4 text-inherit no-underline"
            >
              <div className="relative flex items-center gap-4">
                <img
                  src="/images/uw-madison-logo.png"
                  alt="University of Wisconsin-Madison logo"
                  className="h-14 w-14 shrink-0 rounded-lg object-contain"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="mb-1 text-lg font-normal text-foreground">
                    University of Wisconsin-Madison
                  </h4>
                  <div className="flex flex-col gap-1 text-base text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>Bachelor of Science in Computer Engineering</p>
                    <p className="shrink-0 text-sm">Sep 2022 - May 2026</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium text-maroon">Experience</h3>
          <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => (
              <button
                type="button"
                className="glass-hover relative block w-full overflow-hidden rounded-2xl bg-card/40 p-4 text-left"
                onClick={() => setSelectedJob(job)}
                key={job.id}
              >
                <div className="relative flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-4">
                    {job.logo && (
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1"
                      />
                    )}
                    <div className="min-w-0">
                      <h4 className="font-normal text-foreground">{job.title}</h4>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <p className="shrink-0 text-sm text-muted-foreground sm:text-base">
                    {job.start} - {job.end}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="scroll-mt-28"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-medium text-maroon">Projects</h3>
            <div
              className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-card/40 p-1"
              role="group"
              aria-label="Filter projects"
            >
              {PROJECT_FILTERS.map((filter) => {
                const isActive = projectFilter === filter.id
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => {
                      setProjectFilter(filter.id)
                      setShowAllProjects(false)
                    }}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-maroon text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {filter.label}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
              {visibleProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="glass-hover group relative flex h-full min-h-[15.5rem] w-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/45 p-5 text-left shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon/40"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h4 className="line-clamp-2 min-h-[3.5rem] text-xl font-semibold text-foreground">
                      {project.name}
                    </h4>
                    <span
                      aria-hidden
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-transform duration-200 group-hover:scale-110"
                    >
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="line-clamp-4 flex-1 text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>

                  <p className="mt-4 truncate text-xs text-muted-foreground/60">
                    {project.tech}
                  </p>
                </button>
              ))}
            </div>

            {!showAllProjects && filteredProjects.length > 6 && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-40 items-end justify-center bg-gradient-to-b from-background/0 via-background/80 to-background pb-6">
                <button
                  type="button"
                  onClick={() => setShowAllProjects(true)}
                  className="glass-button-permanent pointer-events-auto inline-flex rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <span>see more projects</span>
                </button>
              </div>
            )}

            {showAllProjects && filteredProjects.length > 6 && (
              <div className="flex justify-center pt-5">
                <button
                  type="button"
                  onClick={() => setShowAllProjects(false)}
                  className="glass-button-permanent inline-flex rounded-full px-5 py-2 text-sm font-medium text-maroon transition-all hover:shadow-md"
                >
                  <span>show fewer projects</span>
                </button>
              </div>
            )}
          </div>
        </motion.section>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium text-maroon">Blog</h3>
          <p className="text-muted-foreground">Content coming soon...</p>
        </motion.section>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium text-maroon">
            Interests Outside of Tech
          </h3>
          <div className="space-y-4 text-foreground/80">
            <p className="text-justify">
              Outside of tech, I spend a lot of time around sports. I love playing and watching soccer and basketball, and I am a huge FC Barcelona fan. I also enjoy occasionally ragebaiting my friends with horrendously bad sports takes.
            </p>
            <p className="text-justify">
              I have also grown to enjoy running. I recently completed the Tata Mumbai Half Marathon, and while I have been rebuilding consistency since then, it remains one of the most rewarding challenges I have taken on.
            </p>
            <p className="text-justify">
              Teaching and outreach are also very important to me. Through my work as a teaching assistant and my involvement with Engineering EXPO, I have loved helping younger students and college peers build confidence, curiosity, and excitement around engineering.
            </p>
            <p className="text-justify">
              I am not a huge gamer, but I still find myself coming back to Clash Royale from time to time. I also enjoy hanging out with friends and discovering new music, movies, and shows/anime.
            </p>

            <SpotifyRecentlyPlayed fallbackTrack={RECENTLY_PLAYED[0]} />
          </div>
        </motion.section>
      </motion.main>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              className="fixed left-1/2 top-1/2 z-50 flex aspect-square w-[min(90vw,36rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full p-1 transition-colors hover:bg-muted"
                aria-label="Close project details"
              >
                <XIcon className="h-5 w-5 text-muted-foreground" />
              </button>

              <div className="flex min-h-0 flex-1 flex-col p-6">
                <h2 className="pr-8 text-2xl font-semibold text-foreground">
                  {selectedProject.name}
                </h2>
                {selectedProject.link && selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-base font-medium text-maroon transition-colors hover:opacity-70"
                  >
                    Visit project
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                )}
                <p className="mt-4 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {selectedProject.tech}
                </p>

                <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1">
                  <ul className="space-y-3 text-sm leading-6 text-foreground/80">
                    {selectedProject.description
                      .split("\n")
                      .map((line) => line.replace(/^- /, ""))
                      .map((line) => (
                        <li key={line} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon/70" />
                          <span>{line}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedJob && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
              onClick={() => setSelectedJob(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              className="fixed left-1/2 top-1/2 z-50 flex aspect-square w-[min(90vw,36rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute right-4 top-4 z-10 rounded-full p-1 transition-colors hover:bg-muted"
                aria-label="Close experience details"
              >
                <XIcon className="h-5 w-5 text-muted-foreground" />
              </button>

              <div className="flex min-h-0 flex-1 flex-col p-6">
                <h2 className="pr-8 text-2xl font-semibold text-foreground">
                  {selectedJob.title}
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  {selectedJob.company}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {selectedJob.start} - {selectedJob.end}
                </p>

                <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1 space-y-4">
                  {selectedJob.summary ? (
                    <p className="text-sm leading-6 text-foreground/80">
                      {selectedJob.summary}
                    </p>
                  ) : null}
                  {selectedJob.sections?.length ? (
                    <div className="space-y-4">
                      {selectedJob.sections.map((section) => (
                        <div key={`${section.period}-${section.detail}`}>
                          <p className="text-sm font-semibold text-maroon">
                            {section.period}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-foreground/80">
                            {section.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {selectedJob.description ? (
                    <ul className="space-y-3 text-sm leading-6 text-foreground/80">
                      {selectedJob.description
                        .split("\n")
                        .map((line) => line.replace(/^- /, ""))
                        .filter(Boolean)
                        .map((line) => (
                          <li key={line} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon/70" />
                            <span>{line}</span>
                          </li>
                        ))}
                    </ul>
                  ) : null}
                </div>

                {selectedJob.link && selectedJob.link !== "#" && (
                  <a
                    href={selectedJob.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-base font-medium text-maroon transition-colors hover:opacity-70"
                  >
                    Visit project
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
