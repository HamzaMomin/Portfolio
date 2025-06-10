import { useEffect, useState } from "react";
export default function AboutMe() {

  const targetText = "< Hamza Momin />";
  const hackerChars = "!@#$%^&*()_+{}:<>?~";
  const [displayText, setDisplayText] = useState<string>(targetText);

  useEffect(() => {
    const runAnimation = () => {
      let iterations = 0;
      const interval = setInterval(() => {
        setDisplayText(() =>
          targetText
            .split("")
            .map((char, index) => {
              if (index < iterations) return char;
              return hackerChars[Math.floor(Math.random() * hackerChars.length)];
            })
            .join("")
        );

        if (iterations >= targetText.length) {
          clearInterval(interval);
          setTimeout(runAnimation, 4000); // Restart animation after 4s
        }
        iterations += 1;
      }, 100);
    };

    runAnimation(); // Start animation initially

    return () => { }; // Cleanup function (not needed since we're looping)

  }, []);



  const handleViewResume = () => {
    window.open("/Hamza Momin.pdf", "_blank");
  };


  return (
    <section id="About">
      {/* Mobile-only heading */}
      <span className="block font-bold  md:hidden !text-[40px] text-end ">About Me</span>
      <div className="relative  mt-12 p-6 md:px-[82px] md:py-[82px]  bg-gray-200 rounded-3xl max-w-3xl w-full mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-5 border-black flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Background SVG - Responsive, always top left */}
        <div
          className="StarSVG absolute z-[-1] left-[-16px] top-[-56px] md:left-[-50px] md:top-[-45px]"
        >
          <BackSvg />
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

        {/* Left Column */}
        <div className="flex-1 w-full text-center md:text-center">
          <h2 id="hackerText" className="text-2xl font-bold mb-4">{displayText}</h2>
          <p className="text-black text-xl">
            A Front-end Developer<br />
            with a knack for<br />
            Pixel Art
          </p>

          <div className="flex flex-row mt-4 w-fit mx-auto gap-4">
            <a
              href="https://github.com/HamzaMomin"
              className="flex justify-center"
              target="_blank"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/hamzamomin/"
              className="flex justify-center"
              target="_blank"
            >
              <Linkedin />
            </a>
          </div>

          <div className="flex flex-row mt-4 w-fit mx-auto">
            <button className="text-xl font-black py-2 px-4 border-3 bg-[#E5D847] rounded-full cursor-pointer" >Let’s Connect</button>
          </div>


        </div>

        {/* Right Column */}
        <div className="flex-1 w-full flex flex-col items-center justify-center md:justify-end md:items-center">
          <div className="relative group">
            <img
              src="/Me.webp"
              alt="Hamza"
              className="w-40 h-40 object-cover rounded-full transition-all duration-300 ease-in-out group-hover:scale-250 z-10 relative "
            />
            <div className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-0  "></div>
          </div>
          <button className=" mt-8 text-[14px] font-medium py-2 px-4 border-3 bg-[#D55E5E] rounded-full cursor-pointer" onClick={handleViewResume}>Resume </button>

        </div>



      </div>
      <div
        className="flex justify-center items-center md:fixed md:bottom-[-70px] md:right-[30vh] "

      >
        <BackSvg2 />
      </div>

    </section>
  );
}

// Reusable SVG Component
function CornerSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4999 1.45837L13.1249 13.125L1.45825 17.5L13.1249 21.875L17.4999 33.5417L21.8749 21.875L33.5416 17.5L21.8749 13.125L17.4999 1.45837Z" fill="black" />
    </svg>
  );
}

