"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Glen Elric</h1>
          <p className="text-xl mb-8">Computer Science and Data Science Engineer</p>
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <img src="/profile.jpg" alt="Glen Elric" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Glen Elric</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Junior CS & DS Engineer</p>
              <Button className="w-full mb-2">
                <Share2 className="mr-2 h-4 w-4" /> Share Profile
              </Button>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

