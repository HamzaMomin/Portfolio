import React, { useState, useRef } from 'react';
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';


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
    <div className="flex justify-center items-center mt-12">
      <motion.div
        className={`main-container z-10 sm-max:mt-16 md-range:mt-48 sm-max:w-[350px] sm-max:h-auto md-range:w-[600px] md-range:h-auto lg-range:w-[600px] lg-range:h-auto xl-min:w-[600px] xl-min:h-auto 2xl:w-[600px] 2xl:h-auto xl-min:mt-[150px] 2xl:mt-[150px] px-6 pt-6 pb-4 bg-[#69D2E7] rounded-xl text-center border-[2px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${isDarkBackground ? "bg-card" : "bg-dark-card"}`}
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
          Let's Connect
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
