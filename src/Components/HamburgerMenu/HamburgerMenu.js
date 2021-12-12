import react from "react";

import './HamburgerMenu.css'


const HamburgerMenu = (props) => {
    return (
        <div className="menu-container">

            <div className="pico"></div>
            <div className="menu" >
                <button className="menu-button-close" onClick={props.click}>x</button>
            <ul className="menu-container-lista">
                <li ><a href="" className="menu-lista">Contactanos</a></li>
                <br></br>
                <li ><a href="http://localhost:3000/preguntasFrecuentes" className="menu-lista">Preguntas Frecuentes</a></li>
                <br></br>
                <li ><a href="" className="menu-lista">Nosotros</a></li>
            </ul>
        </div>

        </div>
        

    )
}

export default HamburgerMenu;