function BackSvg() {
  return (
    <svg width="100" height="100" viewBox="0 0 117 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49.5118 28.352L52.1126 30.5032L53.4123 27.3882L61.5973 7.77482L67.6072 27.6832L68.6105 31.006L71.4443 29.0023L88.8589 16.6878L82.9524 36.7917L81.9509 40.1993L85.497 39.9922L106.565 38.764L90.6291 52.8132L87.988 55.1419L91.0573 56.8679L109.22 67.0823L88.1815 70.6126L84.8125 71.1778L86.3699 74.2177L95.8727 92.7661L76.4341 84.524L73.3407 83.2128L72.973 86.5524L70.6636 107.541L59.1256 90.1841L57.2354 87.3392L55.095 90.0027L41.7331 106.633L41.698 85.7946L41.6922 82.2733L38.3698 83.4394L18.3245 90.4769L29.6931 72.6957L31.6059 69.7037L28.1435 68.9121L7.7157 64.2413L26.9726 55.0646L30.1056 53.5715L27.6962 51.0728L13.2629 36.0997L34.376 38.5443L37.7288 38.9327L37.1231 35.6124L33.3602 14.9916L49.5118 28.352Z" fill="#FF4911" stroke="black" stroke-width="5" />
    </svg>


  );
}

function BackSvg2() {
  return (

    <svg className="BackSVG2" width="200" height="200" viewBox="0 0 536 54" fill="none" xmlns="http://www.w3.org/2000/svg">

      <path d="M3.0282 45.5075C9.32792 36.468 18.7804 23.8211 28.3067 18.5525" stroke="black" stroke-width="5" stroke-miterlimit="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M37.4037 43.1163C46.4721 31.9114 56.7951 19.7108 67.787 10.894" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M79.172 38.053C88.0063 28.1238 96.9027 18.5587 106.504 9.61304" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M113.547 40.1093C123.093 28.5229 133.488 15.5683 145.441 7.05762" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M148.431 40.2814C156.447 30.2338 165.357 19.0082 175.016 10.894" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M189.691 37.0612C198.008 25.5946 207.694 11.7733 219.381 4.5" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M217.182 39.7881C223.531 30.4237 230.919 18.9609 239.692 12.1619" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M252.078 41.3146C259.957 31.3765 267.976 21.0024 276.848 12.1619" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M286.454 41.7413C294.345 31.83 301.84 21.0606 310.656 12.1619" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M313.957 44.3281C322.654 32.9437 331.781 22.4018 341.493 12.1619" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M341.98 41.8317C350.426 31.5002 358.602 20.1403 368.023 10.8928" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M376.354 42.7417C382.777 33.9749 391.153 21.558 400.262 16.0972" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M403.454 44.246C410.724 32.6353 420.751 19.104 431.916 12.0081" stroke="black" stroke-width="5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />

    </svg>


  );

}



// Buttons

