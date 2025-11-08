import { useRef } from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Github, ExternalLink } from 'lucide-react';


interface ProjectCard {
  ProjectName: string;
  color: string;
  des: string;
  Tags: string[];
  image: string;
  viewProject: string;
  demo: string;
}


const project: ProjectCard[] = [
  {
    ProjectName: "Phostrack",
    color: "bg-[#FFDFB3]",
    des: "A Mobile app and landing page for phosphorus tracking.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    Tags: ["React", "TypeScript", "Tailwind CSS", "Cloudflare", "Hugging Face"],
    viewProject: "https://github.com/HamzaMomin/phostrack.com",
    demo: "https://phostrack.com/",
  },
  {
    ProjectName: "Poistivus",
    color: "bg-[#D6FFB3]",
    des: "Convert a Figma design to a frontend page using CSS, Bootstrap, and a JavaScript.",
    image: "https://images.pexels.com/photos/18096281/pexels-photo-18096281/free-photo-of-pexels-website-open-on-a-laptop-screen.jpeg?auto=compress&cs=tinysrgb&w=1102&h=750&dpr=1",
    Tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma"],
    viewProject: "https://github.com/HamzaMomin/Poistivus",
    demo: "https://hamzamomin.github.io/Poistivus/",
  },
  {
    ProjectName: "Real Estate Insignia",
    color: "bg-[#E9B3FF]",
    des: "A mobile app & web based Dashboard for Real Estate Fraud Detection.",
    image: "https://loremflickr.com/800/600/doodle,design?lock=102",
    Tags: ["Flutter", "Firebase", "University Final Year Project"],
    viewProject: "https://github.com/HamzaMomin/Real_Estate_Insignia",
    demo: "https://github.com/HamzaMomin/Real_Estate_Insignia",
  },
  {
    ProjectName: "Gun Lord / Gun Lord Club",
    color: "bg-[#E5E0D8]",
    des: "A collection of Pixeled animated Guns NFTs on Polygon and Ethereum Blockchain.",
    image: "https://images.pexels.com/photos/18096281/pexels-photo-18096281/free-photo-of-pexels-website-open-on-a-laptop-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Tags: ["Python", "Polygon", "ERC-721", "Blockchain", "JSON"],
    viewProject: "https://opensea.io/collection/gunlord",
    demo: "https://opensea.io/collection/gunlordclub",
  },
  {
    ProjectName: "Estac Web Monitoring Landing Page",
    color: "bg-[#DEE791]",
    des: "A landing page for Estac Web Monitoring, a web monitoring service.",
    image: "https://loremflickr.com/800/600/illustration,abstract?lock=103",
    Tags: ["HTML", "CSS", "Bootstrap", "GitHub",],
    viewProject: "https://github.com/HamzaMomin/Web-Monitoring-Landing-Page-Design",
    demo: "https://hamzamomin.github.io/Web-Monitoring-Landing-Page-Design/",
  },
  {
    ProjectName: "Hamza Momin Portfolio",
    color: "bg-[#BADFDB]",
    des: "A personal portfolio website showcasing my projects and skills.",
    image: "https://loremflickr.com/800/600/portfolio,sketch,doodle?lock=106",
    Tags: ["React", "Tailwind CSS", "GitHub","Cloudflare"],
    viewProject: "https://github.com/HamzaMomin/Portfolio",
    demo: "https://hamzamomin.com/",
  },
  {
    ProjectName: "Eureka Webflow Landing Page",
    color: "bg-[#F49BAB]",
    des: "Landing Page Design using Webflow, Figma and Gsap for scroll animations.",
   image: "https://loremflickr.com/800/600/webflow,figma,illustration,doodle?lock=107",
    Tags: ["WebFlow", "Gsap", "Figma"],
    viewProject: "https://eureka-e40f4e.webflow.io/",
    demo: "https://eureka-e40f4e.webflow.io/",
  },
  {
    ProjectName: "Forecaster Webflow Landing Page",
    color: "bg-[#A7AAE1]",
    des: "Full responsive landing page design using Webflow and Figma, and client-first approach.",
   image: "https://loremflickr.com/800/600/webflow,figma,illustration,doodle?lock=107",
    Tags: ["WebFlow", "Responsive layout", "Figma"],
    viewProject: "https://forecaster-870aa6.webflow.io/",
    demo: "https://forecaster-870aa6.webflow.io/",
  }
]


const marqueeItems = [
  "WordPress",
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React JS",
  "Shadcn UI",
  "Elementor",
  "Avada",
  "Wix",
  "AWS",
  "Firebase",
  "Git",
  "GitHub",
  "Email.js",
  "PHP",
  "ACF",
];

