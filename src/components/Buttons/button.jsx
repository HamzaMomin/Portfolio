import React from "react"
import Github from '../../assets/Github.png';
import './button.css'


const Button = ({ image }) => {

   

    return (

        <div className="btn">

            <img src={image} alt="Button" className="img-git" />
            

        </div>

    )



}

export default Button;