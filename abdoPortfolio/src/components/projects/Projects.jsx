    import './projects.css'
    import Img1 from '../../assets/portfolio1.jpg'
    import Img2 from '../../assets/portfolio2.jpg'
    import Img3 from '../../assets/portfolio3.jpg'
    import Img4 from '../../assets/portfolio4.jpg'
    import Img5 from '../../assets/portfolio5.png'
    import Img6 from '../../assets/portfolio6.jpg'

    const projectsData = [
        
        {
            id: 1,
            imge: Img1,
            title: 'title of project',
            github: 'link',
            demo: 'link',
        },
        
        {
            id: 2,
            imge: Img2,
            title: 'title of project',
            github: 'link',
            demo: 'link',
        },
        
        {
            id: 3,
            imge: Img3,
            title: 'title of project',
            github: 'link',
            demo: 'link',
        },
        
        {
            id: 4,
            imge: Img4,
            title: 'title of project',
            github: 'link',
            demo: 'link',
        },
        
        {
            id: 5,
            imge: Img5,
            title: 'title of project',
            github: 'link',
            demo: 'link',
        },
        
        {
            id: 6,
            imge: Img6,
            title: 'title of project',
            github: 'link',
            demo: 'link',
        },
    ]

function Projects() {
    return (
        <>
            <section className="projects">
                <div className="top_section">
                    <h5>Get To Know</h5>
                    <h2>About Me</h2>
                </div>
            </section>

            <div className="container projects_container">
                {
                    projectsData.map(({id, imge, title, github, demo}) => (
                    <article className='portfolio_item' key={id}>
                        <div className="portfolio_item_img">
                            <img src={imge} alt="" />
                        </div>

                        <h3>{title}</h3>
                        <div className="portfolio_item_btns">
                            <a href={github} target='_blank' className='bttn '>Github</a>
                            <a href={demo} target='_blank' className='bttn bttn-two'>Live Demo</a>
                        </div>
                    </article>
                    ))
                }
            </div>
        </>
    )
    }

export default Projects
