import Slider from 'react-slick';
import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const pixelArtImages = [
  "/Pixel Lord.png",
  "/Alien pistol.gif",
  "/g17.gif",
  "/hand arm.gif",
  "/hand long finger.gif",
  "/keke.gif",
  "/M1911.gif",
  "/ukraiane hand.gif"

];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 2,
      },
    },
  ],
};

// No props needed
const PixelArt = ({ image }: { image: string }) => {
  return (
    <div className="cards bg-amber-50 rounded-3xl mt-8 p-2 w-[320px] h-[270px] flex flex-col justify-between mx-auto border-4 border-black mb-8 sm:mb-0">
      <img src={image} alt="Pixel Art" className="w-full h-full object-cover rounded-lg" />
    </div>
  );
};

export default function Certs() {
  const sliderRef = useRef<any>(null);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  return (
    <div className="max-w-6xl mx-auto">
      <style>{`
        .slick-dots li {
          margin: 0 12px !important;
        }
        .slick-dots li button:before {
          margin-top: 42px !important;
        }
      `}</style>

      <span className="block md:hidden !text-[40px] font-bold mb-2 text-end mr-4 mt-8">Art</span>

      <Slider ref={sliderRef} {...settings}>
        {pixelArtImages.map((img, index) => (
          <div key={index} className="flex justify-center ">
            <PixelArt image={img} />
          </div>
        ))}
      </Slider>

      <div className="hidden sm:flex w-[50px] justify-end items-end">
        {popeye()}
      </div>

      <div className="flex lg:justify-start lg:items-end md:justify-start md:items-center mt-4 sm:justify-end sm:items-end justify-center items-end">
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
  );
}


function popeye(){
  return(
    <div className="fixed bottom-0 right-0 z-50 p-2">
      <img src="pop eye.gif" alt='alien named pop eye' />
    </div>
  );
}