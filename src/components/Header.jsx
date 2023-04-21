import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";


const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {

    const [darkMode, setDarkMode] = useState(initialStateDarkMode);
    useEffect(()=>{
        console.log('demo2')
        if(darkMode){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark");
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "ligth");
        }
    },[darkMode])

    return (
        <header className="duration-1000 container mx-auto px-4 pt-8 md:max-w-x1">
           <div className="flex justify-between">
            <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                Todo
            </h1>
            <button onClick={()=> setDarkMode(!darkMode)}>
                {
                    darkMode ? <SunIcon/> : <MoonIcon/>
                }
                        
            </button>
           </div>
      </header>
    );
}

export default Header;