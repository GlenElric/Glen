"use client"

import { useEffect, useState } from 'react'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const [localTime, setLocalTime] = useState('')
  const [temperature, setTemperature] = useState('N/A')
  const [ipAddress, setIpAddress] = useState('N/A')
  const [uplinkSpeed, setUplinkSpeed] = useState('N/A')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setLocalTime(now.toLocaleTimeString())
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)

    const fetchData = async () => {
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipResponse.json()
        setIpAddress(ipData.ip || 'N/A')

        const weatherResponse = await fetch('https://api.weatherapi.com/v1/current.json?key=b0c69aec7eb3401eae0154401240912&q=Mangalore')
        const weatherData = await weatherResponse.json()
        if (weatherData.current && typeof weatherData.current.temp_c === 'number') {
          setTemperature(`${weatherData.current.temp_c.toFixed(1)}°C`)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    if (typeof navigator !== 'undefined' && 'connection' in navigator && 'downlink' in (navigator.connection as any)) {
      setUplinkSpeed(`${(navigator.connection as any).downlink} Mbps`)
    }

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Glen Elric. Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            {localTime} | {temperature} | {ipAddress} | {uplinkSpeed}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/GlenElric" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/glen-elric-fernandes" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/ElricGlen" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

