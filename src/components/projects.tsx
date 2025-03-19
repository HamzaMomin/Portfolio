import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight, FaChevronDown } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ExperienceCard {
    ProjectTitle: string;
    ProjectType: string;
    ProjectURL: string;
    des: string[];
    background: string;
}

const experiences: ExperienceCard[] = [
    {
        ProjectTitle: "phostrack.com",
        ProjectType: "Project Type: Freelance",
        ProjectURL: "https://phostrack.com/",
        des: [
            "Worked on both front-end and back-end using HTML, CSS, Bootstrap, and PHP",
            "Integrated ACF fields and created dynamic pages",
            "Fixed website issues, optimized performance, and conducted QA testing",
            "Developed a custom WordPress plugin to automatically assign alt attributes to images for SEO & accessibility",
            "Built and customized pages using Elementor and Avada"
        ],
        background: "/src/assets/phostrack.png"
    },
    {
        ProjectTitle: "Internship | Junior WordPress Developer",
        ProjectType: "Xgrid.co",
        ProjectURL: " ",
        des: [
            "Used Elementor and Avada to design and develop visually appealing web pages",
            "Assisted senior developers in creating custom solutions using HTML, CSS, Bootstrap, and JavaScript",
            "Conducted QA testing and prepared detailed reports on website functionality",
            "Identified bugs and performance issues"
        ],
        background: "/path/to/image2.jpg"
    }
];

const WorkExperience = () => {
    const sliderRef = useRef<Slider>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    const next = () => {
        sliderRef.current?.slickNext();
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
        <div className="bg-[#8389AB] py-12 px-4 relative border-2 border-black">
            <div className="max-w-7xl mx-auto">
                <h2 id='hackerText' className="md:text-[48px] lg:text-[48px] sm:text-[20px] font-bold text-center mb-12 relative">
                    Projects
                </h2>

                <div className="relative">
                    <Slider ref={sliderRef} {...settings}>
                        {experiences.map((exp, index) => (
                            <div key={index} className="px-4">
                                <div className="bg-white rounded-lg p-6 mb-12 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:mx-24 lg:mx-24 sm:mx-auto relative">
                                    <div className="w-full h-64 bg-cover bg-center rounded-t-lg border-b-2 border-black" style={{ backgroundImage: `url(${exp.background})` }}></div>

                                    <div className="flex items-center justify-between p-4">
                                        <div>
                                            <h3 className="text-xl text-black  mt-2 font-bold flex item-start">{exp.ProjectTitle}</h3>
                                            <p className=' text-gray-900  mt-2  flex item-start'><i>{exp.ProjectType}</i></p>
                                            <a href={exp.ProjectURL} target="_blank" rel="noopener noreferrer" className=" text-orange-600 hover:text-orange-800 font-semibold mt-2 flex items-start cursor-pointer">
                                                View Project
                                            </a>
                                        </div>
                                        <button
                                            className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                            onClick={() => toggleDescription(index)}
                                        >
                                            <FaChevronDown className={`w-6 h-6 text-white transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>

                                    {expandedIndex === index && (
                                        <ul className="list-disc text-left list-inside mt-4 space-y-2 text-black text-[18px] bg-white p-4 rounded-lg">
                                            {exp.des.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className=" top-1/2 left-0 right-0 flex justify-between px-8">
                        <button
                            onClick={previous}
                            className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
