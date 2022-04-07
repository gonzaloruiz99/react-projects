import React,{useEffect, useState} from 'react'
import Attribution from './Attribution'

import Navbar from './Navbar'
import Shorter from './Shorter'
import Footer from './Footer'
import Modal from './Modal'




const boardsData = [
    {
        id:1,
        title:'Brand Recognition',
        img:'./styles/images4/icon-brand-recognition.svg',
        text:`Boost your brand recognition with each click. Generic links don't
          mean a thing. Branded links help instil confidence in your content.`,
        order:'first',
    },
    {
        id:2,
        title:'Detailed Records',
        img:'./styles/images4/icon-detailed-records.svg',
        text:`Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.`,
        order:'middle',
    },
    {
        id:3,
        title:'Fully Customizable',
        img:'./styles/images4/icon-fully-customizable.svg',
        text: `Improve brand awareness and content discoverability through customizable
          links, supercharging audience engagement.`,
        order:'last',
    },
]


const App = () => {



    useEffect(()=>{
        var link = document.createElement('link');
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "./styles/shorter.css";
    
        var medialink = document.createElement('link');
            medialink.rel = "stylesheet";
            medialink.type = "text/css";
            medialink.href = "./styles/mediaShorter.css";
    
        document.head.appendChild(link);
        document.head.appendChild(medialink);
        document.title = "url Shortener | GR projects";
    }, [])




    const [modalContent, setModalContent] = useState( {visible:false,text:"", color:""} );

    return (
        <>
        <Navbar></Navbar>
        <section className="get-started">
            <img className="img-working" src="./styles/images4/illustration-working.svg" alt="illustration working"></img>
            <div className="main-info">
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insights
            on how your links are performing.</p>
            <button>get started</button>
            </div>
        </section>
        <div className="modal-container" style={{position:"relative"}}>
            {modalContent.visible && <Modal  modalContent={modalContent} setModalContent={setModalContent}></Modal>}
        </div>
        <Shorter setModalContent={setModalContent}></Shorter>
        <section className="advanced-statistics">
            <h1>Advanced statistics</h1>
            <p>Track how your links are performing across the web with our
            advanced statistics dashboard</p>
            <div className="boards">
                {boardsData.map((board)=>{
                    const {id,img,title,text,order} = board;
                   return <article className={`single-board ${order}`} key={id}>
                       <img src={img} alt={text} />
                       <h3 className='board-title'>{title}</h3>
                       <p className="board-text">{text}</p>
                    </article>
                })}
            </div>
            <div className="line"></div>
        </section>
        <section className="boost-links">
            <h3>boost your links today</h3>
            <button>get started</button>
        </section>
        <Footer></Footer>
        
        <Attribution></Attribution>
        </>
        
    )
}

export default App
