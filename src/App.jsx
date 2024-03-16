import './App.css'
import NavBar from './components/NavBar/navbar'
import Intro from './components/Intro/intro'
import Button from './components/Buttons/button'
import Github from './assets/Github.png';
import Linkedin from './assets/Linkedin.png';
import Email from './assets/Email.png';


function App() {


  return (

    <div>

      <NavBar />
      <div className='zocial' style={{width: 'auto ', position: 'absolute', left: -25, marginTop: 60, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' , }}>
      
      <Button image={Github} />
      <Button image={Linkedin}/>
      <Button image={Email}/>


      </div>

      <Intro />
      
      {/* <Contact /> */}



    </div>


  )
}

export default App
