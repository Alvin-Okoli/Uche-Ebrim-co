import { useRef, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Practice from './components/Practice'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  const HeroRef = useRef(null)
  const AboutRef = useRef(null)
  const PracticeRef = useRef(null)
  const ContactRef = useRef(null)

  const scrollToView = (ref)=>{
    ref.current.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <>
      <Nav 
      scrolltoHeroRef={()=>scrollToView(HeroRef)}
      scrolltoAboutRef={()=>scrollToView(AboutRef)}
      scrolltoPracticeRef={()=>scrollToView(PracticeRef)}
      scrolltoContactRef={()=>scrollToView(ContactRef)}
      />
      <div ref={HeroRef} className='h-auto'><Hero/></div>
      <div ref={AboutRef} className='h-auto'><About/></div>
      <div ref={PracticeRef} className='h-auto'><Practice/></div>
      <Gallery/>
      <div ref={ContactRef} className='h-auto'><Contact/></div>
      <Footer/>
    </>
  )
}

export default App
