import './home.css'
import Me from '../../assets/me.png'
import './home.css'
import CV from '../../assets/cv.pdf'
import HomeIcon from './HomeIcon'



    function Home() {
    return (
        <>
        <div className="home">
            <div className="container home_container">
                <h4>Hello I'm</h4>
                <h1>Abd El-Raheman Badr</h1>
                <h4 className='text-light'>Front-End Developer</h4>

                <div className="btns">
                    <a href={CV} className="bttn" download>Download Cv</a>
                    <a href="#" className="bttn bttn-two">Let's Talk</a>
                </div>
                <div className="me">
                    <img src={Me} />
                </div>
                
            <a href="#about" className='scroll_down'>Scroll Down</a>

            <HomeIcon />
            </div>
        </div>
        </>
    )
    }

export default Home
