import React from 'react'
import { useState, useEffect } from 'react';
import '../css/Lesson.css';
import { Link } from 'react-router-dom';

function Parts() {

    const [parts, setParts] = useState([]);

    useEffect(() => {
          fetch(`${process.env.REACT_APP_API_PATH}/parts`)
          .then(response => response.json())
          .then(data => setParts(data))
    }, [])

    function deleteID(id) {
      fetch(`${process.env.REACT_APP_API_PATH}/parts/` + id, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div>
        <div>
            {parts.map((part) => (
                <div id={part.id} key={part.id} value={part.id}>
                    <p>{part.name}</p>
                    <button className='btn-delete' onClick={() => deleteID(part.id)}>Delete</button>
                    <button type="submit" className='btn-update'><Link to={"/modifier-parties/" + part.id}>Update</Link></button>
                </div>
            ))}
        </div>

        <Link to="/ajouter-parties"><button className="link-lesson-add mar-bottom-10px">Ajouter une partie</button></Link>
      </div>
    )
}

export default Parts;