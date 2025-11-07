import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import EducationCertifications from './components/EducationCertifications'

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <div>
          <About />
         <Projects />
      <EducationCertifications/>
          <Contact />
        </div>
      </main>
    </div>
  )
}
