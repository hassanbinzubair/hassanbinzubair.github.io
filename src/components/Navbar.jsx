import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menustatus, setMenuStatus] = useState("Menu")
  const changemenu = () => {
    if(menustatus === "Menu"){
      setMenuStatus("Menu active")
      setTimeout(() => {
        setMenuStatus("Menu")
      }, 2000);
    }
    else{
      setMenuStatus("Menu")
    }
  }
  
  return (
    <div className="Navbar">
      <h1 className="Name"><Link to={"/"}>I'm HASSAN</Link></h1>
      <div onClick={changemenu} className="hamburger">
        <div className="hamline"></div>
        <div className="hamline"></div>
        <div className="hamline"></div>
      </div>
      <div id="menu" className={menustatus}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/projects"}>Projects</Link>
      </div>
    </div>
  )
}

export default Navbar
