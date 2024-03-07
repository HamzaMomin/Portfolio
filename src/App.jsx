import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Intro from './components/Intro/intro'
import Edu from './components/Education/edu'
import Exp from './components/Experience/exp'
function App() {
  

  return (
    
      <div>
        
      <NavBar />
      <Intro />
      <Edu />
      <Exp />
      </div>
     
    
  )
}

export default App
