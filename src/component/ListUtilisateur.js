import React, { Component } from 'react'
import "../css/ListUtilisateur.css"


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
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},{ name: "Subham", firstname: "machin", mail: "maichin@mail.fr", tel: "0603035014", adress:"21 Place Bertrand Labarre", city:"Noyon", zipCode:"60400"},
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
            <div>
              <div id="table-container">
                  <table>
                      <tr>  
                          <th>Nom</th>
                          <th>Prénom</th>
                          <th>Mail</th>
                          <th>Téléphone</th>
                          <th>Adresse</th>
                          <th>Ville</th>
                          <th>Code postale</th>
                      </tr>
                      {this.data.map((val, key) => {return (
                        <tr key={key}>
                          <td>{val.name}</td>
                          <td>{val.firstname}</td>
                          <td>{val.mail}</td>
                          <td>{val.tel}</td>
                          <td>{val.adress}</td>
                          <td>{val.city}</td>
                          <td>{val.zipCode}</td>
                          <td><button></button></td>
                        </tr>)})}
                  </table>
              </div>
            </div>
        )
    }
}