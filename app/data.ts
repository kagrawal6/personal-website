export type Project = {
  id: string
  name: string
  description: string
  link: string
  video: string
}

export type WorkExperience = {
  id: string
  company: string
  title: string
  start: string
  end: string
  link: string
}

export type BlogPost = {
  uid: string
  title: string
  description: string
  link: string
}

export type SocialLink = {
  label: string
  link: string
}

export const EMAIL = "kagrawal24@wisc.edu"

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Github", link: "https://github.com/kagrawal6" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/kushal200903/" },
]

export const ABOUT_PARAGRAPHS = [
  "I grew up on Doraemon, always amazed by the gadgets from the future and wishing I could build one myself. That curiosity is what first pulled me into technology, the idea that imagination and engineering could shape the world around us.",
  "I am now a 4th-year Computer Engineering and Computer Science student at UW–Madison, currently on a co-op with Endress+Hauser Group where I work on Netilion (their IIoT platform), gateways and Bluetooth connectivity features! My interests center on hardware-dependent code, parallel performance tuning, and how modern AI tools are built from a systems perspective.",
]

export const RECENTLY_PLAYED = [
  { id: "track-1", title: "Shoota (feat. Lil Uzi Vert)", artist: "Playboi Carti" },
  { id: "track-2", title: "Playlist refresh soon", artist: "Spotify" },
  { id: "track-3", title: "Vibes for late night debugging", artist: "Coming soon" },
]

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    name: "FileHawk.net – Local Semantic Search",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
  },
  {
    id: "proj-2",
    name: "High-Frequency Currency Arbitrage Engine",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
  },
  {
    id: "proj-3",
    name: "FPGA Knight's Tour",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
  },
  {
    id: "proj-4",
    name: "Partial Scan Optimization – b14 Viper Processor",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
  },
  {
    id: "proj-5",
    name: "5-Stage Pipelined RISC Processor",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
  },
  {
    id: "proj-6",
    name: "Parallel Circuit Partitioning & Taskflow Simulator",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
  },
  {
    id: "proj-7",
    name: "FUSE-Based Linux Filesystem",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
  },
  {
    id: "proj-8",
    name: "xv6 Memory Mapping with Copy-on-Write",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
  },
  {
    id: "proj-9",
    name: "Two-Player Matching Squares Game",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
  },
  {
    id: "proj-10",
    name: "Heap Simulator",
    description: "Placeholder description.",
    link: "#",
    video:
      "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "work-1",
    company: "IEEE HKN",
    title: "Member",
    start: "September 2025",
    end: "Present",
    link: "#",
  },
  {
    id: "work-2",
    company: "Endress+Hauser",
    title: "Embedded Software Engineering Co-op",
    start: "May 2025",
    end: "Present",
    link: "#",
  },
  {
    id: "work-3",
    company: "Endress+Hauser",
    title: "Software Engineering Intern",
    start: "May 2024",
    end: "August 2024",
    link: "#",
  },
  {
    id: "work-4",
    company: "Department of ECE",
    title: "Undergraduate Teaching Assistant",
    start: "September 2023",
    end: "May 2025",
    link: "#",
  },
  {
    id: "work-5",
    company: "Larsen Toubro Defence IC",
    title: "Software Engineering Intern",
    start: "May 2023",
    end: "August 2023",
    link: "#",
  },
  {
    id: "work-6",
    company: "Wisconsin Union",
    title: "Student Staff",
    start: "December 2022",
    end: "May 2023",
    link: "#",
  },
  {
    id: "work-7",
    company: "Engineering Expo",
    title: "Member",
    start: "September 2022",
    end: "Present",
    link: "#",
  },
  {
    id: "work-8",
    company: "Homeopathic Academy of Research & Charities (HARC)",
    title: "Volunteer",
    start: "March 2021",
    end: "May 2021",
    link: "#",
  },
  {
    id: "work-9",
    company: "Chavare Engineering",
    title: "Research Intern",
    start: "March 2021",
    end: "March 2021",
    link: "#",
  },
  {
    id: "work-10",
    company: "TEE Foundation",
    title: "Volunteer",
    start: "January 2021",
    end: "January 2021",
    link: "#",
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    uid: "blog-1",
    title: "Embedded notes from the road",
    description: "What co-op life inside IIoT platforms looks like day to day.",
    link: "/blog",
  },
  {
    uid: "blog-2",
    title: "Balancing hardware + AI curiosity",
    description: "Thoughts on bridging low-level systems with modern AI infra.",
    link: "/blog",
  },
  {
    uid: "blog-3",
    title: "Why I still sketch every idea first",
    description: "Keeping an analog habit in a fast-moving engineering workflow.",
    link: "/blog",
  },
]

