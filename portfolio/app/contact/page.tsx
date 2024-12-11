"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mic, Send } from 'lucide-react'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState<{ role: string; content: string }[]>([])
  const [isListening, setIsListening] = useState(false)
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = true

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('')
        setMessage(transcript)
      }
    }
  }, [])

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop()
    } else {
      recognitionRef.current?.start()
    }
    setIsListening(!isListening)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    const newChat = [...chat, { role: 'user', content: message }]
    setChat(newChat)
    setMessage('')

    // Here you would typically send the message to your backend
    // and get a response from the AI. For now, we'll just simulate a response.
    setTimeout(() => {
      setChat([...newChat, { role: 'assistant', content: "Thank you for your message. I'll get back to you soon!" }])
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea 
                placeholder="Your Message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex space-x-2">
                <Button type="submit">
                  <Send className="mr-2 h-4 w-4" /> Send
                </Button>
                <Button type="button" onClick={toggleListening} variant="outline">
                  <Mic className="mr-2 h-4 w-4" /> {isListening ? 'Stop' : 'Start'} Voice
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chat.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg p-2 ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

