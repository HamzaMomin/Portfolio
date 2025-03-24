import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "/src/assets/html.svg",
  "/src/assets/css.svg",
  "/src/assets/bootstrap.svg",
  "/src/assets/tailwind.svg",
  "/src/assets/js.svg",
  "/src/assets/wordpress.svg",
  "/src/assets/aws.svg",
  "/src/assets/php.svg",
];

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1440,
            settings: { slidesToShow: 4 },
          },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 430,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className=" mx-auto flex items-center border-t-4 border-b-4 border-black bg-[#FFEA00] px-6 py-3 ">
    {/* Left Section with Heading and Arrow */}
    <h2 id='hackerText' className=" font-bold flex items-center gap-2 w-1/4 md:text-3xl sm:text-xl">
      Tech Stack <span className="md:text-3xl sm:text-xl">›</span>
    </h2>

    {/* Logo Slider */}
    <div className="w-3/4">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center p-2">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default LogoSlider;
