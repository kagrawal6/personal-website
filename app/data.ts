export type ProjectCategory = "hardware" | "software"

export type Project = {
  id: string
  name: string
  category: ProjectCategory
  tech: string
  summary: string
  description: string
  link: string
  video: string
}

export type WorkExperienceSection = {
  period: string
  detail: string
}

export type WorkExperience = {
  id: string
  company: string
  title: string
  start: string
  end: string
  link: string
  logo?: string
  summary?: string
  sections?: WorkExperienceSection[]
  description?: string
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
    id: "trademark",
    name: "TradeMark–Dual-FPGA Trading Engine",
    category: "hardware",
    tech: "SystemVerilog, Tcl, Vivado, Python, PYNQ",
    summary: "A dual-FPGA trading system that simulates markets, executes trades, and measures end-to-end hardware latency in real time.",
    description:
      "- Built a closed-loop dual-FPGA trading system on two AMD AUP-ZU3 boards, one as a 16-symbol market/exchange and the other a pipelined trader, connected by a custom full-duplex PMOD link with hardware backpressure.\n- Implemented a deterministic SystemVerilog trading loop in which a multi-regime market issues quotes, a pipelined trader with strategy and risk returns orders, and an exchange matches fills over a mesochronous framed link.\n- Achieved ∼80 ns tick-to-trade and ∼2.07 μs quote-to-fill, with latency and P&L tracked live via AXI-Lite registers.",
    link: "https://github.com/kagrawal6/Dual-FPGA-Trading-Engine.git",
    video: "",
  },
  {
    id: "filehawk",
    name: "FileHawk.net - Local Semantic Search",
    category: "software",
    tech: "Electron, Python, ChromaDB, SentenceTransformers",
    summary: "A privacy-first desktop search engine that finds local files by meaning using fully on-device semantic retrieval and ranking.",
    description:
      "- Designed and shipped an on-device semantic file retrieval app (Electron/React + Flask) that returns relevant local results in <1s, with all embedding inference running locally—no cloud path for core search.\n- Engineered a retrieve-then-rank search pipeline: SentenceTransformers (MS MARCO/All-MiniLM) embeddings queried via ChromaDB, then hybrid ranking signals to score semantic matches across 25+ file types.\n- Built incremental indexing (SHA-256 change detection + filesystem watching) that reindexes only changed files.",
    link: "http://filehawk.net",
    video: "",
  },
  {
    id: "partial-scan",
    name: "Partial-Scan DFT Optimizer",
    category: "hardware",
    tech: "Tcl, Synopsys Design Compiler, TetraMAX, Verilog, STIL",
    summary: "An automated partial-scan DFT flow that improves processor testability while reducing ATPG pattern count and scan overhead.",
    description:
      "- Architected and automated a custom partial scan DFT flow for a synthesized processor design, optimizing test coverage, area, and scan overhead under strict ATE pin constraints.\n- Developed Tcl-based tooling to drive flip-flop selection via SCOAP analysis, selectively excluding noncritical scan elements while preserving controllability/observability.\n- Achieved >85% test coverage with >5× reduction in pattern count using coverage-constrained ATPG and scan chain tuning.\n- Delivered >3× improvement in a weighted testability-performance metric (M), demonstrating strong command over scan design, ATPG strategy, and DFT tradeoff analysis.",
    link: "https://github.com/kagrawal6/Partial-Scan-Optimization-b14-Viper-Processor.git",
    video: "",
  },
  {
    id: "currency-arbitrage",
    name: "High-Frequency Currency Arbitrage Engine",
    category: "software",
    tech: "C++, CUDA, OpenMP, Python, CMake",
    summary: "A parallel FX arbitrage engine that detects profitable trading cycles across currency markets using graph algorithms and GPU acceleration.",
    description:
      "- Built a parallel HFT pipeline for real-time FX arbitrage, leveraging OpenMP and CUDA to accelerate graph-based detection and simulation across 19+ currency pairs.\n- Streamlined ingestion and normalization of live FX data, modeling dynamic markets as time-indexed graphs and detecting arbitrage cycles with GPU-accelerated Bellman–Ford.\n- Simulated trade execution with transaction cost and risk modeling, supporting dynamic position sizing and latency-aware strategies.\n- Automated performance analytics and designed a scalable architecture for rapid deployment in high throughput trading environments.",
    link: "https://github.com/kagrawal6/High-Frequency-Currency-Arbitrage-Engine.git",
    video: "",
  },
  {
    id: "fuse-filesystem",
    name: "FUSE-Based Linux Filesystem",
    category: "software",
    tech: "C, Bash, Python, Emacs Lisp, FUSE, GDB, POSIX Commands",
    summary: "A user-space Linux filesystem with inode-based storage, indirect blocks, RAID support, block allocation, and hierarchical directory management.",
    description:
      "- Developed a user-space filesystem in C using FUSE, enabling file creation, deletion, reading, writing, and directory management with inode-based storage and indirect block mapping for large file support.\n- Implemented RAID 0 for data striping and RAID 1 for mirroring, ensuring redundancy and fault tolerance.\n- Designed and mounted the filesystem with superblock-based metadata tracking, block allocation via bitmaps, and efficient disk operations to support real-world storage requirements.\n- Validated filesystem stability using gdb, disk inspection, and automated Python tests with POSIX commands.",
    link: "https://github.com/kagrawal6/FUSE-Based-Linux-Filesystem.git",
    video: "",
  },
  {
    id: "xv6-memory",
    name: "xv6 Memory Mapping with Copy-on-Write",
    category: "software",
    tech: "C, xv6, x86 Paging, GDB, Makefile, Bash, Python",
    summary: "An xv6 memory-management extension with memory-mapped files, demand paging, page-fault handling, and Copy-on-Write for improved process memory efficiency.",
    description:
      "- Implemented memory-mapped file support in xv6, enabling file-backed and anonymous memory allocations with lazy page allocation, demand paging, and page fault handling to optimize memory usage.\n- Optimized process memory with Copy-on-Write, reducing duplication via shared pages and reference counting.\n- Enforced ELF segment protections, preventing unauthorized writes, and ensuring safe concurrent access with locks.",
    link: "https://github.com/kagrawal6/xv6-Memory-Mapping-with-Copy-on-Write.git",
    video: "",
  },
  {
    id: "risc-processor",
    name: "5-Stage Pipelined RISC Processor",
    category: "hardware",
    tech: "Verilog, ModelSim, Synopsys Design Compiler",
    summary: "A five-stage pipelined RISC processor with forwarding, hazard detection, branch prediction, and instruction and data caches.",
    description:
      "- Designed a 16-bit, 5-stage pipelined processor in Verilog based on MIPS R2000, developing the data path and control path with an optimized ALU, forwarding, hazard detection, and branch prediction to minimize stalls.\n- Implemented a pipelined microarchitecture with register file bypassing, forwarding, and branch prediction.\n- Integrated a 2-way set-associative L1 instruction and data cache with direct-mapped and write-back policies.",
    link: "https://github.com/kagrawal6/5-Stage-Pipelined-RISC-Processor.git",
    video: "",
  },
  {
    id: "knights-tour",
    name: "FPGA Knight’s Tour",
    category: "hardware",
    tech: "SystemVerilog, ModelSim, Synopsys Design Compiler, Quartus Prime",
    summary: "An FPGA-controlled autonomous robot using PID control, sensors, and serial interfaces, optimized for timing, area, and power.",
    description:
      "- Designed an FPGA-based autonomous robot to solve the Knight’s Tour problem using SystemVerilog,integrating a PID controller, SPI for gyroscope data, and IR sensors for movement tracking.\n- Achieved 333 MHz timing closure, reduced synthesized area by 25% through Synopsys standard cell optimizations monitored in Design Compiler, and lowered power consumption by 12% using gated clock designs.\n- Developed a command processor with UART and SPI for Bluetooth control and inertial sensor integration.\n- Built self-checking testbenches, ensuring full code coverage, post-synthesis validation, and FPGA performance.",
    link: "https://github.com/kagrawal6/FPGA-Knights-Tour.git",
    video: "",
  },
  {
    id: "c-pasta",
    name: "C-PASTA (Research Project)",
    category: "software",
    tech: "C++, OpenMP, OpenTimer, DAG-based scheduling, Static Timing Analysis, Linux, Python",
    summary: "An experimental C++ framework for studying parallel task partitioning strategies for static timing analysis on OpenTimer benchmarks.",
    description:
      "- Researched CPU task partitioning algorithms and built an experimental C++ framework to run C-PASTA on OpenTimer benchmarks, sweeping key parameters and collecting runtime/structural statistics to evaluate clustering heuristics.",
    link: "https://github.com/kagrawal6/C-PASTA-Research-Project.git",
    video: "",
  },
  {
    id: "matching-squares",
    name: "Two-Player Matching Squares Game",
    category: "hardware",
    tech: "C, FreeRTOS, MSP432, PSoC 6, SPI, I2C, UART",
    summary: "A real-time embedded multiplayer game using FreeRTOS, sensors, displays, and UART communication across two microcontroller platforms.",
    description:
      "- Developed an embedded systems game in C on an MSP432 Launchpad and PSoC 6, utilizing FreeRTOS.\n- Used SPI and I2C to interface with sensors and peripherals on PSoC 6, integrating an accelerometer, joystick, light sensors, and an LCD for real-time player control and feedback.\n- Implemented UART for multiplayer communication between two boards, enabling real-time data transmission.",
    link: "https://github.com/kagrawal6/Two-Player-Matching-Squares-Game.git",
    video: "",
  },
  {
    id: "heap-simulator",
    name: "Heap Simulator",
    category: "software",
    tech: "C, Git, Makefile",
    summary: "A custom heap allocator implementing best-fit placement, block splitting, coalescing, and low-level metadata management in C.",
    description:
      "- Engineered a dynamic memory management system, implementing best-fit placement, splitting, and immediate coalescing to efficiently handle allocation and deallocation of memory blocks.\n- Simulated a 1 MB heap, leveraging pointer arithmetic, bit masking, and header/footer management to achieve precise memory block tracking.\n- Designed and automated extensive test cases with Makefile scripts to simulate complex allocation scenarios.",
    link: "https://github.com/kagrawal6/Heap-Simulator.git",
    video: "",
  },
  {
    id: "iccad-placement",
    name: "ICCAD 2025 Problem C Incremental Placement Tool (In Progress)",
    category: "hardware",
    tech: "C++, Python, Bash, TCL, OpenROAD, Verilog, DEF/LEF, Bookshelf Format, .lib, Docker, Synopsys ECO Format",
    summary: "An ASIC placement optimizer for cell relocation, gate sizing, and buffer insertion to improve power, performance, and area.",
    description:
      "- Developing a full-stack optimizer to improve ASIC placement by integrating cell relocation, gate sizing, and buffer/inverter insertion for better PPA (Power, Performance, Area).\n- Parsing and manipulating industry-standard formats (pl, v, .lef, .lib, .scl) to enable legal placement transformations with minimal cell displacement.\n- Automating ECO-aware changelist generation using Python scripts and validating results via OpenROAD timing/power analysis.\n- Building a scalable, GPU-ready toolchain containerized with Docker for reproducible benchmarking and performance testing.",
    link: "https://github.com/kagrawal6/ICCAD_2025_probC.git",
    video: "",
  },
  {
    id: "devpulse",
    name: "DevPulse (In Progress)",
    category: "software",
    tech: "TypeScript, Node.js, pnpm, Jest, Istanbul/LCOV, Commander.js, GitHub Actions",
    summary: "A TypeScript CLI for detecting flaky tests, analyzing coverage, and generating automated reports and CI feedback for software projects.",
    description:
      "- Building a modular CLI tool for automated test suite analysis, including flakiness detection, coverage analysis, and actionable reporting for JavaScript/TypeScript projects.\n- Designed a TypeScript monorepo (pnpm) with plugin-based analyzers and reporters, supporting parallel test execution and statistical flakiness scoring.\n- Integrated Istanbul/LCOV coverage parsing and multi-format report generation (HTML, Markdown, JSON).\n- Automating CI workflows and PR feedback with GitHub Actions.",
    link: "https://github.com/kagrawal6/devpulse.git",
    video: "",
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "work-google-capstone",
    company: "Google (Capstone)",
    title: "Software Egineering Intern",
    start: "Feb 2026",
    end: "May 2026",
    link: "https://github.com/kagrawal6/Iotriage-Google-capstone",
    logo: "/images/google-logo.png",
    description:
      "- Built IoTriage, a full-stack tool that scans a local network for IoT devices, identifies known vulnerabilities via the NIST NVD, and generates Gemini remediation guidance (Python Nmap scanner, Express, React).\n- Built a rate-limit-aware NVD client with severity and false-positive filtering for accurate vulnerability rankings.\n- Built scan-grounded Gemini chat with SSE streaming and CISA KEV–backed mitigation steps for triage.",
  },
  {
    id: "work-4",
    company: "University of Wisconsin-Madison",
    title: "Undergraduate Teaching Assistant",
    start: "September 2023",
    end: "May 2026",
    link: "#",
    logo: "/images/uw-ece-logo.png",
    sections: [
      {
        period: "Jan 2026 - May 2026",
        detail: "Digital System Fundamentals (ECE 352) under Prof. Setareh Behroozi.",
      },
      {
        period: "Sep 2023 - May 2025",
        detail: "Introduction to Computer Engineering (ECE 252) under Prof. Setareh Behroozi.",
      },
      {
        period: "Sep 2024 - Dec 2024",
        detail: "Machine Organization & Programming (CS 354) under Prof. Debra Deppeler",
      },
    ],
    description:
      "- Led office hours for 850+ students and instructed them in topics including digital logic design, processor architecture, RTL design, finite state machines, timing analysis, pipelining, C/assembly programming, and memory hierarchy.",
  },
  {
    id: "work-2",
    company: "Endress+Hauser Group",
    title: "Embedded Software Engineering Co-op",
    start: "May 2025",
    end: "Dec 2025",
    link: "#",
    logo: "/images/endress-hauser-logo.png",
    summary:
      "Worked on the Digital Transformation Solutions team",
    description:
      "- Engineered a Dockerized full-stack Netilion IIoT simulator (React/TypeScript, Python/FastAPI) with 30+ REST endpoints, 5 simulation patterns and 200+ health codes, streaming real-time data for hardware-free demos.\n- Characterized Bluetooth 6.2 performance on the nRF54L15 via Channel Sounding and multi-device tests, analyzing ranging accuracy, packet reliability, and RF congestion effects for the SGC200 Bluetooth-to-cloud gateway.\n- Conducted performance testing and QA for the Digital Commissioning App; documented workflows, and proposed UI/UX and offline-first architecture changes tied to $180K–$400K global initiatives.\n- Designed OPC UA and REST-based data pipes bridging Netilion IIoT with Snowflake via edge middleware clients.",
  },
  {
    id: "work-3",
    company: "Endress+Hauser Group",
    title: "Software Engineering Intern",
    start: "May 2024",
    end: "Aug 2024",
    link: "#",
    logo: "/images/endress-hauser-logo.png",
    summary: "Worked on the Digital Transformation Solutions team.",
    description:
      "- Overhauled an outdated 14-step subscription workflow for Netilion, an IIoT cloud platform, proposing solutions that projected a 70% reduction in operational costs and processing time.\n- Led Salesforce dashboard and folder cleanup; built and deployed a Node.js naming web tool (TypeScript/React), integrated it as an extension, and proposed to 10 departments, potentially saving $40,000 in workforce hours.\n- Engineered an IoT temperature display by designing a custom circuit that integrates an industrial temperature probe with a microprocessor, enabling real-time data visualization and remote monitoring via ThingSpeak and JavaScript.",
  },
  {
    id: "work-5",
    company: "Larsen & Toubro",
    title: "Software Engineering Intern",
    start: "May 2023",
    end: "Aug 2023",
    link: "#",
    logo: "/images/larsen-toubro-logo.png",
    summary: "Worked in the IT team at Larsen & Toubro Defence",
    description:
      "- Created a data visualization dashboard using Power BI and MySQL, analyzing 100000 employee task tickets from 5 business units over 2 years to monitor task completion and performance\n- Developed and deployed a robust hit counter across 4 internal intranet portals, utilized by over 4000 employees, using C#, HTML, and the .NET framework to survey portal usage data\n- Executed QA performance testing across 5 intranet web portals to identify bugs and validate accurate implementation of features and workflows",
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
