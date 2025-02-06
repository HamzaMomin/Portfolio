import React from "react";
import ImageContainer from "./img/img_container";
import { motion } from "motion/react"

function MainContainer({ isDarkBackground }) {

  return (

    <div className="flex justify-center items-center mt-12 ">

      <motion.div className={`main-container z-10 sm-max:mt-16 md-range:mt-48 sm-max:w-[350px] sm-max:h-[300px] md-range:w-[900px] md-range:h-[370px] lg-range:w-[900px] lg-range:h-[370px] px-4 pt-4 bg-[#69D2E7] rounded-xl text-center border-[2px] border-black  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${isDarkBackground ? "bg-card" : " bg-dark-card "}`}

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}

      >

        <div className="flex flex-row  justifiy-content-center items-center">
          <ImageContainer />

          <motion.h1
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{
              y: [0, -10, 0], // Bounce effect
              opacity: 1,

            }}
            transition={{
              duration: 0.3 // Total duration of the animation cycle

            }}

            className={`font-[Lexend Mega]  text-wrap text-transparent bg-clip-text bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] sm:text-[12px] md:text-[28px] px-2 ${isDarkBackground ? " bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]" : "  bg-gradient-to-r from-[#d1d1d1] via-[#979797] to-[#ffffff]"}`}>I am a <b>FrontEnd Developer</b><br /> and <b>Pixel Artist.</b>
          </motion.h1>



        </div>


      </motion.div>

    </div>



  );

}

export default MainContainer;