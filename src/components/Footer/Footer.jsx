import React from 'react';
import './Footer.css';
// import Github from "../../assets/github.png";
// import Instagram from "../../assets/instagram.png";
// import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <BsGithub size={35} className="social-icons" />
                    <BsInstagram size={35} className="social-icons" />
                    <BsLinkedin size={35} className="social-icons" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>

        </div>
    )
}
