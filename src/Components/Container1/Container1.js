import react from "react";

import './Container1.css'


const Container1 = (props) => {
    return (
        <div className={`container ${props.cls}`}>
         <div className={`container-img ${props.img}`}></div>
         
         <a href={props.url} className="button">{props.title}</a>
        </div>
    )
}

export default Container1;