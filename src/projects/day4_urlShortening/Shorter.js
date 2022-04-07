import React,{useState, useEffect} from 'react'


/*
. guardar el link submitido en un state
. pasarlo a otro state que se mapee en la pagina
. dar opcion de copiar link 
*/






const Shorter = ({setModalContent}) => {
    const [link, setLink] = useState("");
    const [links, setLinks] = useState([]);


    const shortererLink = async (IDlink) => {
        const url = `https://api.shrtco.de/v2/shorten?url=${IDlink}`

        const response = await fetch(url);
        const shorten = await response.json();
        return shorten.result.full_short_link;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        if(link){
            const shortenLink = await shortererLink(link);
            const newLink = {link, id: new Date().getTime().toString(),shortenLink}
            setLinks([...links, newLink]);
            setLink("");
            setModalContent({visible:true,text:"Link Shortened!", color:"var(--Cyan)"})
        }
        }
        catch{
            setModalContent({visible:true,text:"Broken or misspelled Link. Try Again!", color:"var(--secondary-red)"})
        }
        
    }


    const copyLink = (link) => {
        navigator.clipboard.writeText(link);
        setModalContent({visible:true,text:"Shorten link Copied!", color:"var(--Cyan)"})
    }


    return (
        <section className="shorten-section">
            <form className="shorten-box" >
                <input name="link" type="text" placeholder=" Shorten a link here..."
                value={link}
                onChange={(e)=>setLink(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Shorten In!</button>
            </form>
            <div className="shorten-links">
                {links.map((item, index)=>{
                    const {link, id, shortenLink} = item;
                    return (
                        <div className="item" key={id}>
                            <h4>{link}</h4>
                            <div className="shorten-item">
                                <p>{shortenLink}</p>
                                <button onClick={()=> copyLink(shortenLink) }>copy</button>

                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Shorter
