export default function EducationPage() {
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
              <a href="/experience" className="text-foreground hover:text-muted-foreground transition-colors font-sans">
                Experience
              </a>
              <a href="/projects" className="text-foreground hover:text-muted-foreground transition-colors font-sans">
                Projects
              </a>
              <a href="/education" className="text-foreground font-medium font-sans">
                Education
              </a>
            </div>
          </nav>

          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground tracking-wide">Education</h1>
            <p className="text-muted-foreground mt-2 font-sans">Academic background and achievements</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="bg-card border border-border p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
              <div>
                <h2 className="text-2xl font-serif text-card-foreground mb-2">
                  Bachelor of Science in Computer Engineering
                </h2>
                <p className="text-lg text-muted-foreground font-sans">University of Wisconsin-Madison</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">Madison, Wisconsin</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <span className="text-sm text-muted-foreground bg-muted px-4 py-2 font-sans">2022 - 2026</span>
                <p className="text-sm text-muted-foreground mt-2 font-sans">GPA: 3.8/4.0</p>
                <p className="text-sm text-muted-foreground font-sans">
                  Dean's List: Fall 2022, Spring 2023, Fall 2023
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif text-card-foreground mb-4">Relevant Coursework</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-serif text-card-foreground mb-3">Core Engineering</h4>
                    <ul className="space-y-2 text-card-foreground font-sans">
                      <li>• Data Structures and Algorithms (A)</li>
                      <li>• Computer Architecture (A-)</li>
                      <li>• Digital Logic Design (A)</li>
                      <li>• Operating Systems (A-)</li>
                      <li>• Computer Networks (A)</li>
                      <li>• Software Engineering (A)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-serif text-card-foreground mb-3">Specialized Topics</h4>
                    <ul className="space-y-2 text-card-foreground font-sans">
                      <li>• Machine Learning (A)</li>
                      <li>• Embedded Systems (A)</li>
                      <li>• Digital Signal Processing (A-)</li>
                      <li>• VLSI Design (A-)</li>
                      <li>• Computer Vision (A)</li>
                      <li>• Distributed Systems (In Progress)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-card-foreground mb-4">Academic Achievements</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-card-foreground">Outstanding Student in Computer Engineering</h4>
                      <p className="text-sm text-muted-foreground font-sans">
                        Awarded for academic excellence and research contributions
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 font-sans">2024</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-card-foreground">IEEE Student Paper Competition - 1st Place</h4>
                      <p className="text-sm text-muted-foreground font-sans">
                        Regional competition for undergraduate research
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 font-sans">2024</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-card-foreground">Undergraduate Research Scholar</h4>
                      <p className="text-sm text-muted-foreground font-sans">
                        Competitive program for top 5% of engineering students
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 font-sans">2023</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-card-foreground mb-4">Senior Capstone Project</h3>
                <div className="bg-muted p-6 border border-border">
                  <h4 className="font-serif text-card-foreground mb-2">
                    "Real-time Edge AI for Industrial Quality Control"
                  </h4>
                  <p className="text-card-foreground leading-relaxed font-sans mb-4">
                    Developing an edge computing solution for real-time quality control in manufacturing environments.
                    The system uses computer vision and machine learning to detect defects with 99.2% accuracy while
                    maintaining sub-10ms processing latency.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-background text-foreground px-3 py-1 text-sm font-sans">TensorFlow Lite</span>
                    <span className="bg-background text-foreground px-3 py-1 text-sm font-sans">NVIDIA Jetson</span>
                    <span className="bg-background text-foreground px-3 py-1 text-sm font-sans">OpenCV</span>
                    <span className="bg-background text-foreground px-3 py-1 text-sm font-sans">Industrial IoT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="text-2xl font-serif text-card-foreground mb-2">High School Diploma</h2>
                <p className="text-lg text-muted-foreground font-sans">Madison West High School</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">Madison, Wisconsin</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <span className="text-sm text-muted-foreground bg-muted px-4 py-2 font-sans">2018 - 2022</span>
                <p className="text-sm text-muted-foreground mt-2 font-sans">GPA: 4.0/4.0</p>
                <p className="text-sm text-muted-foreground font-sans">Valedictorian</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-card-foreground mb-4">Advanced Placement Courses</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-card-foreground font-sans">
                    <li>• AP Computer Science A (5)</li>
                    <li>• AP Physics C: Mechanics (5)</li>
                    <li>• AP Physics C: E&M (5)</li>
                    <li>• AP Calculus BC (5)</li>
                  </ul>
                  <ul className="space-y-2 text-card-foreground font-sans">
                    <li>• AP Statistics (5)</li>
                    <li>• AP Chemistry (4)</li>
                    <li>• AP English Language (4)</li>
                    <li>• AP U.S. History (4)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-card-foreground mb-4">Activities & Leadership</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-serif text-card-foreground">Robotics Team Captain</h4>
                    <p className="text-sm text-muted-foreground font-sans">
                      Led team to state championship, managed 15-member engineering team
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-card-foreground">Math Olympiad Team</h4>
                    <p className="text-sm text-muted-foreground font-sans">
                      Regional qualifier, top 10 individual performance
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-card-foreground">National Honor Society</h4>
                    <p className="text-sm text-muted-foreground font-sans">
                      Member for academic excellence and community service
                    </p>
                  </div>
                </div>
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
