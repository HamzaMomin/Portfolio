import React from "react";
import Hamza1 from '../../assets/Hamza1.png';
import './intro.css';

const Intro = () => {
    return (

        <div className="container">
          
            <div> <h2 className="heading">&lt;Hello World/&gt;</h2>
                <p className="about"> I am a Front-End <br /> Developer and <br /> Pixel Artist. </p></div>


            <div className="container-img">
                < img src={Hamza1} alt="Hamza2" className="profileImage" />
                
                <p>Hamza Momin </p>
            </div>
          

        </div>



    )
}

export default Intro;
