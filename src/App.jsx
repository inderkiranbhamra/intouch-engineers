import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import CarouselSection from './components/CarouselSection'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
// import TestimonialCarousel from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
// import ClientsSection from './components/ClientsSection'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
      <Navbar />
      <div className="pt-20">  
      <section id="home"><HeroSection /></section>
      <section id="about"><AboutUs /></section>
      <section id="services"><CarouselSection /></section>
      <section ><HowItWorks /></section>
{/*       <section id="clients"><TestimonialCarousel /></section>
      <section ><ClientsSection /></section> */}
      <section id="contact">
      <ContactUs />
      <Footer /></section>
      </div>
    </>
  )
}

export default App

// import { Element } from 'react-scroll'
// import Navbar from './components/NavBar'
// import HeroSection from './components/HeroSection'
// import CarouselSection from './components/CarouselSection'
// import AboutUs from './components/AboutUs'
// import Footer from './components/Footer'
// // import TestimonialCarousel from './components/Testimonials'
// import HowItWorks from './components/HowItWorks'
// import ClientsSection from './components/ClientsSection'
// import ContactUs from './components/ContactUs'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="pt-20">
//         <Element name="home"><HeroSection /></Element>
//         <Element name="about"><AboutUs /></Element>
//         <Element name="services"><CarouselSection /></Element>
//         <Element name="how-it-works"><HowItWorks /></Element>
//         {/* <Element name="clients"><TestimonialCarousel /></Element> */}
//         <Element name="clients"><ClientsSection /></Element>
//         <Element name="contact">
//           <ContactUs />
//           <Footer />
//         </Element>
//       </div>
//     </>
//   )
// }

// export default App
