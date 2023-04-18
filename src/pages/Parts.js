import React from 'react'
import { useState, useEffect } from 'react';
import '../css/Lesson.css';
import { Link } from 'react-router-dom';

function Parts() {

    const [parts, setParts] = useState([]);
    const [messageError, setMessageError] = useState(false);

    useEffect(() => {
          fetch(`${process.env.REACT_APP_API_PATH}/parts`)
          .then(response => response.json())
          .then(data => setParts(data))
    }, [])

    function deleteID(id) {
      fetch(`${process.env.REACT_APP_API_PATH}/parts/` + id, { method: 'DELETE' })
        .then(response => {
          if (response.status != 200) {
            console.log('test');
            setMessageError(true);
          }
        })
        .then(data => console.log(data))

      setMessageError(false);
    }

    return (
      <div>
        <div className='flex-wrap'>
            {parts.map((part) => (
                <div className='date-select-calendar flex-between' id={part.id} key={part.id} value={part.id}>
                    <p>{part.name}</p>
                    <div>
                      <button className='' onClick={() => deleteID(part.id)}>Delete</button>
                      <button type="submit" className='mar-left-10px'><Link to={"/modifier-parties/" + part.id}>Update</Link></button>
                    </div>
                </div>
            ))}
            {messageError && (
              <div className='error-delete'> Une erreur est survenu, veuillez effacer les exercices et cours en liant avec cette partie </div>
            )}
        </div>

        <Link to="/ajouter-parties"><button className="link-lesson-add mar-bottom-10px">Ajouter une partie</button></Link>
      </div>
    )
}

export default Parts;