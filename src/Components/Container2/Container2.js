import react from "react";

import './Container2.css'


const Container2 = (props) => {
    return (
        <div className={`container2 ${props.cls2}`}>
         <div className={`container-img2 ${props.img}`}></div>
         
         <a href={props.url} className="button2">{props.title}</a>
        </div>


    )
}

export default Container2;