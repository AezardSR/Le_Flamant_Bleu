import React from 'react'
import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../css/Lesson.css';
import { Link } from 'react-router-dom';

function Categorie() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
          fetch('http://localhost:8000/api/categories/', { method: 'GET' })
          .then(response => response.json())
          .then(data => setCategories(data))
    }, [])

    function deleteID(id) {
      fetch('http://localhost:8000/api/categories/' + id, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div>
        <div>
            {categories.map((categorie) => (
                <div id={categorie.id} key={categorie.id} value={categorie.id}>
                    <p>{categorie.categorie}</p>
                    <button className='btn-delete' onClick={() => deleteID(categorie.id)}>Delete</button>
                    <button type="submit" className='btn-update'><Link to={"/modifier-categorie/" + categorie.id}>Update</Link></button>
                </div>
            ))}
        </div>

        <Link to="/ajouter-categorie"><button className="link-lesson-add mar-bottom-10px">Ajouter une catégorie</button></Link>
      </div>
    )
}

export default Categorie;