import React from "react";

function CardsContainer({ backgroundcolor, title, zIndex, rotation, marginTop, onClick }) {
    return (
     
          <div
            className={`flex  text-wrap w-[120px] h-[160px] sm-max:w-[120px] sm-max::h-[160px] md-range:w-[200px] md-range:h-[250px] lg-range:w-[200px] lg-range:h-[250px] xl-min:w-[200px] xl-min:h-[250px] 2xl:w-[200px] 2xl:h-[250px] relative  p-4  rounded-[40px] border-[2px] border-black  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer font-[Lexend Mega]  `}
            style={{
                backgroundColor: backgroundcolor,
                zIndex: zIndex,
                transform: rotation ? `rotate(${rotation}deg)` : "none",
                marginTop: marginTop,

            }}
            onClick={onClick}

        >
            <h1 className=" font-bold text-black text-center cursor-pointer sm-max:text-[12px] md-range:text-[20px] font-[Lexend Mega] ">{title}</h1>

        </div>
      
    );
}

export default CardsContainer;
