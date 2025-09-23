export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background border-b border-foreground">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <nav className="flex justify-center mb-8">
            <div className="flex space-x-12">
              <a href="/" className="text-foreground hover:text-muted-foreground transition-colors font-sans">
                Home
              </a>
              <a href="/blog" className="text-foreground font-medium font-sans">
                Blog
              </a>
              <a href="/experience" className="text-foreground hover:text-muted-foreground transition-colors font-sans">
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
            <h1 className="text-3xl font-serif text-foreground tracking-wide">Blog</h1>
            <p className="text-muted-foreground mt-2 font-sans">Thoughts on technology, engineering, and innovation</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <article className="bg-card border border-border p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-serif text-card-foreground mb-3">
                Building Efficient FPGA Architectures for Real-Time Processing
              </h2>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground font-sans">
                <span>March 15, 2024</span>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span>Hardware Design</span>
              </div>
            </div>
            <p className="text-card-foreground leading-relaxed font-sans mb-6">
              Exploring the challenges and solutions in designing FPGA architectures that can handle real-time data
              processing with minimal latency. This post covers optimization techniques, pipeline design, and resource
              management strategies I've learned through my recent projects.
            </p>
            <a href="#" className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors">
              Read more →
            </a>
          </article>

          <article className="bg-card border border-border p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-serif text-card-foreground mb-3">
                Machine Learning at the Edge: Optimizing Models for Embedded Systems
              </h2>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground font-sans">
                <span>February 28, 2024</span>
                <span>•</span>
                <span>12 min read</span>
                <span>•</span>
                <span>Machine Learning</span>
              </div>
            </div>
            <p className="text-card-foreground leading-relaxed font-sans mb-6">
              A deep dive into the techniques for deploying machine learning models on resource-constrained embedded
              systems. Covering quantization, pruning, and hardware-specific optimizations that make AI accessible in
              IoT applications.
            </p>
            <a href="#" className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors">
              Read more →
            </a>
          </article>

          <article className="bg-card border border-border p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-serif text-card-foreground mb-3">
                The Future of Computer Engineering: Bridging Hardware and Software
              </h2>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground font-sans">
                <span>January 20, 2024</span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span>Industry Insights</span>
              </div>
            </div>
            <p className="text-card-foreground leading-relaxed font-sans mb-6">
              Reflecting on the evolving landscape of computer engineering and how the traditional boundaries between
              hardware and software continue to blur. What this means for the next generation of engineers and the
              skills we need to develop.
            </p>
            <a href="#" className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors">
              Read more →
            </a>
          </article>
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
