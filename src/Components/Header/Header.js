import react, { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

import './Header.css'


const Header = (props) => {

    const[menu, setMenu]=useState(false)

    const showMenu=()=>{
return(

    setMenu(true)
)

    }


    const closeMenu=()=>{
        return(
        
            setMenu(false)
        )
        
            }



    return (
        <div className={`container-header ${props.cls}`}>
            

            <button className="icon-menu" onClick={showMenu}>
                                <div className="fondo">   </div>
           </button>
 
            
       
       <div className="icon"></div>
       <a href="http://localhost:3000/" className="icon"></a>

       {menu && (
        <HamburgerMenu click={closeMenu}/>
      )}
      
        </div>


    )
}

export default Header;