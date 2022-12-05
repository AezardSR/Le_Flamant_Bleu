import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom'
import "../../css/ListUtilisateur.css"

function ListUtilisateur() {
          const identite = [
            { name: "Anom", firstname: "test", type: "partenaire", entreprise: "test", mail: "test@mail.fr", tel:"0000000" },
            { name: "Megha", firstname: "truc", mail: "truc@mail.fr" },
            { name: "Subham", firstname: "machin", mail: "maichin@mail.fr"},
          ]

          const searchBar = () => {};
          const [searchInput, setSearchInput] = useState("");

          const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
          };
          
          if (searchInput.length > 0) {
                identite.filter((identite) => {
              return identite.name.match(searchInput);
          });
          };

          return (
            <div>
                <Link to="/FormAddUser"><button className="link-lesson-add btn-user">Ajouter contact</button></Link>

                <div className="listing-user">
                    <input className="search-bar" type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />
                    <table className="table-user">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Type</th>
                            <th>Entreprise</th>
                            <th>Mail</th>
                            <th>Téléphone</th>
                        </tr>
                        {identite.map((identite, key) => (
                            <tr key={key}>
                              <td>{identite.name}</td>
                              <td>{identite.firstname}</td>
                              <td>{identite.type}</td>
                              <td>{identite.entreprise}</td>
                              <td>{identite.mail}</td>
                              <td>{identite.tel}</td>
                            </tr>
                          )
                        )}
                    </table>
                 </div>  
            </div>
        )
}

export default ListUtilisateur;