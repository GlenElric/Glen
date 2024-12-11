import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Personal Assistant",
      description: "Developed an AI assistant to help students manage their schedules and studies.",
      technologies: ["Python", "TensorFlow", "Flask"],
      github: "https://github.com/yourusername/ai-assistant",
      demo: "https://ai-assistant-demo.vercel.app"
    },
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform with user authentication and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-platform-demo.vercel.app"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for visualizing complex datasets.",
      technologies: ["D3.js", "React", "Express"],
      github: "https://github.com/yourusername/data-viz-dashboard",
      demo: "https://data-viz-dashboard-demo.vercel.app"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

