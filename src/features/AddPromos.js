import { getByTitle } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const AddPromos = () => {

  const [name, setName] = useState([]);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [duration, setPDuration] = useState([]);
  const [formationTypes, setFormationTypes] = useState([]);
  const [formationTypesID, setFormationTypesID] = useState('');
  const [formationFormats, setFormationFormats] = useState([]);
  const [formationFormatsID, setFormationFormatsID] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/promo-types')
      .then(response => response.json())
      .then(data => setFormationTypes(data))
    
    fetch('http://localhost:8000/api/promo-formats')
      .then(response => response.json())
      .then(data => setFormationFormats(data))
  }, [])

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: name, startDate: startDate, endDate: endDate, duration: duration, formationsTypes_id: formationTypesID, formationsFormats_id: formationFormatsID})
    };

    fetch('http://localhost:8000/api/promos', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        event.preventDefault();
  }

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nom :
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Date de début :
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
          </label>
          <br />
          <label>
            Date de fin :
            <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
          </label>
          <br />
          <label>
            Durée :
            <input type="number" value={duration} onChange={e => setPDuration(e.target.value)} />
          </label>
          <br />
          <label>
            Type de formation :
            <select value={formationTypesID} onChange={e => setFormationTypesID(e.target.value)}>
              <option value="">--Choisir une option--</option>
              {formationTypes.map((type) => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Format de formation :
            <select value={formationFormatsID} onChange={e => setFormationFormatsID(e.target.value)}>
              <option value="">--Choisir une option--</option>
              {formationFormats.map((format) => (
                <option key={format.id} value={format.id}>{format.name}</option>
              ))}
            </select>
          </label>
          <br />
          <input type="submit" value="Enregistrer" />
        </form>
      </div>
    )
  }
  
export default AddPromos