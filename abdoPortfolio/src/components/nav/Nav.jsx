import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';


function Nav() {
    const [activeNav , setActive] = useState('#')
    return (
        <>
        <nav>
            <a href="#" className={activeNav === "#" ? "active" : ""} onClick={() => setActive('#')}><IoHomeOutline /></a>
            <a href="#about" className={activeNav === "#about" ? "active" : ""} onClick={() => setActive('#about')}><LuUserRound /></a>
            <a href="#services" className={activeNav === "#services" ? "active" : ""} onClick={() => setActive('#services')}><BiBook /></a>
            <a href="#project" className={activeNav === "#project" ? "active" : ""} onClick={() => setActive('#project')}><RiServiceLine /></a>
            <a href="#contact" className={activeNav === "#contact" ? "active" : ""} onClick={() => setActive('#contact')}><BiMessageSquareDetail /></a>
        </nav>
        </>
        )
    }

export default Nav
