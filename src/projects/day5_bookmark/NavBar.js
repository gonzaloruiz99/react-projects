import React,{useState} from 'react'

const NavBar = () => {

    const [showLinks, setShowLinks] = useState(false)


    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img className="logo" src="./styles/images5/logo-bookmark.svg" alt="BOOKMARK logo" />
                    <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className={`links ${showLinks&&"show-links"}`}>
                    <li>
                        <a href="#featuresLink">features</a>
                    </li>
                    <li>
                        <a href="#">pricing</a>
                    </li>
                    <li>
                        <a href="#">contact</a>
                    </li>
                    <li>
                        <button className="red-btn">login</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
