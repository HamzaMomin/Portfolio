import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Intro from './components/Intro/intro'
import Edu from './components/Education/edu'
import Exp from './components/Experience/exp'
import Projects from './components/Projects/projects'
import Skills from './components/Skills/skills'
import Certs from './components/Certifications/certs'
import Contact from './components/Contact Me/Contact'
import Freelanc from './components/Experience/freelance'

function App() {


  return (

    <div>

      <NavBar />

      <Intro />
      
      <Edu />
      
      <Exp />
      <hr/>
      <Freelanc/>
      <hr/>
      <Projects />
     
      <Skills />
   
      <Certs />
      
      <Contact />



    </div>


  )
}

export default App
