"use client"

import { motion, AnimatePresence } from "motion/react"
import { PROJECTS } from "../data"
import { useState } from "react"
import { XIcon } from "lucide-react"

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
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null)

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
            <h1 className="text-3xl font-medium mb-2" style={{ color: '#8b1538' }}>Selected Projects</h1>
            <p className="text-muted-foreground">Featured work and side projects</p>
          </div>

          <div className="flex flex-col space-y-2">
            {PROJECTS.map((project) => (
              <motion.button
                key={project.id}
                variants={VARIANTS_ITEM}
                onClick={() => setSelectedProject(project)}
                className="glass-hover relative overflow-hidden rounded-2xl bg-card/40 p-4 text-left w-full"
              >
                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-medium text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground/70 sm:text-right shrink-0">
                    {project.tech}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>
      </motion.main>

      {/* Modal/Popup */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-lg max-h-[80vh] overflow-y-auto bg-background rounded-2xl p-6 shadow-xl border border-border"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors"
              >
                <XIcon className="h-5 w-5 text-muted-foreground" />
              </button>
              
              <h2 className="text-xl font-medium text-foreground mb-2 pr-8">
                {selectedProject.name}
              </h2>
              <p className="text-sm text-muted-foreground/70 mb-4">
                {selectedProject.tech}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {selectedProject.description}
              </p>
              
              {selectedProject.link && selectedProject.link !== "#" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: '#8b1538' }}
                >
                  View Project →
                </a>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

