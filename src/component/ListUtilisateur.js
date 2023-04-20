import React, { Component } from 'react'
import "../css/styles.css";


export default class ListUtilisateur extends Component {
    data = [
        { name: "Anom", firstname: "test", mail: "test@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Megha", firstname: "truc", mail: "truc@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400" },
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
      ]
    render(
        
    ) {
        return (
            <div id='list-utilisateur'>
              <div id='search-bar'>
                <input type="text" placeholder="Recherche"></input>
                <button>Search</button>
              </div>
              <div id="table-container">
                  <table>
                      <thead>
                        <tr>  
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Mail</th>
                            <th>Téléphone</th>
                            <th>Adresse</th>
                            <th>Ville</th>
                            <th>Code postale</th>
                            <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.data.map((val, key) => {return (
                          <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.firstname}</td>
                            <td>{val.mail}</td>
                            <td>{val.tel}</td>
                            <td>{val.adress}</td>
                            <td>{val.city}</td>
                            <td>{val.zipCode}</td>
                            <td><button>edit</button></td>
                          </tr>)})}
                      </tbody>
                  </table>
              </div>
              <div id='add-button'>
                <button>ajouter un utilisateur</button>
              </div>  
            </div>
        )
    }
}