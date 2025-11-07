import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {

  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);  // Track form submission state
  const [showSuccess, setShowSuccess] = useState(false);  // To show success popup

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);  // Set submitting state to true
    if (form.current) {
      emailjs
        //Service_id      //YOUR_TEMPLATE_ID              //Your_User_ID(Public ID)
        .sendForm('service_h94tldk', 'template_6w6a00j', form.current, 'FmRbhS07q7oZLbZGT')
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
    <section id='ContactMe'>
      <span className="block font-bold  md:hidden !text-[40px] mb-2 text-end  mr-4 mt-8">Let's Connect</span>

      <div className="relative !sm:mt-6 md:mt-6 lg:mt-6 p-6   md:px-[82px] md:py-[62px] sm:gap-2 md:gap-6 lg:gap-6 bg-gray-200 rounded-3xl max-w-3xl w-full mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-5 border-black flex flex-col md:flex-row items-center justify-between ">

        <div
          className="StarSVG absolute z-[-1]  left-[-16px] top-[-56px] md:left-[-50px] md:top-[-45px]"
        >
          <MailSVG />
        </div>

        {/* Top-Left SVG */}
        <div className="absolute top-4 left-4">
          <CornerSvg />
        </div>

        {/* Top-Right SVG */}
        <div className="absolute top-4 right-4">
          <CornerSvg />
        </div>

        {/* Bottom-Left SVG */}
        <div className="absolute bottom-4 left-4">
          <CornerSvg />
        </div>

        {/* Bottom-Right SVG */}
        <div className="absolute bottom-4 right-4">
          <CornerSvg />
        </div>
        {/* Left Side - Title & Box */}
        <div className="flex flex-col mb-12 text-center lg:text-left lg:w-auto gap-6">
          <p className="mt-4 font-bold text-start">Want to collaborate or hire me for a project?</p>
          <p className='  font-bold text-start'>
            Just fill out the contact form and let’s connect!
          </p>
          <span className="text-blue-950">
            Or send me an email at{' '}
            <a href="mailto:info@hamzamomin.com" className="text-blue-950  hover:text-blue-700">
              info@hamzamomin.com
            </a>
              
              <div className="flex flex-row gap-4 mt-4 justify-center">
            <a
              href="https://www.fiverr.com/s/yvNKYob"
              className="flex justify-center"
              target="_blank"
            >
              <img src='fiverr.svg' alt='fiver' className='w-[40px]' />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01c3ec471b65026c1f?mp_source=share"
              className="flex justify-center "
              target="_blank"
            >
              <img src='upwork.svg' alt='fiver' className='w-[40px] border-1 rounded-full p-1' />
            </a>
          </div>
          </span>
           
        </div>



        {/* Right Side - Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6 w-full lg:w-auto  ">

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
            <button disabled={isSubmitting} type="submit" className="cursor-pointer  mb-8 w-full lg:w-40 h-12 bg-yellow-400 text-black font-semibold rounded-full shadow-[4px_4px_0px_#000] border border-black flex items-center justify-center space-x-2 hover:bg-yellow-500 transition">
              <span></span>


              {isSubmitting ? (
                <div className=" animate-spin w-5 h-5  border-t-2 border-white border-solid  mx-auto "></div>
              ) : (
                'Submit 🚀'
              )}
            </button>


          </div>


        </form>
        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed z-50 inset-0 flex justify-center items-center  text-black">
            <div className="bg-[#FFDE59] border-4 border-black px-8 py-6 max-w-sm w-full mx-4 shadow-[8px_8px_0px_0px_black]">
              <h2 className="text-3xl font-extrabold uppercase tracking-wider text-center border-b-4 border-black pb-2">
                Email Sent......!
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
    </section>




  );
};


export default ContactMe;

function MailSVG() {
  return (
    <svg width="100" height="100" viewBox="0 0 154 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M63.8465 9.48447V29.6895H121.577V130.721L107.079 145.358V44.3206H49.3451V24.1218L63.8465 9.48447Z" fill="#EA563D" />
      <path d="M49.3452 24.1218H32.0244L46.5227 9.48447H63.8466L49.3452 24.1218Z" fill="#EA563D" />
      <path d="M45.3059 59.4242H91.6265V92.8646H45.3059V59.4242Z" fill="#FFB9EC" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M49.3452 44.3237V24.1156H32.0244V145.358H107.076V44.3237H49.3452ZM91.6235 59.4242H45.303V92.8615H91.6235V59.4212V59.4242Z" fill="#89DCFF" />
      <path d="M44.3703 107.066H53.6344" stroke="black" stroke-width="5.37607" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M44.3703 119.419H53.6344" stroke="black" stroke-width="5.37607" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M44.3703 131.771H53.6344" stroke="black" stroke-width="5.37607" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M63.828 107.066H73.0921" stroke="black" stroke-width="5.37607" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M63.828 119.419H73.0921" stroke="black" stroke-width="5.37607" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M63.828 131.771H73.0921" stroke="black" stroke-width="5.37607" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M82.3562 107.066H91.6203" stroke="black" stroke-width="5.37607" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M82.3562 119.419H91.6203" stroke="black" stroke-width="5.37607" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M82.3562 131.771H91.6203" stroke="black" stroke-width="5.37607" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M49.3452 24.1218V44.3269H107.076V145.358H32.0244V24.1218H49.3452Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
      <path d="M63.8465 9.48447V29.6895L49.3451 44.3268V24.1187L63.8465 9.48447Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
      <path d="M49.3452 24.1218H32.0244L46.5227 9.48447H63.8466L49.3452 24.1218Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
      <path d="M45.3059 59.4242H91.6265V92.8646H45.3059V59.4242Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
      <path d="M63.8465 29.6957H121.577L107.079 44.333H49.3451L63.8465 29.6957Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
      <path d="M121.571 29.6957V130.727L107.073 145.358V44.3299L121.571 29.6926V29.6957Z" stroke="black" stroke-width="5.37607" stroke-linejoin="round" />
    </svg>





  );
}


function CornerSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4999 1.45837L13.1249 13.125L1.45825 17.5L13.1249 21.875L17.4999 33.5417L21.8749 21.875L33.5416 17.5L21.8749 13.125L17.4999 1.45837Z" fill="black" />
    </svg>
  );
}