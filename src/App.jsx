import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import SignatureDishes from './components/SignatureDishes.jsx'
import Gallery from './components/Gallery.jsx'
import Menu from './components/Menu.jsx'
import Experience from './components/Experience.jsx'
import VisitInfo from './components/VisitInfo.jsx'
import InstagramBand from './components/Instagram.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  const scopeRef = useReveal()

  return (
    <div ref={scopeRef}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <Gallery />
        <Menu />
        <Experience />
        <VisitInfo />
        <InstagramBand />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
