import './footer.css'

import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
    return (
        <>
            <footer>
                <a href="#" className='footer_logo'>Abdo Badr</a>

                <ul className='prim_links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer_social">
                    <a href="" target="_blank"><SiFacebook /></a>
                    <a href="" target="_blank"><FaInstagram /></a>
                    <a href="" target="_blank"><BsWhatsapp /></a>
                </div>

                <div className="copyright">
                    <small>&copy; <a href="https://www.instagram.com/bross_web_/" target='_blank'>Bross || Web</a> All Rights Reserved</small>
                </div>
            </footer>
        </>
    )
    }

export default Footer
