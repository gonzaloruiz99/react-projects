import React,{useState} from 'react'

const data = [
    {
        id:1,
        button:'Simple Bookmarking',
        title:'Bookmark in one click',
        text:`Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.`,
        image:'./styles/images5/illustration-features-tab-1.svg',
    },
    {
        id:2,
        button:'Speedy Searching',
        title:'Intelligent search',
        text:`Our powerful search feature will help you find saved sites in no time at all. 
            No need to trawl through all of your bookmarks.`,
        image:'./styles/images5/illustration-features-tab-2.svg',
    },
    {
        id:3,
        button:'Easy Sharing',
        title:'Share your bookmarks',
        text:`Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.`,
        image:'./styles/images5/illustration-features-tab-3.svg',
    },
]

const allButtons =  [...new Set(data.map((btn)=>btn.button))]

const Features = () => {
    const [features, setFeatures] = useState(data);
    const [index, setIndex] = useState(0);





    var prevSlide = {
        opacity: "1",
        transform: "translateX(0)"
    }
    var activeSlide = {
        transform: "translateX(100%)"
    }
    var nextSlide = {
        transform: "translateX(-100%)"
    }



    return (
        <div className="section-center">
            <div className="btn-container">
                {allButtons.map((btn, btnIndex)=>{
                    return <button className= {btnIndex === index &&"active-btn"}
                            onClick={()=>setIndex(btnIndex)}>
                        {btn}
                    </button>
                })}
            </div>
            {features.map((feature,featureIndex)=>{
                const {id, title, text, image} = feature;

                let position = nextSlide;
                if(featureIndex === index){
                    position = activeSlide;
                }
                if(featureIndex === index-1 || 
                    (index === 0 && featureIndex=== features.length -1)){
                    position = prevSlide;
                }

                return <article style={position} key={id}>
                    <div className="grid-container">
                        <div className="img-container left-img">
                            <img src={image} alt={title} className="person-img" />
                            <span className="vector1 "></span>
                        </div>
                        <div className="features-description">
                            <h2>{title}</h2>
                            <p>{text}</p>
                            <button className="btn feature-btn">more info</button>
                        </div>

                    </div>
                </article>


            })}
        </div>
    )
}



export default Features
