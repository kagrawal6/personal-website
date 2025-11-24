"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { WORK_EXPERIENCE } from "../data"

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

export default function ExperiencePage() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <div className="mb-12">
          <h1 className="text-3xl font-medium mb-2" style={{ color: '#8b1538' }}>Work Experience</h1>
          <p className="text-muted-foreground">Professional experience and roles</p>
        </div>

        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="glass-hover relative overflow-hidden rounded-2xl bg-card/40 p-4 block"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="font-normal text-foreground">{job.title}</h4>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
                <p className="text-muted-foreground">
                  {job.start} - {job.end}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}

