import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/globals.css'
import { BackgroundAnimation } from '@/components/background-animation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Glen Elric - Portfolio',
  description: 'Portfolio of Glen Elric, Computer Science and Data Science Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BackgroundAnimation />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

