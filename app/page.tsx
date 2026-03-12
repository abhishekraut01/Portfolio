import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Work from '@/components/Work'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <Work />
      <Experience />
      <Services />
      <FAQ />
      <Contact />
    </main>
  )
}
