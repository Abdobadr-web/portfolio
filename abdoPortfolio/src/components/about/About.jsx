import './about.css'
import Ime from '../../assets/me-about.png'
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
    return (
        <>
            <section className='about' id='about'>
                <div className="top_section">
                    <h5>Get To Know</h5>
                    <h2>About Me</h2>
                </div>

                <div className="container about_container">

                    <div className="about_me">
                        <div className="about_me_img">
                            <img src={Ime}  />
                        </div>
                    </div>

                    <div className="about_content">
                        <div className="about_cards">
                            <div className="about_card">
                                <FaAward className='about_icon' />
                                <h5>Experience</h5>
                                <small>1+ year working</small>
                            </div>

                            <div className="about_card">
                                <FaUsers className='about_icon' />
                                <h5>Clients</h5>
                                <small>100+ worldwide</small>
                            </div>
                            
                            <div className="about_card">
                                <VscFolderLibrary className='about_icon' />
                                <h5>Projects</h5>
                                <small>50+ Completed</small>
                            </div>
                        </div>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quo ab ex similique, soluta iste maxime iusto! Ipsa, eveniet voluptatum maxime sed illum dolorum expedita error placeat quisquam vitae dignissimos!</p>

                        <a href="#contact" className='bttn bttn_prim' >Let's Talk</a>
                    </div>
                </div>
            </section>
        </>
    )
    }

export default About
