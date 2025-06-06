import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollAndBgChange = (id: string, bgColor: string) => {
    if (location.pathname !== "/") {
      navigate("/");

      // Retry scroll after route change
      const interval = setInterval(() => {
        const el = document.getElementById(id);
        if (el) {
          scrollToSection(el, bgColor);
          clearInterval(interval);
        }
      }, 100);

      // Stop retrying after 2 seconds
      setTimeout(() => clearInterval(interval), 2000);
    } else {
      const el = document.getElementById(id);
      if (el) {
        scrollToSection(el, bgColor);
      }
    }
  };

  const scrollToSection = (el: HTMLElement, bgColor: string) => {
    el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    document.body.style.backgroundColor = bgColor;
  };

    

  return (
    <nav>
      <div className="w-full mx-auto px-6 flex justify-center items-center py-8 relative">
        {/* Mobile Menu Button */}
        {/* <button
          className="text-black text-2xl md:hidden absolute right-6 top-1/2 -translate-y-1/2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button> */}

        {/* Navbar Links */}
        <ul
          className={`md:flex md:space-x-6 md:static md:w-auto absolute top-16 left-0 w-full md:bg-transparent md:flex-row z-10 space-y-3 md:space-y-0 transition-all duration-300 ease-in-out ${
            isOpen
              ? "flex flex-col items-center backdrop-blur-md bg-white/30"
              : "hidden"
          } md:block`}
        >
          <li
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
                setIsOpen(false);
                document.body.style.backgroundColor = "#1C723F";
              } else {
                handleScrollAndBgChange("About", "#1C723F");
              }
            }}
            className={`cursor-pointer text-black text-[16px] font-bold px-6 py-2 border-2 bg-[#fff] rounded-full transition-transform hover:translate-y-[-4px] hover:translate-x-[4px] ${
              location.pathname === "/"
                ? "border-[#ff0000] shadow-[2px_2px_0px_0px_#ff0000]"
                : "border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:border-[#ff0000] hover:shadow-[2px_2px_0px_#ff0000]"
            }`}
          >
            About
          </li>

          <li
            onClick={() => {
              navigate("/Work");
              setIsOpen(false);
              document.body.style.backgroundColor = "#8489E9";
            }}
            className={`cursor-pointer text-black text-[16px] font-bold px-6 py-2 border-2 bg-[#fff] rounded-full transition-transform hover:translate-y-[-4px] hover:translate-x-[4px] ${
              location.pathname === "/Work"
                 ? "border-[#ff0000] shadow-[2px_2px_0px_0px_#ff0000]"
                : "border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:border-[#ff0000] hover:shadow-[2px_2px_0px_#ff0000]"
            }`}
          >
            Work
          </li>

          <li
           onClick={() => {
              navigate("/Certs");
              setIsOpen(false);
              document.body.style.backgroundColor = "#853333";
            }}
              className={`cursor-pointer text-black text-[16px] font-bold px-6 py-2 border-2 bg-[#fff] rounded-full transition-transform hover:translate-y-[-4px] hover:translate-x-[4px] ${
              location.pathname === "/Certs"
                 ? "border-[#ff0000] shadow-[2px_2px_0px_0px_#ff0000]"
                : "border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:border-[#ff0000] hover:shadow-[2px_2px_0px_#ff0000]"
            }`}
          >
            Certs
          </li>

          <li
             onClick={() => {
              navigate("/Projects");
              setIsOpen(false);
              document.body.style.backgroundColor = "#EAD150";
            }}
            className={`cursor-pointer text-black text-[16px] font-bold px-6 py-2 border-2 bg-[#fff] rounded-full transition-transform hover:translate-y-[-4px] hover:translate-x-[4px] ${
              location.pathname === "/Projects"
                 ? "border-[#ff0000] shadow-[2px_2px_0px_0px_#ff0000]"
                : "border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:border-[#ff0000] hover:shadow-[2px_2px_0px_#ff0000]"
            }`}
          
          >
            Projects
          </li>

          <li
            onClick={() => handleScrollAndBgChange("Art", "#E9BA84")}
            className="cursor-pointer text-black text-[16px] font-bold px-6 py-2 border-2 border-black bg-[#fff] rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-4px] hover:translate-x-[4px] hover:border-[#292929] hover:shadow-[2px_2px_0px_#292929]"
          >
            Art
          </li>

          <li
            onClick={() => handleScrollAndBgChange("Contact", "#00FF99")}
            className="cursor-pointer text-black text-[16px] font-bold px-6 py-2 border-2 border-black bg-[#fff] rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-4px] hover:translate-x-[4px] hover:border-[#292929] hover:shadow-[2px_2px_0px_#292929]"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
