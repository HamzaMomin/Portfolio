import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for button

const certifications = [
  { 
    id: 1, 
    title: "AWS Certified Cloud Practitioner", 
    image: "/src/assets/awsccp.png",
    credlyLink: "https://www.credly.com/users/hamzamomin", 
    certLink: "https://www.linkedin.com/in/hamzamomin/details/certifications/"
  },
  { 
    id: 2, 
    title: "Azure AI-900", 
    image: "/src/assets/ai-900.png",
    credlyLink: "https://www.credly.com/users/hamzamomin", 
    certLink: "https://learn.microsoft.com/api/credentials/share/en-us/HamzaMomin-4430/70F2B077493FB879?sharingId=78FB71087244859F",
  },
  { 
    id: 3, 
    title: "Google IT Support", 
    image: "/src/assets/google.png",
    credlyLink: "https://www.credly.com/users/hamzamomin", 
    certLink: "https://www.coursera.org/account/accomplishments/professional-cert/6ZUF6RFWR4A8"
  },
  { 
    id: 4, 
    title: "IBM IT Support Professional Certificate", 
    image: "/src/assets/ibm.png",
    credlyLink: "https://www.credly.com/users/hamzamomin", 
    certLink: "https://coursera.org/share/0ac78ab417730e713e8ac5c3dea5690c"
  },
  { 
    id: 5, 
    title: "Data Analyst in SQL", 
    image: "/src/assets/datacamp.png",
    credlyLink: "https://www.credly.com/users/hamzamomin", 
    certLink: "https://www.datacamp.com/completed/statement-of-accomplishment/track/3a9d3a51c39e3f926c0e4fbf9b5d32c3c9ab6fe3"
  },
  { 
    id: 6, 
    title: "Scrimba Frontend Path ( In Progress )", 
    image: "/src/assets/scrimba-logo.png",
    credlyLink: "https://www.credly.com/users/hamzamomin", 
    certLink: "https://scrimba.com/frontend-path-c0j"
  },
];

const CertificationCard = ({ title, image, credlyLink, certLink }: { 
  title: string; image: string; credlyLink: string; certLink: string; 
}) => {
  return (
    <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-lg p-5 w-full max-w-xs mx-auto">
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="w-32 h-32 object-contain mb-3" />
        <p className="text-center font-semibold text-black">{title}</p>
        
        {/* Buttons Inside Card */}
        <div className="mt-3 flex gap-3">
          <a 
            href={credlyLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-yellow-500 text-black font-bold text-sm px-3 py-1 rounded border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400"
          >
            Credly
          </a>
          <a 
            href={certLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-500 text-white font-bold text-sm px-3 py-1 rounded border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-400"
          >
            View Cert
          </a>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="mx-auto py-12 px-4">
      <h2 id="hackerText" className="md:text-[48px] lg:text-[48px] sm:text-[20px] font-bold text-center mb-12">
        Certifications
      </h2>
      
      {/* Grid for Certification Cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {certifications.slice(0, showAll ? certifications.length : 3).map((cert) => (
          <CertificationCard key={cert.id} {...cert} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
  <button 
    onClick={() => setShowAll(!showAll)} 
    className="flex items-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-95"
  >
    <span 
      className={`transition-transform duration-300 ${showAll ? "rotate-180" : "rotate-0"}`}
    >
      {showAll ? <FaChevronUp /> : <FaChevronDown />}
    </span>
  </button>
</div>

    </div>
  );
};

export default Certifications;
