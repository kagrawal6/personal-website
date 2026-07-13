export type Project = {
  id: string
  name: string
  eyebrow: string
  tech: string
  summary: string
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
  logo?: string
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

export const EMAIL = "kushalag@andrew.cmu.edu"

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Github", link: "https://github.com/kagrawal6" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/kushal200903/" },
]

export const ABOUT_PARAGRAPHS = [
  "I grew up on Doraemon, always amazed by the gadgets from the future and wishing I could build one myself. That curiosity first pulled me into technology: the idea that imagination and engineering could shape the world around us.",
  "I am a first-year Computer Engineering master's student at Carnegie Mellon University. My interests center on the intersection of computer architecture and systems software, especially in designing efficient platforms for AI and high-performance computing. I am driven by the idea of building the underlying tools and infrastructure that allow future technologies to scale.",
]

export const RECENTLY_PLAYED = [
  { id: "track-1", title: "Shoota (feat. Lil Uzi Vert)", artist: "Playboi Carti" },
  { id: "track-2", title: "Playlist refresh soon", artist: "Spotify" },
  { id: "track-3", title: "Vibes for late night debugging", artist: "Coming soon" },
]

export const PROJECTS: Project[] = [
  {
    id: "filehawk",
    name: "FileHawk.net",
    eyebrow: "Local Semantic Search",
    tech: "Electron, Python, ChromaDB, SentenceTransformers",
    summary:
      "Cross-platform desktop search for large local folders, combining vector retrieval, reranking, and incremental indexing for fast semantic lookup.",
    description:
      "- Architected an Electron, React, and Flask app that searches 50GB+ of local data with sub-second responses.\n- Built a two-stage retrieval pipeline using ChromaDB vectors plus reranking, reducing file search time by 75%.\n- Delivered high-precision semantic search with dual SentenceTransformers and a proprietary Gist ranker across 25+ file types.\n- Added real-time incremental indexing with Watchdog and SHA-256 change detection, handling 10k+ file changes per hour.",
    link: "#",
    video: "",
  },
  {
    id: "iccad-placement",
    name: "ICCAD 2025 Problem C",
    eyebrow: "Incremental Placement Tool",
    tech: "C++, Python, Bash, TCL, OpenROAD, Verilog, DEF/LEF, Docker",
    summary:
      "Full-stack ASIC placement optimizer for ECO-aware cell movement, gate sizing, and buffer insertion with reproducible benchmarking.",
    description:
      "- Developing a placement optimizer that integrates cell relocation, gate sizing, and buffer/inverter insertion for better PPA.\n- Parsing and manipulating industry-standard formats including PL, Verilog, LEF, LIB, SCL, and Synopsys ECO data.\n- Automating ECO-aware changelist generation and validating timing and power results through OpenROAD.\n- Building a scalable Dockerized toolchain designed for reproducible benchmarking and GPU-ready performance testing.",
    link: "#",
    video: "",
  },
  {
    id: "devpulse",
    name: "DevPulse",
    eyebrow: "Test Intelligence CLI",
    tech: "TypeScript, Node.js, pnpm, Jest, Istanbul/LCOV, Commander.js, GitHub Actions",
    summary:
      "Modular CLI for test-suite analysis, flakiness detection, coverage reporting, and CI-friendly developer feedback.",
    description:
      "- Building a TypeScript CLI for automated test suite analysis, including flakiness detection and actionable reporting.\n- Designed a pnpm monorepo with plugin-based analyzers and reporters for parallel test execution.\n- Integrated Istanbul/LCOV coverage parsing and report generation across HTML, Markdown, and JSON.\n- Automating CI workflows and pull request feedback with GitHub Actions.",
    link: "#",
    video: "",
  },
  {
    id: "currency-arbitrage",
    name: "High-Frequency Currency Arbitrage Engine",
    eyebrow: "ECE 759",
    tech: "C++, OpenMP, CUDA, Python, Real-Time Data, CMake",
    summary:
      "Parallel FX arbitrage pipeline using graph algorithms, OpenMP, and CUDA to simulate low-latency trading across currency pairs.",
    description:
      "- Built a parallel HFT pipeline for real-time FX arbitrage across 19+ currency pairs.\n- Modeled markets as time-indexed graphs and accelerated arbitrage-cycle detection with GPU Bellman-Ford.\n- Simulated trade execution with transaction costs, risk modeling, dynamic position sizing, and latency-aware strategies.\n- Automated performance analytics for high-throughput trading experiments.",
    link: "#",
    video: "",
  },
  {
    id: "partial-scan",
    name: "Partial Scan Optimization",
    eyebrow: "b14 Viper Processor",
    tech: "TCL, Synopsys Design Vision, TetraMax, ATPG, SCOAP, Verilog, STIL",
    summary:
      "Custom DFT flow for scan selection, ATPG coverage, and testability optimization under strict ATE pin constraints.",
    description:
      "- Architected and automated a partial-scan DFT flow for a synthesized processor design.\n- Built TCL tooling for SCOAP-guided flip-flop selection while preserving controllability and observability.\n- Achieved over 85% test coverage with a greater than 5x reduction in pattern count.\n- Delivered a greater than 3x improvement in a weighted testability-performance metric.",
    link: "#",
    video: "",
  },
  {
    id: "risc-processor",
    name: "5-Stage Pipelined RISC Processor",
    eyebrow: "ECE 552",
    tech: "Verilog, ModelSim, Synopsys Design Compiler",
    summary:
      "16-bit pipelined processor with forwarding, hazard detection, branch prediction, and set-associative L1 caches.",
    description:
      "- Designed a 16-bit, 5-stage pipelined processor in Verilog based on the MIPS R2000.\n- Developed datapath and control logic with optimized ALU behavior, forwarding, hazard detection, and branch prediction.\n- Implemented register-file bypassing and stall minimization across pipeline stages.\n- Integrated 2-way set-associative L1 instruction and data caches with write-back behavior.",
    link: "#",
    video: "",
  },
  {
    id: "knights-tour",
    name: "FPGA Knight's Tour",
    eyebrow: "ECE 551",
    tech: "SystemVerilog, ModelSim, Synopsys Design Compiler, Quartus Prime",
    summary:
      "Autonomous FPGA robot control system combining movement planning, PID control, SPI sensing, Bluetooth, and timing closure.",
    description:
      "- Designed an FPGA-based autonomous robot to solve the Knight's Tour problem in SystemVerilog.\n- Integrated PID control, SPI gyroscope data, IR sensors, UART, and Bluetooth command processing.\n- Achieved 333 MHz timing closure while reducing synthesized area by 25% and power by 12%.\n- Built self-checking testbenches for code coverage, post-synthesis validation, and FPGA performance.",
    link: "#",
    video: "",
  },
  {
    id: "fuse-filesystem",
    name: "FUSE-Based Linux Filesystem",
    eyebrow: "COMP SCI 537",
    tech: "C, Bash, Python, Emacs Lisp, FUSE, GDB, POSIX",
    summary:
      "User-space filesystem with inode-backed storage, indirect block mapping, RAID striping, mirroring, and POSIX validation.",
    description:
      "- Developed a user-space filesystem in C using FUSE for creation, deletion, reading, writing, and directories.\n- Implemented inode-based storage with indirect block mapping for larger files.\n- Added RAID 0 striping and RAID 1 mirroring for performance and redundancy.\n- Validated stability through gdb, disk inspection, automated Python tests, and POSIX commands.",
    link: "#",
    video: "",
  },
  {
    id: "xv6-memory",
    name: "xv6 Memory Mapping with Copy-on-Write",
    eyebrow: "COMP SCI 537",
    tech: "C, xv6, x86 Paging, GDB, Makefile, Bash, Python",
    summary:
      "Kernel memory-management work adding mmap, lazy allocation, page fault handling, copy-on-write, and ELF protections.",
    description:
      "- Implemented file-backed and anonymous memory mappings in xv6.\n- Added lazy page allocation, demand paging, and page fault handling to reduce memory pressure.\n- Optimized process memory with copy-on-write, shared pages, and reference counting.\n- Enforced ELF segment protections and safe concurrent access with locks.",
    link: "#",
    video: "",
  },
  {
    id: "matching-squares",
    name: "Two-Player Matching Squares Game",
    eyebrow: "ECE 353",
    tech: "C, FreeRTOS, MSP432, PSoC 6, SPI, I2C, UART",
    summary:
      "Embedded multiplayer game using FreeRTOS, sensors, LCD feedback, and UART communication between boards.",
    description:
      "- Developed an embedded systems game in C on MSP432 and PSoC 6 hardware using FreeRTOS.\n- Used SPI and I2C to integrate accelerometer, joystick, light sensors, and LCD feedback.\n- Implemented UART communication for real-time multiplayer state transfer between two boards.",
    link: "#",
    video: "",
  },
  {
    id: "heap-simulator",
    name: "Heap Simulator",
    eyebrow: "ECE 354",
    tech: "C, Git, Makefile",
    summary:
      "Dynamic memory allocator simulation with best-fit placement, splitting, coalescing, and automated allocation tests.",
    description:
      "- Engineered a dynamic memory management system with best-fit placement, splitting, and immediate coalescing.\n- Simulated a 1 MB heap using pointer arithmetic, bit masking, and header/footer metadata.\n- Designed automated Makefile-driven test cases for complex allocation and deallocation scenarios.",
    link: "#",
    video: "",
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "work-google-capstone",
    company: "Google (Capstone)",
    title: "Software Egineering Intern",
    start: "Jan 2026",
    end: "May 2026",
    link: "#",
    logo: "/images/google-logo.png",
  },
  {
    id: "work-2",
    company: "Endress+Hauser",
    title: "Embedded Software Engineering Co-op",
    start: "May 2025",
    end: "Present",
    link: "#",
    logo: "/images/endress-hauser-logo.png",
  },
  {
    id: "work-3",
    company: "Endress+Hauser",
    title: "Software Engineering Intern",
    start: "May 2024",
    end: "August 2024",
    link: "#",
    logo: "/images/endress-hauser-logo.png",
  },
  {
    id: "work-4",
    company: "Department of ECE",
    title: "Undergraduate Teaching Assistant",
    start: "September 2023",
    end: "May 2026",
    link: "#",
    logo: "/images/uw-ece-logo.png",
  },
  {
    id: "work-5",
    company: "Larsen Toubro Defence IC",
    title: "Software Engineering Intern",
    start: "May 2023",
    end: "August 2023",
    link: "#",
    logo: "/images/larsen-toubro-logo.png",
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
