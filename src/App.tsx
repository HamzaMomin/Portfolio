import AboutMe from "./components/aboutme"
import Certifications from "./components/certifications"
import Contact from "./components/contact"
import Experience from "./components/experience"
import Navbar from "./components/navbar"
import Projects from "./components/projects"
import LogoSlider from "./components/techslider"


function App() {


  return (
    <>
    
    <Navbar />
    <AboutMe />
    <LogoSlider/>
    <Experience/>
    <Certifications/>
    <Projects />
    <Contact />
    </>
  )
}

export default App
