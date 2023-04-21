import React from 'react'
import { useState, useEffect, useContext } from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

function Parts() {

    const {requestAPI} = useContext(ApiContext);
    const [parts, setParts] = useState([]);
    const [messageError, setMessageError] = useState(false);

    useEffect(() => {
      requestAPI('/parts', 'GET',null)
          .then(response => response.json())
          .then(data => setParts(data))
    }, [])

    function deleteID(id) {
      //Prend en compte la méthode Delete
      requestAPI('/parts/' + id, 'DELETE', null)
        //Si la réponse est différente de 200 alors remplace MessageError de false en true
        .then(response => {
          if (response.status != 200) {
            setMessageError(true);
          }
        })
        .then(data => console.log(data))

      //Remet le messageError en false au clique sur un autre bouton delete
      setMessageError(false);
    }

    return (
      <div>
        <div className='flex-wrap'>
            {parts.map((part) => (
                <div className='block-categories-parts flex-between' id={part.id} key={part.id} value={part.id}>
                    <p>{part.name}</p>
                    <div className='flex'>
                      <button className='button-delete pointer' onClick={() => deleteID(part.id)}>Delete</button>
                      <button type="submit" className='button-update mar-left-10px pointer'><Link to={"/modifier-parties/" + part.id}>Update</Link></button>
                    </div>
                </div>
            ))}
            {/* Affiche le messageError si setMesssageError = true */}
            {messageError && (
              <div className='error-delete'> Une erreur est survenu, veuillez effacer les exercices et cours en lien avec la partie </div>
            )}
        </div>

        <Link to="/ajouter-parties"><button className="link-lesson-add mar-vertical-10px pointer">Ajouter une partie</button></Link>
      </div>
    )
}

export default Parts;