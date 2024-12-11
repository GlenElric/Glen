import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <Card>
        <CardHeader>
          <CardTitle>Glen Elric</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            I am a junior in Computer Science and Data Science engineering, passionate about leveraging technology to solve complex problems. My journey in the world of coding began with a fascination for algorithms and has since evolved into a deep interest in machine learning and data analysis.
          </p>
          <p className="mb-4">
            Currently, I'm focusing on developing my skills in full-stack web development, cloud computing, and artificial intelligence. I believe in the power of continuous learning and am always eager to explore new technologies and methodologies.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects, participating in hackathons, or exploring the latest advancements in the tech world through blogs and podcasts.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

