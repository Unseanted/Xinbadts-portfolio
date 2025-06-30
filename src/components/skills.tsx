import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend")
  
  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "CSS/Tailwind", level: 80 },
      { name: "HTML/JSX", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "GraphQL", level: 65 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "AWS", level: 55 },
      { name: "Testing", level: 80 },
    ],
    soft: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Teamwork", level: 85 },
      { name: "Time Management", level: 80 },
      { name: "Adaptability", level: 90 },
    ]
  }
  
  const technologies = [
    "C", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", 
    "Express", "MongoDB", "PostgreSQL", "REST API", "Shadcn", "SmoothieUI", "ChakraUI", 
    "Tailwind CSS", "Git", "GitHub", "Docker", "Vercel", "Jest", "React Testing Library", "DevOps", "CI/CD",
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-green-500 mx-auto"></div>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger 
                value="frontend"
                onClick={() => setActiveTab("frontend")}
                className={activeTab === "frontend" ? "bg-primary text-primary-foreground" : ""}
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger 
                value="backend"
                onClick={() => setActiveTab("backend")}
                className={activeTab === "backend" ? "bg-primary text-primary-foreground" : ""}
              >
                Backend
              </TabsTrigger>
              <TabsTrigger 
                value="tools"
                onClick={() => setActiveTab("tools")}
                className={activeTab === "tools" ? "bg-primary text-primary-foreground" : ""}
              >
                Tools
              </TabsTrigger>
              <TabsTrigger 
                value="soft"
                onClick={() => setActiveTab("soft")}
                className={activeTab === "soft" ? "bg-primary text-primary-foreground" : ""}
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(skills).map(([category, categorySkills]) => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{skill.name}</h4>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2 animate-fade-in-delay-2">
            {technologies.map((tech) => (
              <Badge 
                key={tech}
                variant="outline" 
                className="px-3 py-1 bg-accent/10 hover:bg-accent/20 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills