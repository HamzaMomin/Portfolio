import { useRef } from 'react';
import Slider from 'react-slick';
import { FaAngleLeft  , FaAngleRight  } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ExperienceCard {
  title: string;
  company: string;
  role: string;
  date: any;
  des: string;

}

const experiences: ExperienceCard[] = [
  {
    title: "Junior WordPress Developer",
    role: "Full-time",
    company: "Xgrid.co",
    date: "Sep 2024 - Present",
    des: "As a Junior WordPress Developer, I worked on both the front-end and back-end, using HTML, CSS, Bootstrap, and PHP to integrate ACF fields and create dynamic pages. My responsibilities included fixing website issues, optimizing performance, and conducting QA testing to ensure functionality and responsiveness. I also developed a custom WordPress plugin that automatically assigns alt attributes to images, enhancing SEO and accessibility. Additionally, I built and customized pages using popular page builders like Elementor and Avada to create visually appealing and user-friendly websites.",
  },
  {
    title: "Internship | Junior WordPress Developer",
    company: "Xgrid.co",
    role: "",
    date: "Mar 2024 - Aug 2024",
    des: "Utilized WordPress page builders such as Elementor and Avada to design and develop visually appealing front-end web pages. Collaborated closely with senior developers, assisting in the creation of custom solutions using HTML, CSS, Bootstrap, and JavaScript.Conducted QA testing and prepared detailed reports on website functionality, identifying bugs and performance issues."

  },
  {
    title: "Apprenticeship | Game Developer",
    company: "Mindstorm Studios",
    role: "",
    date: "Jun 2023 - Aug 2023",
    des: "Designed and developed FooDefender, a 3D pixel-art tower defense game, within one month. The game combines 2D character mechanics with immersive 3D environments, challenging players to defend against waves of enemies while strategically placing traps. Earned the prestigious Outstanding Art Award at Pakistan's Largest Game Jam "


  }
];

const WorkExperience = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="bg-[#8389AB] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-[48px] lg:text-[48px] sm:text-[20px] font-bold text-center mb-12 inline-block relative">
          Work Experience
        </h2>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {experiences.map((exp, index) => (
              <div key={index} className="px-4">
                <div className=" bg-white rounded-lg p-6 mb-12 border-2  border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:mx-24 lg:mx-24 sm:mx-auto">

                  <h3 className="text-xl font-semibold mb-2 flex items-start">{exp.title}</h3>
                  <p className="text-black text-xl flex items-start">{exp.role}</p>
                  <p className="text-gray-700 flex items-start">{exp.company} | {exp.date}</p>

                  <p className="text-black text-[18px] flex items-start mt-4 ">{exp.des}</p>


                </div>

              </div>
            ))}
          </Slider>
          <div className="flex justify-end mt-4">
            <button
              onClick={previous}
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <FaAngleLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <FaAngleRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;