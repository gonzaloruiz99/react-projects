import React,{useState} from 'react'


const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <>
        <nav>
            <div className="nav-center">
                {/* <!--nav header--> */}
                
                    <div className="nav-header">
                        <h3 className="title"><img src="./styles/images4/logo.svg" alt="Shortly" /></h3>
                        <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className={`nav-right ${showLinks && 'show-links'}`}>
                        <ul className="links">
                            <li>
                                <a href="#">features</a>
                            </li>
                            <li>
                                <a href="#">pricing</a>
                            </li>
                            <li>
                                <a href="#">resources</a>
                            </li>
                        </ul>
                        <ul className="registration">
                            <li>
                            <button className="login">login</button>
                            </li>
                            <li>
                            <button className="sign-up">sign up</button>
                            </li>
                        </ul>
                    </div>
                {/* <!-- registration--> */}
                
            </div>
        </nav>
        </>
    )
}

export default Navbar
