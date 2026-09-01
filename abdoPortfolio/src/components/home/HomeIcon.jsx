import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function HomeIcon() {
    return (
        <>
        <div className="home_icon">
            <a href="#" target="_blank" ><FaLinkedin /></a>
            <a href="#" target="_blank" ><FaGithub /></a>
            <a href="#" target="_blank" ><FaFacebookSquare /></a>
            <a href="#" target="_blank" ><FaInstagram /></a>
        </div>
        
        </>
    )
}
