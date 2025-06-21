"use client"

import { useState } from "react"
import Image from "next/image"
import { projects } from "@/lib/projects-data"
import type { Project } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  
  const featuredProjects = projects.filter(project => project.featured)
  const allProjects = projects
  
  const uniqueTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort()
  
  const filteredProjects = activeFilter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a collection of my recent projects. Each one represents different
            challenges and solutions I've worked on.
          </p>
        </div>
        
        <Tabs defaultValue="featured" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="filter">Filter by Tech</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="featured" className="animate-fade-in mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="animate-fade-in mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="filter" className="animate-fade-in mt-6">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("all")}
                className={activeFilter === "all" ? "bg-primary" : ""}
              >
                All
              </Button>
              
              {uniqueTags.map((tag) => (
                <Button
                  key={tag}
                  variant={activeFilter === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(tag)}
                  className={activeFilter === tag ? "bg-primary" : ""}
                >
                  {tag}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden card-hover-effect h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="bg-accent/10">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="bg-muted">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-sm">{project.description}</CardDescription>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" size="sm">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
        </Button>
        
        {project.demoUrl && (
          <Button asChild size="sm">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default Projects