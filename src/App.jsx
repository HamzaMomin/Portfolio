import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Intro from './components/Intro/intro'
import Edu from './components/Education/edu'
import Exp from './components/Experience/exp'
import Projects from './components/Projects/projects'
import Skills from './components/Skills/skills'
import Certs from './components/Certifications/certs'

function App() {


  return (

    <div>

      <NavBar />

      <Intro />
      <hr />
      <Edu />
      <hr />
      <Exp />
      <hr />
      <Projects />

      <Skills />

      <Certs />



    </div>


  )
}

export default App
