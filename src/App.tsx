import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/aboutme"
import Work from "./components/work"
import Certs from "./components/certs"
import Projects from "./components/projects"
import Navbar from "./components/navbar"
import ContactMe from "./components/contact";



export default function App() {
  return (
    <>
    
      <Navbar />
      <div className="block md:hidden">
        {/* Mobile: Render all sections for scrollable single-page experience */}
        <AboutMe />
        <Work />
        <Certs />
        <Projects />
        <ContactMe />
        {/* Add more sections here if needed, e.g. <Projects />, <Contact /> */}
      </div>
      <div className="hidden md:block">
        {/* Desktop: Use routes as before */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Certs" element={<Certs />} />
          <Route path="/Projects" element={<Projects />} />
         <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </>
  );
}