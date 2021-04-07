import React from 'react'
import {FooterContainer} from './Home.style'
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import GymSharkLogoWhite from '../images/WhiteGymSharkLogo-01.png'

const Footer = () => {
    return (
        <FooterContainer>
        <footer>
            <div className="footer-content">
                <img style={{width: '100px'}} src={GymSharkLogoWhite}/>
                <h3>GYMSHARK</h3>
                <p> Make progress your passion</p>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/Gymshark/"><FaFacebook/></a></li>
                    <li><a href="https://www.instagram.com/gymshark/"><FaInstagram/></a></li>
                    <li><a href="https://www.linkedin.com/company/gymshark"><FaLinkedin/></a></li>
                    <li><a href="https://twitter.com/Gymshark?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitter/></a></li>
                    <li><a href="https://www.youtube.com/channel/UCma7hhYJ3bfEhZgw3xl77ww"><FaYoutube/></a></li>

                </ul>
            </div>
            
            <div className="footer-bottom">
                <p>copyright &copy;2021 GYMSHARK Designed by Sumaya Hassan</p>
            </div>
        </footer>
        </FooterContainer>
    )
}

export default Footer
