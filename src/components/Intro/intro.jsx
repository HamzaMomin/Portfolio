import React from "react";
import Hamza2 from '../../assets/Hamza2.png'
const Intro = () =>{

    return (

        <section id="intro">
            <div className="intro-content">
            <span className="hello">Hello,</span>
            </div>
            <img src={Hamza2} alt="profile" className="bg"/> 
        </section>

)
}

export default Intro;