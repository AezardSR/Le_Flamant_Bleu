import React from "react"; 
import "../css/styles.css";

// Composant Card qui design les cards
//  utilisations de props pour s'en reservir ailleurs.
const Card =  ({title, content, button}) =>{
    return(
        <div class="card">
            <div class="card-body">
                <div class="card-text-container">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
                <div class="button-card-container">
                    <button class="card-button" onClick={button}>Voir</button>
                </div>
            </div>
        </div>
    );
}
export default Card;