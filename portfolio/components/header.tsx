import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden font-bold sm:inline-block">Glen Elric</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

