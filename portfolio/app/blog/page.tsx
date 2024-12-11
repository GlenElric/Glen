import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with Machine Learning",
      date: "2023-05-15",
      excerpt: "An introduction to the basics of machine learning and its applications.",
      slug: "getting-started-with-machine-learning"
    },
    {
      title: "The Future of Web Development",
      date: "2023-04-22",
      excerpt: "Exploring upcoming trends and technologies in web development.",
      slug: "future-of-web-development"
    },
    {
      title: "Data Science in the Real World",
      date: "2023-03-10",
      excerpt: "How data science is being applied to solve real-world problems.",
      slug: "data-science-real-world"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{post.date}</p>
              <p className="mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

