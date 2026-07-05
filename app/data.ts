export type Project = {
  id: string
  name: string
  tech: string
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

export const ABOUT_PARAGRAPHS: string[] = []

export const RECENTLY_PLAYED = [
  { id: "track-1", title: "Shoota (feat. Lil Uzi Vert)", artist: "Playboi Carti" },
  { id: "track-2", title: "Playlist refresh soon", artist: "Spotify" },
  { id: "track-3", title: "Vibes for late night debugging", artist: "Coming soon" },
]

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    name: "FileHawk.net – Local Semantic Search",
    tech: "Electron, Python, ChromaDB, SentenceTransformers",
    description: "• Architected a cross-platform desktop app (Electron + React + Flask) that searches 50GB+ local data with sub-second responses; two-stage retrieval (ChromaDB vectors + rerank) reduced file searching time by 75%\n• Delivered high-precision semantic search using dual SentenceTransformers (MS MARCO / All-MiniLM) and a proprietary Gist ranker; intelligent chunking + caching drove 95% relevance across 25+ file types\n• Built real-time, incremental indexing (Watchdog + SHA-256 change detection) handling 10k+ file changes/hr",
    link: "https://www.filehawk.net/",
    video: "",
  },
  {
    id: "proj-2",
    name: "C-PASTA (Research Project)",
    tech: "C++, OpenMP, OpenTimer, DAG-based Scheduling, Static Timing Analysis, Linux, Python",
    description: "• Researched CPU task partitioning algorithms under Prof. Tsung-Wei Huang and PhD mentor Boyang Zhang\n• Built an experimental C++ framework to run C-PASTA on OpenTimer benchmarks, sweeping key parameters and collecting runtime/structural statistics to evaluate clustering heuristics",
    link: "https://github.com/kagrawal6/C-PASTA-Research-Project",
    video: "",
  },
  {
    id: "proj-3",
    name: "High-Frequency Currency Arbitrage Engine",
    tech: "C++, OpenMP, CUDA, Python, Real-Time Data, CMake",
    description: "• Built a parallel HFT pipeline for real-time FX arbitrage, leveraging OpenMP and CUDA to accelerate graph-based detection and simulation across 19+ currency pairs\n• Streamlined ingestion and normalization of live FX data, modeling dynamic markets as time-indexed graphs and detecting arbitrage cycles with GPU-accelerated Bellman–Ford\n• Simulated trade execution with transaction cost and risk modeling, supporting dynamic position sizing and latency-aware strategies\n• Automated performance analytics and designed a scalable architecture for rapid deployment in high throughput trading environments",
    link: "https://github.com/kagrawal6/CS759-Final-Project",
    video: "",
  },
  {
    id: "proj-4",
    name: "FPGA Knight's Tour",
    tech: "SystemVerilog, ModelSim, Synopsys Design Compiler, Quartus Prime",
    description: "• Designed an FPGA-based autonomous robot to solve the Knight's Tour problem using SystemVerilog, integrating a PID controller, SPI for gyroscope data, and IR sensors for movement tracking\n• Achieved 333 MHz timing closure, reduced synthesized area by 25% through Synopsys standard cell optimizations monitored in Design Compiler, and lowered power consumption by 12% using gated clock designs\n• Developed a command processor with UART and SPI for Bluetooth control and inertial sensor integration\n• Built self-checking testbenches, ensuring full code coverage, post-synthesis validation, and FPGA performance",
    link: "https://github.com/kagrawal6/FPGA-Knights-Tour",
    video: "",
  },
  {
    id: "proj-5",
    name: "Partial Scan Optimization – b14 Viper Processor",
    tech: "TCL, Synopsys Design Vision, TetraMax, ATPG, SCOAP, Verilog, STIL",
    description: "• Architected and automated a custom partial scan DFT flow for a synthesized processor design, optimizing test coverage, area, and scan overhead under strict ATE pin constraints\n• Developed TCL-based tooling to drive flip-flop selection via SCOAP analysis, selectively excluding noncritical scan elements while preserving controllability/observability\n• Achieved >85% test coverage with >5× reduction in pattern count using coverage-constrained ATPG and scan chain tuning\n• Delivered >3× improvement in a weighted testability-performance metric (M), demonstrating strong command over scan design, ATPG strategy, and DFT tradeoff analysis",
    link: "https://github.com/kagrawal6/Partial-Scan-Optimization-b14-Viper-Processor",
    video: "",
  },
  {
    id: "proj-6",
    name: "ICCAD 2025 Problem C Incremental Placement Tool",
    tech: "C++, Python, Bash, TCL, OpenROAD, Verilog, DEF/LEF, Docker",
    description: "• Developing a full-stack optimizer to improve ASIC placement by integrating cell relocation, gate sizing, and buffer/inverter insertion for better PPA (Power, Performance, Area)\n• Parsing and manipulating industry-standard formats (pl, v, .lef, .lib, .scl) to enable legal placement transformations with minimal cell displacement\n• Automating ECO-aware changelist generation using Python scripts and validating results via OpenROAD timing/power analysis\n• Building a scalable, GPU-ready toolchain containerized with Docker for reproducible benchmarking and performance testing",
    link: "#",
    video: "",
  },
  {
    id: "proj-7",
    name: "DevPulse",
    tech: "TypeScript, Node.js, pnpm, Jest, Istanbul/LCOV, Commander.js, GitHub Actions",
    description: "• Building a modular CLI tool for automated test suite analysis, including flakiness detection, coverage analysis, and actionable reporting for JavaScript/TypeScript projects\n• Designed a TypeScript monorepo (pnpm) with plugin-based analyzers and reporters, supporting parallel test execution and statistical flakiness scoring\n• Integrated Istanbul/LCOV coverage parsing and multi-format report generation (HTML, Markdown, JSON)\n• Automating CI workflows and PR feedback with GitHub Actions",
    link: "#",
    video: "",
  },
  {
    id: "proj-8",
    name: "5-Stage Pipelined RISC Processor",
    tech: "Verilog, ModelSim, Synopsys Design Compiler",
    description: "• Designed a 16-bit, 5-stage pipelined processor in Verilog based on MIPS R2000, developing the data path and control path with an optimized ALU, forwarding, hazard detection, and branch prediction to minimize stalls\n• Implemented a pipelined microarchitecture with register file bypassing, forwarding, and branch prediction\n• Integrated a 2-way set-associative L1 instruction and data cache with direct-mapped and write-back policies",
    link: "https://github.com/kagrawal6/5-Stage-Pipelined-RISC-Processor",
    video: "",
  },
  {
    id: "proj-9",
    name: "FUSE-Based Linux Filesystem",
    tech: "C, Bash, Python, Emacs Lisp, FUSE, GDB, POSIX",
    description: "• Developed a user-space filesystem in C using FUSE, enabling file creation, deletion, reading, writing, and directory management with inode-based storage and indirect block mapping for large file support\n• Implemented RAID 0 for data striping and RAID 1 for mirroring, ensuring redundancy and fault tolerance\n• Designed and mounted the filesystem with superblock-based metadata tracking, block allocation via bitmaps, and efficient disk operations to support real-world storage requirements\n• Validated filesystem stability using gdb, disk inspection, and automated Python tests with POSIX commands",
    link: "#",
    video: "",
  },
  {
    id: "proj-10",
    name: "xv6 Memory Mapping with Copy-on-Write",
    tech: "C, xv6, x86 Paging, GDB, Makefile, Bash, Python",
    description: "• Implemented memory-mapped file support in xv6, enabling file-backed and anonymous memory allocations with lazy page allocation, demand paging, and page fault handling to optimize memory usage\n• Optimized process memory with Copy-on-Write, reducing duplication via shared pages and reference counting\n• Enforced ELF segment protections, preventing unauthorized writes, and ensuring safe concurrent access with locks",
    link: "#",
    video: "",
  },
  {
    id: "proj-11",
    name: "Two-Player Matching Squares Game",
    tech: "C, FreeRTOS, MSP432, PSoC 6, SPI, I2C, UART",
    description: "• Developed an embedded systems game in C on an MSP432 Launchpad and PSoC 6, utilizing FreeRTOS\n• Used SPI and I2C to interface with sensors and peripherals on PSoC 6, integrating an accelerometer, joystick, light sensors, and an LCD for real-time player control and feedback\n• Implemented UART for multiplayer communication between two boards, enabling real-time data transmission",
    link: "#",
    video: "",
  },
  {
    id: "proj-12",
    name: "Heap Simulator",
    tech: "C, Git, Makefile",
    description: "• Engineered a dynamic memory management system, implementing best-fit placement, splitting, and immediate coalescing to efficiently handle allocation and deallocation of memory blocks\n• Simulated a 1 MB heap, leveraging pointer arithmetic, bit masking, and header/footer management to achieve precise memory block tracking\n• Designed and automated extensive test cases with Makefile scripts to simulate complex allocation scenarios",
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
