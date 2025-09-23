export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background border-b border-foreground">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <nav className="flex justify-center mb-8">
            <div className="flex space-x-12">
              <a href="/" className="text-foreground hover:text-muted-foreground transition-colors font-sans">
                Home
              </a>
              <a href="/blog" className="text-foreground hover:text-muted-foreground transition-colors font-sans">
                Blog
              </a>
              <a href="/experience" className="text-foreground font-medium font-sans">
                Experience
              </a>
              <a href="/projects" className="text-foreground hover:text-muted-foreground transition-colors font-sans">
                Projects
              </a>
              <a href="/education" className="text-foreground hover:text-muted-foreground transition-colors font-sans">
                Education
              </a>
            </div>
          </nav>

          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground tracking-wide">Experience</h1>
            <p className="text-muted-foreground mt-2 font-sans">Professional journey and key accomplishments</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="bg-card border border-border p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="text-2xl font-serif text-card-foreground mb-2">Software Engineering Intern</h2>
                <p className="text-lg text-muted-foreground font-sans">Tech Solutions Inc.</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">San Francisco, CA</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-4 py-2 font-sans mt-4 md:mt-0">
                June 2024 - August 2024
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-card-foreground leading-relaxed font-sans">
                Developed and optimized embedded systems software for IoT devices, resulting in a 25% performance
                improvement across the product line. Worked closely with hardware engineers to ensure seamless
                integration between software and hardware components.
              </p>
              <div className="space-y-2">
                <h3 className="font-serif text-card-foreground">Key Achievements:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• Implemented real-time data processing algorithms for sensor networks</li>
                  <li>• Reduced memory footprint by 30% through code optimization techniques</li>
                  <li>• Collaborated with cross-functional teams to deliver 3 major product releases</li>
                  <li>• Mentored 2 junior interns on embedded systems best practices</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">C/C++</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Python</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Embedded Systems</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">IoT</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Git</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="text-2xl font-serif text-card-foreground mb-2">Research Assistant</h2>
                <p className="text-lg text-muted-foreground font-sans">UW-Madison ECE Department</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">Madison, WI</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-4 py-2 font-sans mt-4 md:mt-0">
                September 2023 - Present
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-card-foreground leading-relaxed font-sans">
                Conducting cutting-edge research on machine learning applications in computer vision under the guidance
                of Dr. Sarah Chen. Focus on developing efficient algorithms for real-time image processing and object
                detection in resource-constrained environments.
              </p>
              <div className="space-y-2">
                <h3 className="font-serif text-card-foreground">Research Contributions:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• Published paper on "Efficient CNN Architectures for Edge Computing" at IEEE ICIP 2024</li>
                  <li>• Developed novel pruning techniques reducing model size by 40% with minimal accuracy loss</li>
                  <li>• Presented findings at 3 regional conferences and undergraduate research symposium</li>
                  <li>• Collaborated with industry partners on practical applications of research</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">TensorFlow</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">PyTorch</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">OpenCV</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">CUDA</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Research</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="text-2xl font-serif text-card-foreground mb-2">Teaching Assistant</h2>
                <p className="text-lg text-muted-foreground font-sans">ECE 252: Introduction to Computer Engineering</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">University of Wisconsin-Madison</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted px-4 py-2 font-sans mt-4 md:mt-0">
                January 2024 - May 2024
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-card-foreground leading-relaxed font-sans">
                Assisted in teaching fundamental computer engineering concepts to 150+ undergraduate students. Conducted
                lab sessions, graded assignments, and provided one-on-one tutoring to help students grasp complex
                digital logic and computer architecture concepts.
              </p>
              <div className="space-y-2">
                <h3 className="font-serif text-card-foreground">Teaching Responsibilities:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• Led weekly lab sessions on digital logic design and FPGA programming</li>
                  <li>• Developed supplementary learning materials and practice problems</li>
                  <li>• Maintained 4.8/5.0 student evaluation rating for teaching effectiveness</li>
                  <li>• Organized study groups and exam review sessions</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">VHDL</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Digital Logic</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">FPGA</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Teaching</span>
                <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Mentoring</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-background border-t border-foreground py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground font-sans">
            © 2024 Kushal Agrawal. Built with passion for technology and innovation.
          </p>
        </div>
      </footer>
    </div>
  )
}
