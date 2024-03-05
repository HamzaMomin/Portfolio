// Intro.js

import React from "react";
import Hamza2 from '../../assets/Hamza2.png';
import './intro.css';

const Intro = () => {
    return (
        <div className="container">
            <div className="intro-content">
                <h2 className="h2">Hello,</h2>
                <h3 className="introText">I'm <span className="introName">Hamza Momin</span>
                    <br />a Web Developer
                    <p className="intropara">I am a skilled web developer with experience in creating visually and appealing web applications.</p>
                </h3>
                <button className="btn"> Hire Me! </button>
            </div>
            <div className="imageCard">
                <img src={Hamza2} alt="profile" className="bg" />
            </div>
        </div>
    )
}

export default Intro;
