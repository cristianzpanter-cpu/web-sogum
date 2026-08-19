import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import About from './components/About.jsx'
import Craft from './components/Craft.jsx'
import SignatureDishes from './components/SignatureDishes.jsx'
import Gallery from './components/Gallery.jsx'
import Menu from './components/Menu.jsx'
import Experience from './components/Experience.jsx'
import VisitInfo from './components/VisitInfo.jsx'
import FAQ from './components/FAQ.jsx'
import Testimonial from './components/Testimonial.jsx'
import InstagramBand from './components/Instagram.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import LegalPage from './components/LegalPage.jsx'
import StructuredData from './components/StructuredData.jsx'
import MobileReserveBar from './components/MobileReserveBar.jsx'
import useReveal from './hooks/useReveal.js'
import useHashRoute from './hooks/useHashRoute.js'

export default function App() {
  const scopeRef = useReveal()
  const legalRoute = useHashRoute()

  if (legalRoute) {
    return <LegalPage type={legalRoute} />
  }

  return (
    <div ref={scopeRef}>
      <StructuredData />
      <a href="#main-content" className="skip-link">
        Zum Inhalt springen
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <About />
        <Craft />
        <SignatureDishes />
        <Gallery />
        <Menu />
        <Experience />
        <VisitInfo />
        <FAQ />
        <Testimonial />
        <InstagramBand />
        <FinalCTA />
      </main>
      <Footer />
      <MobileReserveBar />
    </div>
  )
}
