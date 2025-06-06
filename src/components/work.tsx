import { useRef } from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ExperienceCard {
  title: string;
  company: string;
  role: string;
  date: any;
  des: string[];

}

const experiences: ExperienceCard[] = [
  {
    title: "Junior WordPress Developer",
    role: "Full-time",
    company: "Xgrid.co",
    date: "Sep 2024 - Present",
    des: [
      "Worked on both front-end and back-end using HTML, CSS, Bootstrap, and PHP,",
      "Integrated ACF fields and created dynamic pages",
      "Fixed website issues, optimized performance, and conducted QA testing",
      "Built and customized pages using Elementor and Avada"
    ]
  },
  {
    title: "Internship | Junior WordPress Developer",
    company: "Xgrid.co",
    role: "",
    date: "Mar 2024 - Aug 2024",
    des: [
      "Used Elementor and Avada to design and develop visually appealing web pages",
      "Assisted senior developers in creating custom solutions using HTML, CSS, Bootstrap, and JavaScript",
      "Conducted QA testing and prepared detailed reports on website functionality",
      "Identified bugs and performance issues"
    ]

  },
  {
    title: "Apprenticeship | Game Developer",
    company: "Mindstorm Studios",
    role: "",
    date: "Jun 2023 - Aug 2023",
    des: [
      "Designed and developed FooDefender, a 3D pixel-art tower defense game in one month",
      "Integrated 2D character mechanics into 3D environments",
      "Created strategic gameplay requiring trap placement against enemy waves",
      "Won the Outstanding Art Award at Pakistan’s Largest Game Jam"
    ]

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
    <div id='Work' className="work-background py-4 px-2 ">
      <div className="max-w-4xl mx-auto">

        {/* Mobile-only heading */}
        <span className="block  md:hidden !text-[40px] font-bold mb-2 text-start ">Work</span>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {experiences.map((exp, index) => (
              <div key={index} className="px-2 !md:px-0 ">
                <div className="bg-white rounded-lg p-2 mb-2 border-5 border-black md:mx-24 lg:mx-24 sm:mx-auto">

                  <h3 className="text-xl font-semibold mb-2  text-left bg-[#E9E484] p-4 w-full inline-block rounded-b-4xl border-2">{exp.title}</h3>
                  <p className="text-black text-xl flex items-start">{exp.role}</p>

                  <p className="text-gray-700 flex items-start cursor-pointer">{exp.company} | {exp.date}</p>

                  <ul className="list-disc text-left list-inside mt-4 space-y-2 text-black text-[18px]">
                    {exp.des.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>


                </div>

              </div>
            ))}
          </Slider>
          <div className="flex lg:justify-center lg:items-end md:justify-center md:items-center  sm:justify-end sm:items-end">
            <button
              onClick={previous}
              className="bg-orange-500 border-2  p-2 rounded-full hover:bg-orange-600 transition-colors mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <FaAngleLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="bg-orange-500 border-2  p-2 rounded-full hover:bg-orange-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <FaAngleRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex justify-end items-end mt-4">
            <svg width="503" height="47" viewBox="0 0 503 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 44C80.2556 19.5985 287.813 -19.4606 500 19.5152" stroke="black" stroke-width="5" stroke-linecap="round" />
            </svg>




          </div>


        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

