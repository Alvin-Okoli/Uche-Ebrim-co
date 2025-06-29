import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Practice from './components/Practice'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Practice/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
