"use client"

import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRightIcon, XIcon } from "lucide-react"
import { useState } from "react"
import { PROJECTS, Project } from "../data"

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <motion.main
        className="space-y-12"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={VARIANTS_ITEM}>
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-medium text-maroon">Featured Projects</h1>
            <p className="text-muted-foreground">
              Systems, hardware, and infrastructure projects I have been building.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <motion.button
                key={project.id}
                variants={VARIANTS_ITEM}
                onClick={() => setSelectedProject(project)}
                className="glass-hover group relative flex min-h-72 w-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/45 p-6 text-left shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon/40"
              >
                <div className="relative flex h-full flex-col">
                  <div className="mb-7 flex items-start justify-between gap-3">
                    <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                      {project.eyebrow}
                    </p>
                    <span className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.04em] text-muted-foreground">
                      featured
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>

                  <div className="mt-auto pt-8">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-maroon">
                      Open details
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <p className="mt-4 truncate text-xs text-muted-foreground/60">
                    {project.tech}
                  </p>
                </div>
              </motion.button>
            ))}
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
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.08em] text-maroon">
                  {selectedProject.eyebrow}
                </p>
                <h2 className="pr-8 text-2xl font-semibold text-foreground">
                  {selectedProject.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {selectedProject.summary}
                </p>
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

                {selectedProject.link && selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-maroon transition-colors hover:opacity-70"
                  >
                    Visit project
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
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
