import './skill.css'
import CSS from '../../assets/css3.svg'
import JS from '../../assets/javascript.svg'
import Nodejs from '../../assets/nodejs.svg'
import React from '../../assets/react.svg'
import Tailwind from '../../assets/tailwindcss.svg'
import Mongodb from '../../assets/mongodb.svg'
import Figma from '../../assets/figma.svg'
import Express from '../../assets/expressjs.svg'

const skillsData = [
    {
        id: 1,
        img: CSS,
        title: 'CSS',
        disc: 'User Interface',
    },
    
    {
        id: 2,
        img: JS,
        title: 'JavaScript',
        disc: 'Interaction',
    },
    
    {
        id: 3,
        img: React,
        title: 'React',
        disc: 'FrameWork',
    },
    
    {
        id: 4,
        img: Nodejs,
        title: 'Node.Js',
        disc: 'Web Server',
    },

    {
        id: 5,
        img: Figma,
        title: 'Figma',
        disc: 'Design Tool',
    },

    {
        id: 6,
        img: Tailwind,
        title: 'Tailwind',
        disc: 'User Interface',
    },

    {
        id: 7,
        img: Mongodb,
        title: 'MongoDB',
        disc: 'Database',
    },

    {
        id: 8,
        img: Express,
        title: 'Express',
        disc: 'Node Framework',
    },

]

function Skill() {
    return (
        <>
        <section className='skills'>
            <div className="top_section">
                <h5>What Skill I Have</h5>
                <h2>Experience</h2>
            </div>

            <div className="container container_skill">
                {
                    skillsData.map(({id, img, title, disc}) => (
                        // console.log(id, img, title, disc);
                        
                        <article className='card_skill' key={id}>
                            <div className="icon">
                                <img src={img} />
                            </div>
                            <div className="content">
                                <h4>{title}</h4>
                                <p className="text-light">{disc}</p>
                            </div>
                        </article>
                    ))
                }
                
            </div>
        </section>
        </>
    )
    }

export default Skill
