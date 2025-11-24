"use client"

import { motion } from "motion/react"
import { XIcon } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Magnetic } from "@/components/ui/magnetic"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog"
import Link from "next/link"
import {
  ABOUT_PARAGRAPHS,
  BLOG_POSTS,
  EMAIL,
  PROJECTS,
  RECENTLY_PLAYED,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
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

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-background p-1 ring-1 ring-border/60 ring-inset">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-background p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-muted-foreground" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-muted px-2.5 py-1 text-sm text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
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
          <div className="space-y-4 text-foreground/80">
            {ABOUT_PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-foreground/80">
              Feel free to contact me at{" "}
              <a 
                href="mailto:kagrawal1762@gmail.com" 
                className="underline hover:text-foreground transition-colors"
                style={{ color: '#8b1538' }}
              >
                kagrawal1762@gmail.com
              </a>
            </p>
            <div className="flex items-center gap-4">
            <a 
              href="https://github.com/kushal-ag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/kushalagrawal0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors underline text-lg"
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
        <h3 className="mb-5 text-lg font-medium" style={{ color: '#8b1538' }}>Education</h3>
        <Link
          href="/education"
          className="glass-hover relative overflow-hidden rounded-2xl bg-card/40 p-4 block group"
        >
          <div className="relative flex items-start justify-between">
            <div>
              <h4 className="text-lg font-normal text-foreground mb-1">
                University of Wisconsin-Madison
              </h4>
              <p className="text-base text-muted-foreground mb-2">
                Bachelor of Science in Computer Engineering, Computer Science
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>GPA: 3.77/4.00</span>
                <span>•</span>
                <span>May 2026</span>
              </div>
            </div>
            <div className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </motion.section>

      <motion.section
        id="experience"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium" style={{ color: '#8b1538' }}>Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.slice(0, 3).map((job) => (
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
          
          <div className="flex justify-center pt-2">
            <Link
              href="/experience"
              className="glass-button-permanent rounded-full px-4 py-1.5 inline-flex items-center transition-all text-sm hover:shadow-md"
              style={{ color: '#8b1538' }}
            >
              <span className="font-medium">see more</span>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium" style={{ color: '#8b1538' }}>Selected Projects</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.slice(0, 4).map((project) => (
              <div key={project.id} className="glass-hover relative overflow-hidden rounded-2xl bg-card/40 flex flex-col">
                <div className="aspect-video bg-muted/30"></div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center pt-2">
            <Link
              href="/projects"
              className="glass-button-permanent rounded-full px-4 py-1.5 inline-flex items-center transition-all text-sm hover:shadow-md"
              style={{ color: '#8b1538' }}
            >
              <span className="font-medium">see more</span>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium" style={{ color: '#8b1538' }}>Blog</h3>
        <div className="flex flex-col space-y-2">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              className="glass-hover relative overflow-hidden rounded-2xl bg-card/40 p-4 block"
              href={post.link}
            >
              <div className="relative flex flex-col space-y-1">
                <h4 className="font-normal text-foreground">{post.title}</h4>
                <p className="text-muted-foreground">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium" style={{ color: '#8b1538' }}>Interests</h3>
        <p className="text-muted-foreground">
          Content coming soon...
        </p>
      </motion.section>
    </motion.main>
  )
}

