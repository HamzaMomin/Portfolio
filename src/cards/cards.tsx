import React from "react";

function CardsContainer({ backgroundcolor, title, zIndex, rotation, marginTop, onClick }) {
    return (
        <div
            className={`flex sm:w-[150px] sm:h-[180px] md:w-[200px] md:h-[250px] relative  p-4  rounded-[40px] border-[2px] border-black  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer font-[Lexend Mega]  `}
            style={{
                backgroundColor: backgroundcolor,
                zIndex: zIndex,
                transform: rotation ? `rotate(${rotation}deg)` : "none",
                marginTop: marginTop,

            }}
            onClick={onClick}

        >
            <h1 className=" font-bold text-black text-center cursor-pointer sm:text-[12px] md:text-[20px] font-[Lexend Mega] ">{title}</h1>

        </div>
    );
}

export default CardsContainer;
