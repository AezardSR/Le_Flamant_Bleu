import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../../css/ListUtilisateur.css"

export default function ListUtilisateur() {
          const identite = [
            { name: "Anom", firstname: "test", type: "partenaire", entreprise: "test", mail: "test@mail.fr", tel:"0000000" },
            { name: "Megha", firstname: "truc", mail: "truc@mail.fr" },
            { name: "Subham", firstname: "machin", mail: "maichin@mail.fr"},
          ]

          const searchBar = () => {}
          const [searchInput, setSearchInput] = useState("");

          const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
          };
          
          if (searchInput.length > 0) {
                identite.filter((identite) => {
              return identite.name.match(searchInput);
          });
          }

          return (
            <div>
                <Link to="/FormAddUser"><button className="link-lesson-add">Ajouter contact</button></Link>

                <div>
                  {/* Barre de recherche de tableau */}
                  <input type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />
                </div>

                <table style={{width:'100%'}}>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Type</th>
                        <th>Entreprise</th>
                        <th>Mail</th>
                        <th>Téléphone</th>
                    </tr>
                    {this.data.map((identite, key) => {
                      return (
                        <tr key={key}>
                          <td>{identite.name}</td>
                          <td>{identite.firstname}</td>
                          <td>{identite.type}</td>
                          <td>{identite.entreprise}</td>
                          <td>{identite.mail}</td>
                          <td>{identite.tel}</td>
                        </tr>
                      )
                    })}
                </table>
            </div>
        )
}