import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { initGA, trackPageView } from "./analytics";
import Layout from "./app/Layout";
import ContactPage from "./features/contact/ContactPage";
import HomePage from "./features/home/HomePage";
import ProjectsPage from "./features/projects/ProjectsPage";
import WorkPage from "./features/work/WorkPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Hamza Momin – Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Hamza Momin – a frontend developer passionate about building clean, responsive, and modern web interfaces."
        />
        <meta
          property="og:title"
          content="Hamza Momin – Frontend Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Hamza Momin – a frontend developer passionate about building clean, responsive, and modern web interfaces."
        />
        <meta property="og:image" content="https://hamzamomin.com/Me.webp" />
        <meta property="og:url" content="https://hamzamomin.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hamza Momin – Frontend Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Hamza Momin – a frontend developer passionate about building clean, responsive, and modern web interfaces."
        />
        <meta name="twitter:image" content="https://hamzamomin.com/Me.webp" />
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
