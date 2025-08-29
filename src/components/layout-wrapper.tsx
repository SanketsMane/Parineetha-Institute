'use client'

import { useState, useEffect } from 'react'
import { SplashScreen } from './splash-screen'
import { Navbar } from './navbar'
import { Footer } from './footer'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if splash has been shown before in this session
    const splashShown = sessionStorage.getItem('splashShown')
    if (splashShown) {
      setShowSplash(false)
      setIsLoaded(true)
    } else {
      setIsLoaded(true)
    }
  }, [])

  const handleSplashFinish = () => {
    setShowSplash(false)
    sessionStorage.setItem('splashShown', 'true')
  }

  if (!isLoaded) {
    return null // Prevent hydration mismatch
  }

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className={`flex min-h-screen flex-col transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
