import React,{useEffect} from 'react'
import Attribution from './Attribution'

import NavBar from './NavBar'
import Features from './Features'
import Questions from './questions/Questions'



const boardsData = [
    {
        id: "chrome_extension",
        img: "./styles/images5/logo-chrome.svg",
        title: "Chrome",
        version: 62,
    },
    {
        id: "firefox_extension",
        img: "./styles/images5/logo-firefox.svg",
        title: "Firefox",
        version: 55,
    },
    {
        id: "opera_extension",
        img: "./styles/images5/logo-opera.svg",
        title: "Opera",
        version: 42,
    },
]


const App = () => {


    useEffect(()=>{ // dynamic css
        var link = document.createElement('link');
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "./styles/bookmark.css";
        
        var medialink = document.createElement('link');
            medialink.rel = "stylesheet";
            medialink.type = "text/css";
            medialink.href = "./styles/mediabookmark.css";
    
            document.head.appendChild(link);
            document.head.appendChild(medialink);
            document.title = "Bookmark | GR projects";
    }, [])


    return (
        <>
        <main>
            <NavBar/>
            <section className="main-container grid-container">
                <div className="description">
                    <h2>a simple bookmark manager</h2>
                    <p>A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="browsers-opc">
                        <button className="btn chrome">
                            get it on chrome
                        </button>
                        <button className="btn firefox">
                            get it on firefox
                        </button>
                    </div>
                </div>
                <div className="img-container">
                    <img src="./styles/images5/illustration-hero.svg" alt="screen-img" />
                    <span className="vector1"></span>
                </div>
            </section>
            <section className="features-container" id="featuresLink">
                <h2>features</h2>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. 
                Your bookmarks sync between your devices so you can access them on the go.</p>
                <Features></Features>
            </section>
            <section className="extension-container">
                <h2>download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if you've 
                got a favourite you'd like us to prioritize.</p>
                <div className="boards">
                    {boardsData.map((board)=>{
                        const {id,img,title,version} = board;
                        return <div className="single-board" key={id}>
                            <img src={img} alt={title} />
                            <h3 className='board-title'>Add to {title}</h3>
                            <p className="board-version">Minimum version {version}</p>
                            <button className='install-btn btn'>add &amp; install extension</button>
                            
                    </div>
                    })}
                </div>
            </section>     
            <Questions></Questions>
            <div className="footer-container">
                <div className="contact-us">
                    <p>35.000 + already joined</p>
                    <h2>Stay up-to-date with what we're doing</h2>
                    <form action="">
                        <input type="text" placeholder='Enter your email adress'/>
                        <button className='red-btn'>Contact Us</button>
                    </form>
                </div>
                <footer>
                        <img className="logo" src="./styles/images5/logo-bookmark.svg" alt="BOOKMARK logo" />
                        <ul className="footer-links">
                            <li>
                                <a href="#featuresLink">features</a>
                            </li>
                            <li>
                                <a href="#">pricing</a>
                            </li>
                            <li>
                                <a href="#">contact</a>
                            </li>
                        </ul>
                        <ul className="socials">
                            <li>
                                <a href="#"><img src="./styles/images5/icon-facebook.svg" alt="facebook" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="./styles/images5/icon-twitter.svg" alt="twitter" /></a>
                            </li>
                        </ul>
                        
                </footer>
            </div>
            
        </main>
        <Attribution></Attribution>
        </>
    )
}

export default App
