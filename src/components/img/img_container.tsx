import React from "react";
import Hamza from "../../assets/Me.png";

function ImageContainer() {

  return (

    
        <div className="flex justify-start items-start p-4 ">
            <div className="flex flex-col justify-center items-center text-wrap bg-[#F4D738] md:p-4 md:mb-4 w-[157px] h-[200px] sm:w-[135px] sm:h-[200px] md:w-[200px] md:h-[250px] border-2 rounded-lg border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ">
           <img src={Hamza} alt="Me" className="p-2 "/>
           <h1 className="text-black font-[Lexend Mega] sm:text-[12px] md:text-[20px] md:mb-4 font-bold">Hamza Momin</h1>
            </div>
        </div>
    

  )

}

export default ImageContainer;