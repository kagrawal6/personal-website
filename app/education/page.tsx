'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

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
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function EducationPage() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <div className="mb-12">
          <h1 className="text-3xl font-medium mb-2 text-maroon">Education</h1>
          <p className="text-muted-foreground">Academic background and achievements</p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-normal text-foreground mb-2">
              University of Wisconsin-Madison
            </h2>
            <p className="text-lg text-muted-foreground mb-3">
              Bachelor of Science in Computer Engineering, Computer Science
            </p>
            <div className="flex flex-wrap items-center gap-4 text-base text-muted-foreground">
              <span>GPA: 3.77/4.00</span>
              <span>•</span>
              <span>Expected May 2026</span>
              <span>•</span>
              <span>Madison, WI</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium text-foreground mb-3">Relevant Coursework</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Details about relevant courses will be added here...
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-foreground mb-3">Honors & Awards</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Academic achievements and recognitions will be listed here...
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-foreground mb-3">Activities</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Campus involvement and extracurricular activities will be added here...
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}

