import About from '../components/About.tsx'
import Achievements from '../components/Achievements.tsx'
import Contact from '../components/Contact.tsx'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import Hero from '../components/Hero.tsx'
import Services from '../components/Services.tsx'
import Solutions from '../components/Solutions.tsx'
import WhyChooseUs from '../components/WhyChooseUs.tsx'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Achievements />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