const Projects = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    arrows: false, autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 0.95,
          slidesToScroll: 1,
        },
      },

    ],
  };

  return (
  <div id='Projects' className="py-4 px-0 mt-16 sm:mt-16 md:mt-0 lg:mt-0">
      {/* Background SVG */}
      <div
        className="StarSVG absolute z-[-1] right-[0px] top-[235%] md:right-[80px] md:top-[25px] "
      >
        <Svg />
      </div>


  <div className="w-full max-w-none mx-0">
        {/* Mobile heading */}
        <span className="block  md:hidden !text-[40px] font-bold mb-2 text-start mt-8">Projects</span>
        <div className="relative overflow-x-visible">
          <Slider
            ref={sliderRef}
            {...{
              ...settings,
              slidesToShow: 4,
              centerMode: false,
              centerPadding: '0px',
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    centerPadding: '0px',
                  },
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: '0px',
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0px',
                  },
                },
              ],
            }}
          >
            {project.map((exp, index) => (
              <div key={index} className="px-1  ">
                <div
                  className={`rounded-xl  w-[100%] h-[340px] flex flex-col p-2 border-4 border-black ${exp.color}`}
                  style={{ minWidth: 0, margin: 0, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
                >
                  {/* Project Image */}
                  <div className=" overflow-hidden rounded-lg ">
                    <img src={exp.image} alt={exp.ProjectName} className="w-auto h-auto object-cover center" />
                  </div>
                  {/* Project Name */}
                  <h3 className="text-black text-start text-lg font-bold mt-2 mb-1 underline">{exp.ProjectName}</h3>
                  <p className="text-gray-700 text-start text-sm mb-2 font-light">{exp.des}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap justify-start gap-1 mt-2">
                    {exp.Tags.map((tag, i) => {
                      const tagStyles = [
                        { bg: 'bg-pink-200', text: 'text-pink-800', shadow: '#9d174d' },
                        { bg: 'bg-blue-200', text: 'text-blue-800', shadow: '#1e40af' },
                        { bg: 'bg-green-200', text: 'text-green-800', shadow: '#065f46' },
                        { bg: 'bg-yellow-200', text: 'text-yellow-800', shadow: '#854d0e' },
                        { bg: 'bg-purple-200', text: 'text-purple-800', shadow: '#6b21a8' },
                        { bg: 'bg-orange-200', text: 'text-orange-800', shadow: '#9a3412' },
                        { bg: 'bg-red-200', text: 'text-red-800', shadow: '#991b1b' },
                        { bg: 'bg-gray-200', text: 'text-gray-800', shadow: '#1f2937' },
                      ];
                      const style = tagStyles[i % tagStyles.length];
                      return (
                        <span
                          key={i}
                          className={`px-2 py-1 border rounded-full text-xs font-semibold ${style.bg} ${style.text}`}
                          style={{
                            boxShadow: `2px 3px 0px 0px ${style.shadow}`,
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <div className='flex justify-start items-start mt-4 gap-2'>
                    {/* View Project */}
                    <a href={exp.viewProject} target="_blank" rel="noopener noreferrer" className="mt-4 font-bold italic inline-flex text-[12px] bg-[#ffd900] border-2  text-black  px-2 py-2 rounded-full hover:bg-[#F39E60] transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      View Project
                      <Github className="ml-2 w-4 h-4" color='black' />
                    </a>
                    <a href={exp.demo} target="_blank" rel="noopener noreferrer" className="mt-4 font-bold  italic inline-flex text-[12px] bg-[#f85d58] border-2  text-black  px-2 py-2 rounded-full hover:bg-[#f79494] transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      Demo
                      <ExternalLink className='ml-2 w-4 h-4' color='black' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* Navigation */}
          <div className="flex justify-center items-end mt-4 lg:justify-end md:justify-end mr-6">
            <button
              onClick={previous}
              className="bg-orange-500 border-2 p-2 rounded-full hover:bg-orange-600 transition-colors mr-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              <FaAngleLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="bg-orange-500 border-2 p-2 rounded-full hover:bg-orange-600 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              <FaAngleRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="sm:relative md:fixed md:bottom-0 md:left-0 md:right-0 flex !overflow-hidden !mt-6 bg-black text-white ">
        <div className="max-w-full animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (

            <span key={index} className="m-2 p">
              •
              {item}
              •
            </span>
          ))}
        </div>
      </div>

    </div>


  );
};

export default Projects;



function Svg() {
  return (
    <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.1455 37.4062C53.3327 36.2622 69.9009 41.8774 82.2725 54.249C94.6435 66.6203 100.257 83.1874 99.1133 99.374C82.9266 100.518 66.3596 94.9043 53.9883 82.5332C41.6167 70.1616 36.0014 53.5934 37.1455 37.4062Z" fill="#3BB3BD" stroke="black" strokeWidth="4" />
      <path d="M116.988 54.249C129.36 41.8777 145.926 36.2625 162.113 37.4062C163.257 53.5934 157.644 70.1616 145.272 82.5332C132.901 94.9048 116.333 100.518 100.146 99.374C99.0017 83.1872 104.617 66.6204 116.988 54.249Z" fill="#BCA47F" stroke="black" strokeWidth="4" />
      <path d="M37.1455 161.635C53.3327 162.779 69.9009 157.164 82.2725 144.792C94.6435 132.421 100.257 115.854 99.1133 99.667C82.9266 98.5232 66.3596 104.137 53.9883 116.508C41.6167 128.879 36.0014 145.448 37.1455 161.635Z" fill="#FFC700" stroke="black" strokeWidth="4" />
      <path d="M116.988 144.792C129.36 157.163 145.926 162.779 162.113 161.635C163.257 145.448 157.644 128.879 145.272 116.508C132.901 104.136 116.333 98.5229 100.146 99.667C99.0017 115.854 104.617 132.421 116.988 144.792Z" fill="#BC7F7F" stroke="black" strokeWidth="4" />
    </svg>

  );
}
// ...existing code...