import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./NavBar.css";

export const Administrador = () =>{
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
    return (
    <>
        <IconContext.Provider value={{color: '#fff'}}>
       <div className="navbar">
         <Link to="#" className="menu-bars">
           <FaIcons.FaBars onClick={showSidebar} />
           </Link> 
       </div>
       <nav className={sidebar? 'nav-menu activate ': 'nav-menu'}>
         <nav className="nav-menu-items" onClick={showSidebar} >
           
             <Link to="#" className="menu-bars">
             <AiIcons.AiOutlineClose onClick={showSidebar}  />
             </Link>
             
             {SidebarData.map((item, index) =>{
              
              return (
                <li key={index} className={item.cName}>
                  <Link className="nav-Item" to={item.path}>
                    <span className="badge badge-secondary ">{item.title}</span>
                  </Link>
                </li>
              );
            })}
        </nav>
      </nav>
      </IconContext.Provider>  
    </> 
      )
}
