import React, { Component } from 'react'
import "../css/ListUtilisateur.css"


export default class ListUtilisateur extends Component {
    data = [
        { name: "Anom", firstname: "test", mail: "test@mail.fr" },
        { name: "Megha", firstname: "truc", mail: "truc@mail.fr" },
        { name: "Subham", firstname: "machin", mail: "maichin@mail.fr"},
      ]
    render(
        
    ) {
        return (
            <div>
                <table>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>mail</th>
                    </tr>
                    {this.data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.firstname}</td>
              <td>{val.mail}</td>
            </tr>
          )
        })}
                </table>
            </div>
        )
    }
}