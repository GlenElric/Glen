import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Tech Innovators Inc.",
      duration: "June 2023 - August 2023",
      description: "Worked on machine learning models for predictive analytics."
    },
    {
      title: "Web Development Intern",
      company: "Digital Solutions Ltd.",
      duration: "January 2023 - April 2023",
      description: "Developed and maintained client websites using React and Node.js."
    }
  ]

  const awards = [
    {
      title: "Best Project Award",
      event: "University Hackathon 2023",
      description: "Developed an AI-powered personal assistant for students."
    },
    {
      title: "Dean's List",
      event: "Fall Semester 2022",
      description: "Achieved a GPA of 3.8 or higher."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Experience & Awards</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} | {exp.duration}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Awards</CardTitle>
          </CardHeader>
          <CardContent>
            {awards.map((award, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{award.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{award.event}</p>
                <p className="mt-2">{award.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

