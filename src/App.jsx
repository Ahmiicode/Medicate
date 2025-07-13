import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Service from './components/Service'
import Lab from './components/Lab'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Service/>
      <Lab/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
