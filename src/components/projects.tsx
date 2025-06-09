import { useRef } from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Github , ExternalLink } from 'lucide-react';


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
    image: " ",
    Tags: ["React", "TypeScript", "Tailwind CSS", "Cloudflare", "Hugging Face"],
    viewProject: "https://github.com/HamzaMomin/phostrack.com",
    demo: "https://phostrack.com/",
  },
  {
    ProjectName: "Real Estate Insignia",
    color: "bg-[#E9B3FF]",
    des: "A mobile app & web based Dashboard for Real Estate Fraud Detection.",
    image: " ",
    Tags: ["Flutter", "Firebase", "University Final Year Project"],
    viewProject: "https://github.com/HamzaMomin/Real_Estate_Insignia",
    demo: "https://github.com/HamzaMomin/Real_Estate_Insignia",
  },
  {
    ProjectName: "Project 3",
    color: "bg-[#D6FFB3]",
    des: "Testing Projects",
    image: " ",
    Tags: ["Python", "Data", "ML"],
    viewProject: "https://example.com/project1",
    demo: "",
  }
]

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
          slidesToShow: 0.9,
          slidesToScroll: 1,
        },
      },

    ],
  };

  return (
    <div id='Projects' className=" py-4 px-2 mt-16 sm:mt-16 md:mt-0 lg:mt-0">
      {/* Background SVG - Responsive, always top left */}
      <div
        className="StarSVG absolute z-[-1] right-[0px] top-[235%] md:right-[80px] md:top-[25px]"
      >
        <Svg />
      </div>


      <div className="max-w-4xl mx-auto">
        {/* Mobile-only heading */}

        <span className="block  md:hidden !text-[40px] font-bold mb-2 text-start ">Projects</span>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {project.map((exp, index) => (
              <div key={index} className="px-2 !md:px-0">
                <div className={`rounded-lg w-[320px] h-[350px] flex flex-col  p-2 border-4 border-black md:mx-24 lg:mx-24 sm:mx-auto  ${exp.color}`}
                >
                  {/* Project Image */}
                  <img src={exp.image} alt={exp.ProjectName} className="w-full  h-32 object-cover rounded-t-lg mb-2 border-b-2 border-black" />
                  {/* Project Name */}
                  <h3 className="text-black text-start text-lg font-bold mt-2 mb-1">{exp.ProjectName}</h3>
                  {/* Project Description (if you want to add, add a 'desc' field to ProjectCard) */}
                  <p className="text-gray-700 text-start text-sm mb-2 font-light">{exp.des}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap justify-start gap-2 mt-2">
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
                    {/* View Project Button */}
                    <a href={exp.viewProject} target="_blank" rel="noopener noreferrer" className="mt-4 font-bold italic inline-flex text-[12px] bg-[#ffd900] border-2  text-black  px-2 py-2 rounded-full hover:bg-[#F39E60] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    
                      View Project     
                      <Github className="ml-2 w-4 h-4" color='black'/>
                    </a>
                
                    <a href={exp.demo} target="_blank" rel="noopener noreferrer" className="mt-4 font-bold  italic inline-flex text-[12px] bg-[#f85d58] border-2  text-black  px-2 py-2 rounded-full hover:bg-[#f79494] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      Demo
                      <ExternalLink className='ml-2 w-4 h-4' color='black'/>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* Navigation Buttons */}
          <div className="flex lg:justify-end lg:items-end md:justify-end md:items-end sm:justify-center sm:items-end justify-center items-end mt-4">
            <button
              onClick={previous}
              className="bg-orange-500 border-2 p-2 rounded-full hover:bg-orange-600 transition-colors mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <FaAngleLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="bg-orange-500 border-2 p-2 rounded-full hover:bg-orange-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <FaAngleRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>



    </div>


  );
};

export default Projects;



function Svg() {
  return (
    <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.1455 37.4062C53.3327 36.2622 69.9009 41.8774 82.2725 54.249C94.6435 66.6203 100.257 83.1874 99.1133 99.374C82.9266 100.518 66.3596 94.9043 53.9883 82.5332C41.6167 70.1616 36.0014 53.5934 37.1455 37.4062Z" fill="#3BB3BD" stroke="black" stroke-width="4" />
      <path d="M116.988 54.249C129.36 41.8777 145.926 36.2625 162.113 37.4062C163.257 53.5934 157.644 70.1616 145.272 82.5332C132.901 94.9048 116.333 100.518 100.146 99.374C99.0017 83.1872 104.617 66.6204 116.988 54.249Z" fill="#BCA47F" stroke="black" stroke-width="4" />
      <path d="M37.1455 161.635C53.3327 162.779 69.9009 157.164 82.2725 144.792C94.6435 132.421 100.257 115.854 99.1133 99.667C82.9266 98.5232 66.3596 104.137 53.9883 116.508C41.6167 128.879 36.0014 145.448 37.1455 161.635Z" fill="#FFC700" stroke="black" stroke-width="4" />
      <path d="M116.988 144.792C129.36 157.163 145.926 162.779 162.113 161.635C163.257 145.448 157.644 128.879 145.272 116.508C132.901 104.136 116.333 98.5229 100.146 99.667C99.0017 115.854 104.617 132.421 116.988 144.792Z" fill="#BC7F7F" stroke="black" stroke-width="4" />
    </svg>

  );
}



