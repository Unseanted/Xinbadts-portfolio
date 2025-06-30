const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              Results-driven Software Engineer with 3+ years of experience designing and developing responsive, user-centric web applications. Proficient in modern JavaScript frameworks and tools including React, Next.js, and Node.js.
              Passionate about building scalable solutions that balance functionality with elegant UI/UX design.
            </p>
            <p className="text-lg">
              My software development journey began during my university years, where I discovered a passion for transforming ideas into functional code.
              Since then, I've collaborated with diverse teams and clients to deliver high-quality, reliable software solutions that drive real-world impact.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or enjoying outdoor activities to maintain a healthy
              work-life balance.
            </p>
          </div>
          
          <div className="animate-fade-in-delay-1">
            <div className="bg-card shadow-md rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary mr-3">
                    •
                  </span>
                  <span>Based in Jos, Plateau State, Nigeria</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary mr-3">
                    •
                  </span>
                  <span>Certified ALX Software Engineer</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary mr-3">
                    •
                  </span>
                  <span>3+ years professional experience</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary mr-3">
                    •
                  </span>
                  <span>BlueHouse Technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary mr-3">
                    •
                  </span>
                  <span>Open source contributor</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary mr-3">
                    •
                  </span>
                  <span>Tech conference speaker</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About