function GitHub() {
  return (

    <svg width="25" height="25" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.76805 32.306C6.16805 31.906 5.65205 31.396 5.04805 30.674C4.73457 30.2902 4.4239 29.9042 4.11605 29.516C3.19005 28.366 2.60605 27.834 2.00405 27.616C1.75075 27.5321 1.51678 27.3985 1.31593 27.2228C1.11508 27.0472 0.951397 26.8332 0.834526 26.5933C0.717655 26.3535 0.649957 26.0926 0.635418 25.8262C0.620879 25.5598 0.659793 25.2932 0.749869 25.042C0.839945 24.7909 0.979363 24.5603 1.15991 24.3639C1.34046 24.1674 1.55849 24.0091 1.80116 23.8982C2.04383 23.7873 2.30624 23.7261 2.57293 23.7181C2.83962 23.7102 3.10521 23.7557 3.35405 23.852C4.85805 24.392 5.87605 25.322 7.24805 27.028C7.06005 26.794 7.92805 27.882 8.11405 28.106C8.49405 28.56 8.77405 28.836 8.99405 28.982C9.40205 29.256 10.17 29.374 11.294 29.262C11.342 28.498 11.482 27.756 11.698 27.072C5.76205 25.62 2.40205 21.792 2.40205 14.28C2.40205 11.8 3.14205 9.56796 4.51805 7.69596C4.08205 5.90796 4.14805 3.74596 5.12205 1.31196C5.23258 1.03663 5.40299 0.789341 5.62092 0.588016C5.83885 0.386692 6.09884 0.236374 6.38205 0.147959C6.54405 0.0999591 6.63605 0.0779592 6.79805 0.0539592C8.40405 -0.194041 10.672 0.393959 13.628 2.24596C15.3895 1.83358 17.1929 1.62686 19.002 1.62996C20.826 1.62996 22.64 1.83796 24.37 2.24596C27.324 0.379959 29.598 -0.208041 31.214 0.0539592C31.3847 0.0806259 31.53 0.113959 31.65 0.153959C31.9277 0.245512 32.1819 0.396827 32.3948 0.597245C32.6076 0.797663 32.774 1.04231 32.882 1.31396C33.856 3.74596 33.922 5.90596 33.486 7.69396C34.868 9.56596 35.602 11.784 35.602 14.28C35.602 21.794 32.254 25.61 26.318 27.064C26.568 27.894 26.698 28.82 26.698 29.824C26.698 31.154 26.694 32.422 26.684 33.844C26.684 34.224 26.68 34.632 26.674 35.256C27.1232 35.3537 27.525 35.6032 27.8118 35.9625C28.0986 36.3218 28.2529 36.7689 28.2487 37.2286C28.2444 37.6883 28.082 38.1325 27.7886 38.4864C27.4953 38.8404 27.089 39.0825 26.638 39.172C24.358 39.626 22.67 38.108 22.67 36.122L22.674 35.228L22.684 33.818C22.694 32.404 22.7 31.144 22.7 29.824C22.7 28.43 22.332 27.52 21.848 27.102C20.526 25.962 21.196 23.794 22.93 23.6C28.862 22.934 31.602 20.636 31.602 14.28C31.602 12.37 30.978 10.792 29.776 9.47196C29.5231 9.19384 29.3536 8.85006 29.2871 8.48004C29.2206 8.11002 29.2598 7.72875 29.4 7.37996C29.732 6.55196 29.872 5.46596 29.59 4.15196L29.57 4.15796C28.588 4.43596 27.35 5.03796 25.854 6.05596C25.6128 6.21967 25.3387 6.32866 25.0509 6.3753C24.7631 6.42194 24.4686 6.4051 24.188 6.32596C22.5 5.8579 20.7558 5.62305 19.004 5.62796C17.224 5.62796 15.46 5.86396 13.82 6.32796C13.5408 6.40617 13.2478 6.42271 12.9616 6.37643C12.6753 6.33016 12.4025 6.22217 12.162 6.05996C10.656 5.04596 9.41405 4.44596 8.42205 4.16596C8.13605 5.47196 8.27805 6.55396 8.60805 7.37996C8.74766 7.72867 8.78625 8.10965 8.7194 8.47928C8.65255 8.84891 8.48296 9.19224 8.23005 9.46996C7.03605 10.78 6.40405 12.386 6.40405 14.278C6.40405 20.622 9.14605 22.934 15.048 23.598C16.778 23.792 17.452 25.952 16.138 27.094C15.752 27.43 15.278 28.558 15.278 29.822V36.122C15.278 38.092 13.61 39.572 11.358 39.178C10.9016 39.0978 10.4871 38.8616 10.1855 38.5098C9.88385 38.1579 9.71378 37.7122 9.70433 37.2489C9.69488 36.7855 9.84665 36.3332 10.1337 35.9694C10.4207 35.6055 10.8252 35.3526 11.278 35.254V33.274C9.45805 33.396 7.95605 33.098 6.77005 32.304" fill="black" />
    </svg>

  );
}


function Linkedin() {
  return (

    <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 16C35.1826 16 38.2348 17.2643 40.4853 19.5147C42.7357 21.7652 44 24.8174 44 28V42H36V28C36 26.9391 35.5786 25.9217 34.8284 25.1716C34.0783 24.4214 33.0609 24 32 24C30.9391 24 29.9217 24.4214 29.1716 25.1716C28.4214 25.9217 28 26.9391 28 28V42H20V28C20 24.8174 21.2643 21.7652 23.5147 19.5147C25.7652 17.2643 28.8174 16 32 16Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 18H4V42H12V18Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


  );
}

