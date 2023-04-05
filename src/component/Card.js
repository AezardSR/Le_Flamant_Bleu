import React from "react"; 
import "../css/card.css";
import "../css/global.css";


const Card =  ({title, content, button}) =>{
    return(
        <div className="cardContainer">
            <h2 className="cardTitle">{title}</h2>
            <p>{content}</p>
            <div className="buttonContainer">
                <button className="cardButton" onClick={button}>Voir</button>
            </div>
        </div>
    );
}
export default Card;