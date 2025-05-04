import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

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

    <div id='Contact' className="contact-background flex flex-col lg:flex-row justify-center  px-6 lg:px-12 py-48 ">
      
      

      {/* Left Side - Title & Box */}
      <div className="flex flex-col space-y-6 text-center lg:text-left w-full lg:w-auto self-start mt-12">
        <h1 id="hackerText" className="text-4xl font-bold mt-[80px]">Contact Me</h1>
        <p className='mt-[55px] text-2xl  text-center'>
          Want to collaborate or hire me <br />for a project? <br />Just fill out the contact form <br /> and let’s connect!
        </p>

      </div>

      {/* Right Side - Form */}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6 w-full lg:w-auto mt-8 lg:mt-40 lg:ml-16">

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            type="text"
            name="user_name" //use this name same as in template
            id="user_name"
            placeholder="Your Name"
            className="w-full lg:w-48 h-12 px-4 bg-gray-300 text-gray-700 font-semibold  shadow-[4px_4px_0px_#000] border border-black focus:outline-none"
            required
          />
          <input
            name="user_email"
            type="email"
            id="user_email"
            placeholder="Your Email"
            className="w-full lg:w-48 h-12 px-4 bg-gray-300 text-gray-700 font-semibold shadow-[4px_4px_0px_#000] border border-black focus:outline-none"
            required
          />
        </div>

        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          className="w-full lg:w-100 h-32 px-4 py-2 bg-gray-300 text-gray-700 font-semibold  shadow-[4px_4px_0px_#000] border border-black focus:outline-none"
          required
        >

        </textarea>

        <div className="w-full flex justify-end">
          <button disabled={isSubmitting} type="submit" className="cursor-pointer w-full lg:w-40 h-12 bg-yellow-400 text-black font-semibold rounded-full shadow-[4px_4px_0px_#000] border border-black flex items-center justify-center space-x-2 hover:bg-yellow-500 transition">
            <span></span>


            {isSubmitting ? (
              <div className=" animate-spin w-5 h-5 border-t-2 border-white border-solid  mx-auto "></div>
            ) : (
              'Submit 🚀'
            )}
          </button>

        </div>
      </form>
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed z-50 inset-0 flex justify-center items-center bg-white text-black">
          <div className="bg-[#FFDE59] border-4 border-black px-8 py-6 max-w-sm w-full mx-4 shadow-[8px_8px_0px_0px_black]">
            <h2 className="text-3xl font-extrabold uppercase tracking-wider text-center border-b-4 border-black pb-2">
              Form Submitted
            </h2>
            <p className="mt-4 text-xl font-bold text-green-700 bg-white border-2 border-black p-2">
              Successfully!
            </p>
            <div className="mt-6 border-t-4 border-black pt-4 flex justify-center">
              <button className="cursor-pointer bg-black text-white px-6 py-2 border-2 border-black hover:bg-white hover:text-black transition-colors duration-150">
                Close
              </button>
            </div>
          </div>
        </div>

      )}



    </div>





  );
};


export default Contact;
