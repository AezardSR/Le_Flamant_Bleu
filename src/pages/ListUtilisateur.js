import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../css/styles.css';

function ListUtilisateur() {
          const [contact, setContact] = useState([]);
          const [user, setUser] = useState([]);

          useEffect(() => {
            Promise.all([
              fetch(`${process.env.REACT_APP_API_PATH}/partner-contacts`),
              fetch(`${process.env.REACT_APP_API_PATH}/user`),
            ])
              .then(([resContact, resUser]) =>
                Promise.all([resContact.json(), resUser.json()])  
              )
              .then(([dataContact, dataUser]) => {
                setContact(dataContact);
                setUser(dataUser);
              })
          }, [])

          const searchBar = () => {};
          const [searchInput, setSearchInput] = useState("");

          const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
          };
          
          if (searchInput.length > 0) {
              contact.filter((contact) => {
              return contact.name.match(searchInput);
          });
          };

          return (
            <div>
                <Link to="/form-add-user"><button className="link-lesson-add btn-user">Ajouter contact</button></Link>

                <div className="listing-user">
                    <input className="search-bar" type="text" placeholder='Recherche...' onChange={handleChange} value={searchInput} />
                    <table className="table-user">
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Type</th>
                            <th>Entreprise</th>
                            <th>Mail</th>
                            <th>Téléphone</th>
                        </tr>
                        {contact.map((contact, key) => (
                            <tr key={key}>
                              <td>{contact.name}</td>
                              <td>{contact.firstname}</td>
                              <td>{contact.id_user}</td>
                              <td>{contact.nameCompany}</td>
                              <td>{contact.mail}</td>
                              <td>{contact.tel}</td>
                            </tr>
                          )
                        )}
                    </table>
                 </div>  
            </div>
        )
}

export default ListUtilisateur;