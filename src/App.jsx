import React from 'react'
import Header from "./components/header/header.jsx"
import Nav from "./components/nav/nav.jsx"
import About from "./components/about/About.jsx"
import Experience from "./components/experience/Experience.jsx"
import Services from "./components/services/services.jsx"
import Portfolio from "./components/portfolio/portfolio.jsx"
import Testimonials from "./components/testimonials/testimonials"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App