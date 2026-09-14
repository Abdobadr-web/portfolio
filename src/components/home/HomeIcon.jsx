import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function HomeIcon() {
    return (
        <>
        <div className="home_icon">
            <a href="https://www.linkedin.com/in/abdo-badr-" target="_blank" ><FaLinkedin /></a>
            <a href="https://github.com/Abdobadr-web" target="_blank" ><FaGithub /></a>
            <a href="https://www.facebook.com/share/1EmqknE6oS/" target="_blank" ><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/bross_web_/?utm_source=ig_web_button_share_sheet" target="_blank" ><FaInstagram /></a>
        </div>
        
        </>
    )
}
