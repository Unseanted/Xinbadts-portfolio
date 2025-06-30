import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section 
      id="home" 
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                  Samuel Sean
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-lg animate-fade-in-delay-1">
              A passionate software engineer specialized in creating beautiful, functional, and user-friendly applications.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4 animate-fade-in-delay-3">
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
          
          <div className="md:col-span-2 flex justify-center animate-fade-in-delay-1">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Profile" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-fade-in-delay-3">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  )
}

export default Hero