import { Element } from 'react-scroll'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import CarouselSection from './components/CarouselSection'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
// import TestimonialCarousel from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import ClientsSection from './components/ClientsSection'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Element name="home"><HeroSection /></Element>
        <Element name="about"><AboutUs /></Element>
        <Element name="services"><CarouselSection /></Element>
        <Element name="how-it-works"><HowItWorks /></Element>
        {/* <Element name="clients"><TestimonialCarousel /></Element> */}
        <Element name="clients"><ClientsSection /></Element>
        <Element name="contact">
          <ContactUs />
          <Footer />
        </Element>
      </div>
    </>
  )
}

export default App
