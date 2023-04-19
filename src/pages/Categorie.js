import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faCalendar, faGraduationCap, faAtom} from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/styles.css';

function Categorie() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
          fetch('http://localhost:8000/api/categories')
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