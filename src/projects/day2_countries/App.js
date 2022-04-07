import React,{useEffect, useState} from 'react'
import Attribution from './Attribution';

import axios from 'axios'
import DarkMode from './DarkMode';

const App = () => {

    useEffect(()=>{
        /*dynamically import css*/
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./styles/countries.css";
        document.head.appendChild(link);
        document.title = "Countries API | GR projects"
    }, [])




    const [countries,setCountries] = useState([]);
    const [filteredCountries,setFilteredCountries] = useState([]);
    const [filteredbyRegion,setFilteredbyRegion] = useState([]);
    const [regions,setRegions] = useState([]);
    



    const url= "https://restcountries.com/v3.1/all";

    const fetchData = async () => {
        const response = await axios.get(url);
        const countries = response.data;
        setCountries(countries);
        setFilteredCountries(countries)
        // console.log(countries);

        const filters = ["All",...new Set(countries.map((item)=> item.region))]
        setRegions(filters)

    /*
        const fetchData = async () => {
            const response = await fetch(url)
            const countries = await response.json();
            console.log(response);
            setCountries(countries);
            console.log(countries);
        }
    */
    }

    useEffect(()=>{ //fetchData con windowLoad
        fetchData();
    }, [])

   

     const filterItems = (e) => { //Filtra los paises por letra escrita
        const newCountries = filteredbyRegion.filter((item) => {
        //  return (item.name.common.toLowerCase()).includes(e.toLowerCase())}); // letra EN la palabra
          return (item.name.common.toLowerCase()).startsWith(e.toLowerCase())}); // COMIENZA con la letra
        setFilteredCountries(newCountries);
     }

    
    const filterRegion = (region) => {
        //console.log(region);
        if(region === "All"){
            setFilteredCountries(countries)
            setFilteredbyRegion(countries)
        }else{
            const newCountries = countries.filter((item) => {return item.region === region});
            setFilteredCountries(newCountries);
            setFilteredbyRegion(newCountries)
        }

    }

    

  return (
    <>

    <nav>
        <div className="nav-center">
            <h1>Where in the world?</h1>
            <DarkMode></DarkMode>
        </div>
    </nav>
    <div className="main-container">
        <section className="search">
            <input type="text" placeholder='Search for a country...'
            onChange={e => filterItems(e.target.value)}/>

            <select name="regions"  onChange={e => filterRegion(e.target.value)}>
                <option value="" selected disabled hidden>Filter by Region</option>
                {regions.map((item)=>{
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>

        </section>
        <section className="countries">
            {filteredCountries.map((country)=>{
                const {flags,population, region,capital, name} = country;

                return <article key={name.common} className="country">
                    
                    <img src={flags.png} alt={name.common} className="image"/>
                    <div className="country-info">
                        <h3>{name.common}</h3>
                        <p><span>Population:</span>  {population}</p>
                        <p><span>Region:</span>  {region}</p>
                        <p><span>Capital:</span>  {capital}</p>
                    </div>
                </article>
            })}
        </section>
    </div>
    <Attribution></Attribution>
    </>    
  )
}

export default App