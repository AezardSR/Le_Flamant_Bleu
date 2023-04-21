import React from "react"; 
import "../css/styles.css";

// Composant Card qui design les cards
//  utilisations de props pour s'en reservir ailleurs.
const Card =  ({title, content, button}) =>{
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-text-container">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
                <div className="button-card-container">
                    <button className="card-button" onClick={button}>Voir</button>
                </div>
            </div>
        </div>
    );
}
export default Card;