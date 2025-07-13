import { Routes, Route } from "react-router-dom";

import AboutMe from "./components/aboutme";
import Work from "./components/work";
import Certs from "./components/certs";
import Projects from "./components/projects";
import PixelArt from "./components/pixelart";
import Navbar from "./components/navbar";
import ContactMe from "./components/contact";
import { Helmet } from "react-helmet";
export default function App() {
  return (
    <>
      {/* ✅ Default SEO Meta Tags */}
      <Helmet>
        <title>Hamza Momin – Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Hamza Momin – a frontend developer passionate about building clean, responsive, and modern web interfaces."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Hamza Momin – Frontend Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Hamza Momin – a frontend developer passionate about building clean, responsive, and modern web interfaces."
        />
        <meta property="og:image" content="https://hamzamomin.com/Me.webp" />
        <meta property="og:url" content="https://hamzamomin.com"/>
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hamza Momin – Frontend Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Hamza Momin – a frontend developer passionate about building clean, responsive, and modern web interfaces."
        />
        <meta name="twitter:image" content="https://hamzamomin.com/Me.webp" />
      </Helmet>

      {/*  Navbar */}
      <Navbar />

      {/*  Mobile view (one-page scrollable) */}
      <div className="block md:hidden">
        <AboutMe />
        <Work />
        <Certs />
        <Projects />
        <PixelArt />
        <ContactMe />
      </div>

      {/* Desktop view (routed navigation) */}
      <div className="hidden md:block">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Certs" element={<Certs />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/PixelArt" element={<PixelArt />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </>
  );
}
