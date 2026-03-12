import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <FAQ />
      <Testimonials />
      <Contact />
    </main>
  )
}
