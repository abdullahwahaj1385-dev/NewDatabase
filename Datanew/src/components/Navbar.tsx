import { useState } from "react";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";


import { SidebarData } from "../lib/SlidebarMenuItems";

import "./Navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
 
export function Navbar() {
  const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <IconContext.Provider value={{ color: "#008000" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars"> {/* ✅ Link per il menu a tendina */}
              <FaBars onClick={showSidebar} /> {/* ✅ Icona del menu a tendina */}
            </Link> 
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">  {/* ✅ Elemento per chiudere il menu a tendina */}
                  <Link to="#" className="menu-bars">
                    <AiOutlineClose /> {/* ✅ Icona per chiudere il menu a tendina */}
                    </Link> 
                </li>
                {SidebarData.map((item, index) => {
                  return (  
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon} {/* ✅ Icona del menu */}   
                        <span>{item.title}</span> {/* ✅ Titolo del menu */}
                      </Link>
                    </li>
                  );
                })}
                </ul>   
            </nav>
        </IconContext.Provider>
    );
}


 