import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Promo() {

const [promotion, setPromotion] = useState([]);

useEffect(() => {
        fetch('http://localhost:8000/api/promos', { method: 'GET' })
        .then(response => response.json())
        .then(data => setPromotion(data))
}, [])

function deleteIDPromo(id) {
  if (window.confirm("Êtes-vous sûr de vouloir supprimer cette promo ?")) {
      fetch('http://localhost:8000/api/promos/' + id, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => console.log(data))
  }
}

  return (
    <div>
        <h2>Liste des promos</h2>

        <div className="listing-promotion">
            {promotion.map((promotions) => (
            <div id={promotions.id} key={promotions.id} value={promotions.id} className="box-promotion text-center date-select-calendar">
                <p className='planning-date'>{promotions.name}</p>
                <button type="submit"><Link to={"/update-promotion/" + promotions.id}>Update</Link></button>
                <button type="submit"><Link to={"/voir-promotion/" + promotions.id}>Voir les élèves</Link></button>
                <button className='btn-delete' onClick={() => deleteIDPromo(promotions.id)}>Delete</button>
            </div>
            ))}
        </div>

        <Link to="/ajouter-promotion">Ajouter une promotion</Link>
    </div>
  )
}
export default Promo