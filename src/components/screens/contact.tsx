import React, { useState, useRef } from 'react';
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';
//@ts-ignore
import Fiverr from "@/assets/Fiverr.png";
//@ts-ignore
import Upwork from "@/assets/Upwork.png";
//@ts-ignore
import Linkedin from "@/assets/Linkedin.png";
//@ts-ignore
import Star from "@/assets/Star.svg";
function ContactUs({ isDarkBackground }) {

  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);  // Track form submission state
  const [showSuccess, setShowSuccess] = useState(false);  // To show success popup

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);  // Set submitting state to true

    if (form.current) {
      emailjs
        //Service_id      //YOUR_TEMPLATE_ID              //Your_User_ID(Public ID)
        .sendForm('service_w9jubgr', 'template_6w6a00j', form.current, 'FmRbhS07q7oZLbZGT')
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSubmitting(false);
            setShowSuccess(true);  // Show success popup after submission
            setTimeout(() => {
              setShowSuccess(false);  // Hide success popup after a few seconds
            }, 3000);
          },
          (error) => {
            console.error('FAILED...', error.text);
            setIsSubmitting(false);
          }
        );
    }
  };
  return (
    <div className="flex justify-center items-center md-range:mt-8 sm-max:mt-12 xl-min:mt-12 2xl:mt-12 lg-range:mt-10">
      <img alt="star" src={Star} className="w-[100px] absolute left-[340px] top-[5px] sm-max:w-[50px] sm-max:top-[100px] sm-max:left-[20px] xl-min:left-[620px] xl-min:top-[70px] rotate-animation  " />
      <motion.div
        className={`main-container z-10 sm-max:mt-[45px] md-range:mt-48 sm-max:w-[350px] sm-max:h-auto md-range:w-[600px] md-range:h-auto lg-range:w-[600px] lg-range:h-auto xl-min:w-[600px] xl-min:h-auto 2xl:w-[600px] 2xl:h-auto xl-min:mt-[80px] 2xl:mt-[80px] px-6 pt-6 pb-4 bg-[#69D2E7] rounded-xl text-center border-[2px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${isDarkBackground ? "bg-card" : "bg-[#1e8294]"}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{
            y: [0, -10, 0], // Bounce effect
            opacity: 1,
          }}
          transition={{
            duration: 0.3, // Total duration of the animation cycle
          }}
          className={`font-[Lexend Mega]  text-wrap text-transparent bg-clip-text bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] sm:text-[12px] md:text-[28px] px-2 ${isDarkBackground ? " bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]" : "  bg-gradient-to-r from-[#d1d1d1] via-[#979797] to-[#ffffff]"}`}
        >
          <div className='flex flex-row justify-evenly '>
          <a href='https://www.linkedin.com/in/hamzamomin/' target='on_blank'><img alt='Linkedin' className='w-[60px] h-[60px] ' src={Linkedin} /></a>
          <a href='https://www.upwork.com/freelancers/~01c3ec471b65026c1f' target='on_blank'><img alt='Upwork' className='w-[60px] h-[60px] ' src={Upwork} /></a>
          <a href='https://www.fiverr.com/hamzamomin1' target='on_blank'><img alt='Fiverr' className='w-[70px] h-[70px] ' src={Fiverr} /></a>
          <a href="https://github.com/HamzaMomin/mynotesapp" target="on_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="w-[60px] h-[60px]  cursor-pointer ">   <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
          </a>
          </div>
         
        </motion.h1>

          
        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 mt-4 items-center">
          <input
            type="text"
            name="user_name" //use this name same as in template
            placeholder="Your Good Name"
            id="user_name"
            aria-label="Name"
            className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#203A43] text-black "
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            id="user_email"
            aria-label="Email"
            className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#203A43]  text-black"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            id="message"
            aria-label="Message"
            className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#203A43] h-[120px] resize-none  text-black"
            required
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-2 bg-[#203A43] text-white  rounded-lg hover:bg-[#2C5364] transition border-2 border-[#152830] py-2  w-[250px] ${isSubmitting ? 'cursor-wait' : ''}`}
            disabled={isSubmitting}
          >


            {isSubmitting ? (
              <div className="animate-spin w-5 h-5 border-t-2 border-white border-solid rounded-full mx-auto"></div>
            ) : (
              'Submit'
            )}
          </motion.button>
        </form>


      </motion.div>
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed z-10 inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg  text-center border-[2px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-bold text-green-600">Form Submitted Successfully!</h2>

          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
