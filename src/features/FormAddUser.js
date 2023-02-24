import React, { Component } from 'react'
import "../css/FormAddUser.css"


export default class FormAddUser extends Component {
    OpenCategory(category){
        let button = document.getElementById(category);
        button.classList.toggle('section-close');
        button.classList.toggle('section-open');
    }
  render() {
    return (
    <div id="from-add-user">
        <form>
            <div className="title-cat" onClick={() => this.OpenCategory('individual-section')}>
                <h2>Particulier</h2>
                <span>V</span>
            </div>
            <div id="individual-section" className='section-open'>
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
                <div className="individual-grid">
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
            <div className="title-cat" onClick={() => this.OpenCategory('emergency-section')}>
                <h2>Information Complémentaire</h2>
                <span>V</span>
            </div>
            <div id="emergency-section" className="section-close">
                <h3>Contact en cas d'urgence</h3>
                <h4>1er personne</h4>
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
                    <h4>2eme personne</h4>
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
                    {/* pas sur de garder cette partie
                    <h3>Droit  à l'image</h3>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus elit vel porttitor commodo. Integer vel mattis tellus. Etiam gravida hendrerit pharetra. Maecenas purus arcu, dapibus et iaculis eget, malesuada quis sapien. Nunc sodales dignissim aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris non euismod libero. Sed placerat lobortis felis at bibendum. Morbi id turpis id massa maximus lacinia at id nisi. Nulla ut ante condimentum augue vestibulum scelerisque et vitae sapien. Etiam nulla turpis, feugiat sed magna sit amet, aliquam auctor lectus. Proin non ullamcorper massa, nec sodales nunc.</p>
                        <canvas></canvas>        
                    </div> */}
                </div>
            </div>            
            {/* Entreprise */}
            <div className="title-cat" onClick={() => this.OpenCategory('company-section')}>
                <h2>Entreprise</h2>
                <span>V</span>
            </div>
            <div id="company-section" className='section-close'>
                <div className="individual-grid" >
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
            <div id="validate-button">
                <button>Valider</button>
            </div>
        </form>
    </div>
    )
  }
}