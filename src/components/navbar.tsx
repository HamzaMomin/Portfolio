import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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


   // Scroll to a section by ID without showing #id in the URL
   const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile nav after click
    }
  };

  return (
    
    <nav>
      <div className="container mx-auto px-4 flex justify-between items-center mt-4">

        <h1 id="hackerText" className="bg-gradient-to-r  from-gray-600 to-gray-900 bg-clip-text text-transparent md:text-[48px] sm:text-[20px] lg:text-[28px] font-bold "> {displayText}</h1>

        {/* Mobile Menu Button */}
        <button
          className="text-black text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <ul className={`
          md:flex md:space-x-6 md:static md:w-auto
          absolute top-16 left-0 w-full md:bg-transparent md:flex-row
          z-10
          space-y-3 md:space-y-0
          transition-all duration-300 ease-in-out
          ]
          ${isOpen ? "flex flex-col items-center  backdrop-blur-md bg-white/30"  : "hidden"} md:block
        `}>

          <li  onClick={() => handleScroll("Work")}  className="cursor-pointer text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#00C8FF]   rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-10px]  hover:translate-x-[10px]  hover:border-[#292929] hover:shadow-[5px_5px_0px_#292929]">
            Work
          </li>
          <li className="cursor-pointer text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#00C8FF]   rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-10px]  hover:translate-x-[10px] hover:border-[#292929] hover:shadow-[5px_5px_0px_#292929]">
           Certs
          </li>
          <li className="cursor-pointer text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#00C8FF]   rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-10px]  hover:translate-x-[10px]  hover:border-[#292929] hover:shadow-[5px_5px_0px_#292929]">
           Projects
          </li>
          <li className="cursor-pointer text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#00C8FF]  rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-10px]  hover:translate-x-[10px]  hover:border-[#292929] hover:shadow-[5px_5px_0px_#292929]">
            Contact Me
          </li>
          <li className="cursor-pointer text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#fd895b]   rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-10px]  hover:translate-x-[10px] hover:border-[#292929] hover:shadow-[5px_5px_0px_#292929]">
            Resume
          </li>
        </ul>
      </div>
    </nav>
  );
}
