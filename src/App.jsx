import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/navbar'
import Intro from './components/Intro/intro'
import Button from './components/Buttons/button'


function App() {


  return (

    <div>

      <NavBar />
      <div className='zocial' style={{ border: '1px solid red', width: 'auto ', position: 'absolute', left: -25, marginTop: 60, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <Button />
        <Button />
        <Button />
      </div>

      <Intro />

      {/* <Contact /> */}



    </div>


  )
}

export default App
