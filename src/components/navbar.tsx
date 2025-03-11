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

    return () => {}; // Cleanup function (not needed since we're looping)
  }, []);
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        
        <h1 id="hackerText" className="text-black   md:text-[48px] sm:text-[20px] lg:text-[28px] font-bold "> {displayText}</h1>
        
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
          ${isOpen ? "block" : "hidden"} md:block
        `}>
          <li className="text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#00C8FF]  rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[10px]  hover:translate-x-[10px]">
            <a href="#">Projects</a>
          </li>
          <li className="text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#00C8FF]   rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-10px]  hover:translate-x-[10px]">
            <a href="#">Work</a>
          </li>
          <li className="text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#00C8FF]   rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[10px]  hover:translate-x-[-10px]">
            <a href="#">Education</a>
          </li>
          <li className="text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#00C8FF]   rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-10px]  hover:translate-x-[10px]">
            <a href="#">Contact</a>
          </li>
          <li className="text-black text-[20px] font-bold py-4 px-6 border-2 border-black bg-[#00C8FF]   rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[10px]  hover:translate-x-[-10px]">
            <a href="#">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
