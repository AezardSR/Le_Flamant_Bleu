import React, { Component } from 'react'
import "../css/FormAddUser.css"

export default class FormAddUser extends Component {
  render() {
    return (
    <div>
        <form>
            <div className="title-cat">
                <h2>Particulier</h2>
                <span>V</span>
            </div>
            <div id="individual">
                <div id="individual-head">
                    <div>
                        <label for="name">Nom</label>
                        <input type="text" name="name"></input>
                    </div>
                    <div>
                        <label for="firstname">Prénom</label>
                        <input type="text" name="firstname"></input>
                    </div>
                    <div>
                        <label for="city">Ville</label>
                        <input type="text" name="city"></input>
                    </div>
                    <div>
                        <label for="zipCode">Code Postal</label>
                        <input type="text" name="zipCode"></input>
                    </div>
                </div>
                <div id="individual-mid">
                    <label for="address">Adresse</label>
                    <input type="text" name="address"></input>
                </div>            
                <div id="individual-bottom">
                    <div>
                        <label for="mail">Mail</label>
                        <input type="text" name="mail"></input>
                    </div>
                    <div>
                        <label for="tel">Téléphone</label>
                        <input type="text" name="tel"></input>
                    </div>
                </div>
            </div>
            {/* Information Complémentaire */}
            <div className="title-cat">
                <h2>Information Complémentaire</h2>
                <span>V</span>
            </div>
            <div>
                <div className="individual-grid">
                    <div>
                        <label for="name">Nom</label>
                        <input type="text" name="name"></input>
                    </div>
                    <div>
                        <label for="firstname">Prénom</label>
                        <input type="text" name="firstname"></input>
                    </div>
                    <div>
                        <label for="tel">numéro de téléphone</label>
                        <input type="text" name="tel"></input>
                    </div>
                </div>
                <div className="individual-grid">
                    <div>
                        <label for="name">Nom</label>
                        <input type="text" name="name"></input>
                    </div>
                    <div>
                        <label for="firstname">Prénom</label>
                        <input type="text" name="firstname"></input>
                    </div>
                    <div>
                        <label for="tel">numéro de téléphone</label>
                        <input type="text" name="tel"></input>
                    </div>
                </div>            
            </div>
            {/* Entreprise */}
            <div className="title-cat">
                <h2>Entreprise</h2>
                <span>V</span>
            </div>
            <div>
                <div className="individual-grid">
                    <div>
                        <label for="companyName">Nom de l'entreprise</label>
                        <input type="text" name="CompanyName"></input>
                    </div>
                    <div>
                        <label for="city">Ville</label>
                        <input type="text" name="city"></input>
                    </div>
                    <div>
                        <label for="zipCode">Code Postal</label>
                        <input type="text" name="zipCode"></input>
                    </div>
                    <div>
                        <label for="contactMail">Mail du contact</label>
                        <input type="text" name="zipCode"></input>
                    </div>
                    <div>
                        <label for="contactTel">Téléphone du contact</label>
                        <input type="text" name="contactTel"></input>
                    </div>
                    <div>
                        <label for="contactName">Nom du contact</label>
                        <input type="text" name="contactName"></input>
                    </div>
                    <div>
                        <label for="contactName">Nom du contact</label>
                        <input type="text" name="contactName"></input>
                    </div>
                </div>
           

            </div>
            <button>Valider</button>
        </form>
    </div>
    )
  }
}