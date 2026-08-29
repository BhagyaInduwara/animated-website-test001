import { useCallback, useState } from 'react'
import { ScrollTrigger } from './lib/gsap'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoaded = useCallback(() => {
    setLoading(false)
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [])

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoaded} />}

      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <WhyUs />
      </main>
      <Footer />
    </>
  )
}
