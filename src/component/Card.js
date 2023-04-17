import React from "react"; 
import "../css/card.css";
import "../css/global.css";

// Composant Card qui design les cards
//  utilisations de props pour s'en reservir ailleurs.
const Card =  ({title, content, button}) =>{
    return(
        <div class="card">
            <div class="card-body">
                <div class="text-container">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
                <div class="button-container">
                    <button class="button" onClick={button}>Voir</button>
                </div>
            </div>
        </div>
    );
}
export default Card;