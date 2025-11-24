"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { PROJECTS } from "../data"

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const TRANSITION_SECTION = {
  duration: 0.6,
  ease: "easeOut",
}

function ProjectVideo({ src }: { src: string }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="aspect-video w-full rounded-lg border border-border"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default function ProjectsPage() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <div className="mb-12">
          <h1 className="text-3xl font-medium mb-2" style={{ color: '#8b1538' }}>Selected Projects</h1>
          <p className="text-muted-foreground">Featured work and side projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="glass-hover relative overflow-hidden rounded-2xl bg-card/40 flex flex-col">
              <div className="aspect-video bg-muted/30"></div>
              <div className="p-6 space-y-2 flex-1 flex flex-col">
                <h3 className="text-lg font-medium text-foreground">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}

