export default function ProjectsPage() {
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
              <a href="/projects" className="text-foreground font-medium font-sans">
                Projects
              </a>
              <a href="/education" className="text-foreground hover:text-muted-foreground transition-colors font-sans">
                Education
              </a>
            </div>
          </nav>

          <div className="text-center">
            <h1 className="text-3xl font-serif text-foreground tracking-wide">Projects</h1>
            <p className="text-muted-foreground mt-2 font-sans">Engineering solutions and innovative implementations</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card border border-border p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-serif text-card-foreground mb-4">Smart Home Automation System</h2>
              <div className="w-full h-48 bg-muted border border-border flex items-center justify-center mb-6">
                <span className="text-muted-foreground font-sans text-sm">Project Image</span>
              </div>
            </div>
            <p className="text-card-foreground mb-6 leading-relaxed font-sans">
              Designed and implemented a comprehensive IoT-based home automation system using Raspberry Pi, Arduino, and
              custom mobile application. The system enables remote control of lighting, temperature, security, and
              energy monitoring with real-time data visualization.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-serif text-card-foreground mb-2">Key Features:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• Voice control integration with Alexa and Google Assistant</li>
                  <li>• Machine learning-based energy optimization algorithms</li>
                  <li>• Real-time security monitoring with facial recognition</li>
                  <li>• Mobile app with intuitive dashboard and scheduling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-card-foreground mb-2">Technical Implementation:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• Raspberry Pi 4 as central hub with custom Python backend</li>
                  <li>• Arduino sensors for environmental monitoring</li>
                  <li>• React Native mobile app with real-time WebSocket communication</li>
                  <li>• MongoDB database for historical data and user preferences</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Python</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">React Native</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">IoT</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Arduino</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">MongoDB</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors"
              >
                GitHub →
              </a>
              <a
                href="#"
                className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors"
              >
                Live Demo →
              </a>
            </div>
          </div>

          <div className="bg-card border border-border p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-serif text-card-foreground mb-4">Machine Learning Image Classifier</h2>
              <div className="w-full h-48 bg-muted border border-border flex items-center justify-center mb-6">
                <span className="text-muted-foreground font-sans text-sm">Project Image</span>
              </div>
            </div>
            <p className="text-card-foreground mb-6 leading-relaxed font-sans">
              Built a convolutional neural network for real-time image classification with 94% accuracy on custom
              dataset of 10,000+ images. Optimized for deployment on edge devices with minimal computational overhead.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-serif text-card-foreground mb-2">Model Architecture:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• Custom CNN with residual connections and attention mechanisms</li>
                  <li>• Data augmentation pipeline for improved generalization</li>
                  <li>• Model quantization for 4x reduction in inference time</li>
                  <li>• Transfer learning from pre-trained ImageNet models</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-card-foreground mb-2">Performance Metrics:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• 94.2% accuracy on test dataset</li>
                  <li>• 15ms inference time on Raspberry Pi 4</li>
                  <li>• 85% reduction in model size through pruning</li>
                  <li>• Real-time processing at 30 FPS</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">TensorFlow</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Python</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">OpenCV</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Keras</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">CUDA</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors"
              >
                GitHub →
              </a>
              <a
                href="#"
                className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors"
              >
                Paper →
              </a>
            </div>
          </div>

          <div className="bg-card border border-border p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-serif text-card-foreground mb-4">FPGA-based Digital Signal Processor</h2>
              <div className="w-full h-48 bg-muted border border-border flex items-center justify-center mb-6">
                <span className="text-muted-foreground font-sans text-sm">Project Image</span>
              </div>
            </div>
            <p className="text-card-foreground mb-6 leading-relaxed font-sans">
              Implemented a custom DSP architecture on FPGA for real-time audio processing with low-latency filtering
              and effects. Achieved professional-grade audio processing with sub-millisecond latency.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-serif text-card-foreground mb-2">DSP Features:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• Real-time FIR and IIR filter implementations</li>
                  <li>• Multi-channel audio processing (up to 8 channels)</li>
                  <li>• Dynamic range compression and limiting</li>
                  <li>• Configurable delay lines and reverb effects</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-card-foreground mb-2">Hardware Specifications:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• Xilinx Zynq-7000 SoC platform</li>
                  <li>• 48 kHz sampling rate with 24-bit resolution</li>
                  <li>• 0.5ms total system latency</li>
                  <li>• Custom PCB design with professional audio I/O</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">VHDL</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">FPGA</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Xilinx</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">DSP</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">PCB Design</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors"
              >
                GitHub →
              </a>
              <a
                href="#"
                className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors"
              >
                Demo Video →
              </a>
            </div>
          </div>

          <div className="bg-card border border-border p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-serif text-card-foreground mb-4">Distributed Computing Framework</h2>
              <div className="w-full h-48 bg-muted border border-border flex items-center justify-center mb-6">
                <span className="text-muted-foreground font-sans text-sm">Project Image</span>
              </div>
            </div>
            <p className="text-card-foreground mb-6 leading-relaxed font-sans">
              Developed a lightweight distributed computing framework for parallel processing of large datasets across
              multiple nodes. Designed for high throughput and fault tolerance in cloud environments.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-serif text-card-foreground mb-2">Framework Features:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• Automatic load balancing and task distribution</li>
                  <li>• Fault tolerance with automatic node recovery</li>
                  <li>• Real-time monitoring and performance metrics</li>
                  <li>• RESTful API for job submission and management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-card-foreground mb-2">Performance Results:</h3>
                <ul className="space-y-1 text-card-foreground font-sans ml-4">
                  <li>• 10x speedup on data processing tasks</li>
                  <li>• Linear scalability up to 50 nodes</li>
                  <li>• 99.9% uptime with automatic failover</li>
                  <li>• Support for datasets up to 1TB</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Go</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Docker</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">gRPC</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Kubernetes</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 text-sm font-sans">Redis</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors"
              >
                GitHub →
              </a>
              <a
                href="#"
                className="text-foreground font-sans font-medium hover:text-muted-foreground transition-colors"
              >
                Documentation →
              </a>
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
