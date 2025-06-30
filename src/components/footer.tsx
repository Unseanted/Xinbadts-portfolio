import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted/30 py-12 border-t">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-amber-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                Sean's Portfolio
              </span>
            </a>
            <p className="mt-4 text-muted-foreground">
              Creating beautiful, functional, and user-friendly applications is my passion.
              Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/unseanted" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/xinbadt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
                aria-label="X"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Jos, Plateau State, Nigeria
              </li>
              <li>
                <a 
                  href="mailto:sinbad4u007@yahoo.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  sinbad4u007@yahoo.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+2348031153839" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +234 (0) 8031153839
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Samuel Sean. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <a 
              href="https://github.com/unseanted/xinbadts-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
            >
              View this site's code <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer