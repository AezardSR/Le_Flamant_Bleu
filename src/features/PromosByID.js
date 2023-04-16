import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function PromoByID() {

    const [promotion, setPromotion] = useState([]);
    const [user, setUser] = useState([]);

    const { promotionID } = useParams();

    useEffect(() => {
            fetch('http://localhost:8000/api/promo-students/' + promotionID, { method: 'GET' })
            .then(response => response.json())
            .then(data => setPromotion(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:8000/api/user')
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])

    function getStudentName(promotionID) {
        const student = user.find((student) => student.id === promotionID);
        return student ? student.name : ' ... ';
    }

  return (
    <div>
        <h2>Liste des élèves de la promo {promotionID}</h2>

        <div className="listing-promotion">
            {promotion.map((promotions) => (
                <div id={promotions.id} key={promotions.id} value={promotions.id} className="box-promotion text-center date-select-calendar">
                    {getStudentName(promotions.students_id)}
                </div>
            ))}
        </div>
    </div>
  )
}
export default PromoByID