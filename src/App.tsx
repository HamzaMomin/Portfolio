import AboutMe from "./components/aboutme"
import Certifications from "./components/certifications"
import Contact from "./components/contact"
import Experience from "./components/experience"
import Navbar from "./components/navbar"
// import PixelArt from "./components/pixelart"
import Projects from "./components/projects"



function App() {


  return (
    <>
    
    <Navbar />
    <AboutMe />
   
    <Experience/>
    <Certifications/>
    <Projects />
    {/* <PixelArt/> */}
    <Contact />
    </>
  )
}

export default App
