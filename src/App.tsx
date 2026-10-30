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
        <title>Hamza Momin – Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Hamza Momin, a software engineer who builds web products, apps, and games — currently at Xgrid, with a knack for pixel art."
        />
        <meta
          property="og:title"
          content="Hamza Momin – Software Engineer"
        />
        <meta
          property="og:description"
          content="Portfolio of Hamza Momin, a software engineer who builds web products, apps, and games — currently at Xgrid, with a knack for pixel art."
        />
        <meta property="og:image" content="https://hamzamomin.com/Me.webp" />
        <meta property="og:url" content="https://hamzamomin.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hamza Momin – Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Hamza Momin, a software engineer who builds web products, apps, and games — currently at Xgrid, with a knack for pixel art."
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
