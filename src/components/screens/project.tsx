import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function ProjectCard({ number, borderColor }) {
  return (
    <div className={`rounded-lg overflow-hidden border-4 ${borderColor} flex flex-col`}>
      <div className="bg-black h-48 w-full"></div>
      <div className="bg-yellow-300 p-4 flex justify-center items-center">
        <p className="font-bold text-lg">Project {number}</p>
      </div>
    </div>
  );
}

export default function CenteredSwiper({ isDarkBackground = false }) {
  const textColor = isDarkBackground ? "text-white" : "text-black";
  
  return (
    <div className="flex flex-col justify-center items-center mt-20 px-4 max-w-4xl mx-auto ">

      
      <div className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            
          }}
          breakpoints={{
            440: {
              
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full pb-12"
        >
          <SwiperSlide>
            <ProjectCard number={1} borderColor="border-black" />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard number={2} borderColor="border-black" />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard number={3} borderColor="border-black" />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard number={4} borderColor="border-black" />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard number={5} borderColor="border-black" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}