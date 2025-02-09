import React, { useState } from "react";
import "./App.css";
import MainContainer from "./components/main_container";
import CardsContainer from "./cards/cards";
import Moon from "../../Portfolio/src/assets/Moon.svg";
import Sun from "../../Portfolio/src/assets/Sun.svg";
import Projects from "./components/screens/Project";
import ContactUs from "./components/screens/contact";
import Experience from "./components/screens/experience";
import Education from "./components/screens/education";

function App() {
    const [isDarkBackground, setIsDarkBackground] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("About Me");

    const [cardTitles, setCardTitles] = useState({
        card1: "Let's Connect",
        card2: "Projects",
        card3: "Experience",
    });

    const toggleBackground = () => {
        setIsDarkBackground(!isDarkBackground);
    };

    const handleCardClick = (screen) => {
        if (screen === "Projects") {
            setCardTitles({
                card1: "Let's Connect",
                card2: "About Me",
                card3: "Experience",
            });
        }
        else if (screen === "About Me") {
            setCardTitles({
                card1: "Let's Connect",
                card2: "Projects",
                card3: "Experience",
            });
        }
        else if (screen === "Experience") {
            setCardTitles({
                card1: "Let's Connect",
                card2: "About Me",
                card3: "Education",
            });
            
        }
        else if (screen === "Education") {
            setCardTitles({
                card1: "Let's Connect",
                card2: "About Me",
                card3: "Experience",
            });
            
        }
        setCurrentScreen(screen);
    };

    return (
        <div className={`flex flex-col justify-between items-center gap-4 mb-6 px-4 overflow-hidden w-screen h-screen ${isDarkBackground ? "bg-dot-dark" : "bg-dot-12-s-2-neutral-700"}`}>
            <div className="absolute top-4 right-4">
                <button onClick={toggleBackground} className="py-2 md:pl-6">
                    {isDarkBackground ? (
                        <img src={Moon} alt="Moon" className="w-[70px] h-[70px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] mt-4" />
                    ) : (
                        <img src={Sun} alt="Sun" className="w-[70px] h-[70px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] mt-4" />
                    )}
                </button>
            </div>

            {currentScreen === "About Me" && <MainContainer isDarkBackground={isDarkBackground} />}
            {currentScreen === "Projects" && <Projects isDarkBackground={isDarkBackground} />}
            {currentScreen === "Let's Connect" && <ContactUs isDarkBackground={isDarkBackground} />} {/* Show Contact screen */}
            {currentScreen === "Experience" && <Experience isDarkBackground={isDarkBackground} />} {/* Show Contact screen */}
            {currentScreen === "Education" && <Education isDarkBackground={isDarkBackground} />}

            <div className="flex justify-center items-end  translate-y-12">
                <div className="hover:-translate-y-2 translate-y-[40px] duration-300 hover:rotate-12">
                    <CardsContainer
                        backgroundcolor="#A388EE"
                        title={cardTitles.card1}
                        zIndex={0}
                        rotation={-15}
                        marginTop={20}
                        onClick={() => handleCardClick("Let's Connect")} // Change to Contact screen
                    />
                </div>
                <div className="hover:-translate-y-2 translate-y-[40px] duration-300 hover:-translate-x-3 hover:-rotate-6">
                    <CardsContainer
                        backgroundcolor="#FF6B6B"
                        title={cardTitles.card2}
                        zIndex={0}
                        rotation={0}
                        marginTop={20}
                        onClick={() => handleCardClick(cardTitles.card2)}
                    />
                </div>
                <div className="hover:-translate-y-2 translate-y-[40px] duration-300 hover:-rotate-12">
                    <CardsContainer
                        backgroundcolor="#FF5733"
                        title={cardTitles.card3}
                        zIndex={10}
                        rotation={15}
                        marginTop={20}
                        onClick={() => handleCardClick(cardTitles.card3)}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
