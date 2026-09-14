import "./contact.css";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const contactData = [
        {
            id: 1,
            icon: <CiFacebook />,
            title: "Facebook",
            info: "Abdo Badr",
            link: "https://www.facebook.com/share/1EmqknE6oS/",
        },
        {
            id: 2,
            icon: <FaInstagram />,
            title: "Instagram",
            info: "Bross || Web",
            link: "https://www.instagram.com/bross_web_/",
        },
        {
            id: 3,
            icon: <BsWhatsapp />,
            title: "WhatsApp",
            info: "@Boda.Badr",
            link: "https://api.whatsapp.com/send?phone=201092706152",
        },
    ];

    function Contact() {

        const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_ydztvzk', 'template_26wkpav', form.current, '2EXJmfw-kp5PvlNk5')
        e.target.reset()
    };

    return (
        <>
        <section className="contact" id="contact">
            <div className="top_section">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            </div>
        </section>

        <div className="container contact_container">
            <div className="contact_options">
                {
                    contactData.map(({id, icon, title, info, link}) => (
                        <article key={id} className="contact_option">
                            {icon}
                            <h4>{title}</h4>
                            <h5>{info}</h5>
                            <a href={link} target="_blank">Send Massage</a>
                        </article>
                    ))
                }
            </div>

            <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name="name" />
            <input type="email" placeholder="Your Email" name="email" />
            <textarea rows={13} placeholder="Text Your Massage" name="massage" id=""></textarea>
            <button className="bttn bttn-two">Send Massage</button>
            </form>
        </div>
        </>
    );
    }

    export default Contact;

