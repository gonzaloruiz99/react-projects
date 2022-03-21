import React,{useState,useEffect} from 'react'


const getStorageTheme = () => {
        let theme = 'light-theme';
        if (localStorage.getItem('theme')) {
            theme = localStorage.getItem('theme');
        }
        return theme;
    };


const DarkMode = () => {
    const [theme, setTheme] = useState(getStorageTheme());

    

    const toggleTheme = () => {
        if (theme === 'light-theme'){
            setTheme('dark-theme');
            } else {
            setTheme('light-theme');
            }   
        };



    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);


    return (
        <>
        <button className="theme-btn" onClick={toggleTheme}>
        <i class={theme==="light-theme"? "fa-solid fa-flag": "fa-regular fa-flag" }></i>
        {theme==="light-theme"? " dark mode": " light mode"}
        </button>
        </>
    )
}

export default DarkMode