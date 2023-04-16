import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdatePromos = () => {
  const { promotionID } = useParams();

  const [promo, setPromo] = useState({ name: '', startDate: '', endDate: '', duration: '', formationsTypes_id: '', formationsFormats_id: '' });
  const [types, setTypes] = useState([]);
  const [formats, setFormats] = useState([]);

  const [existingPromo, setExistingPromo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/promos/${promotionID}`)
        .then(response => response.json())
        .then(data => setExistingPromo(data))
        .catch(error => console.error(error));
  }, [promotionID]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/promos/${promotionID}`)
      .then(response => response.json())
      .then(data => setPromo(data));

    fetch('http://localhost:8000/api/promo-types/')
      .then(response => response.json())
      .then(data => setTypes(data));

    fetch('http://localhost:8000/api/promo-formats/')
      .then(response => response.json())
      .then(data => setFormats(data));
  }, [promotionID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPromo(prevPromo => ({ ...prevPromo, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = {
      name: promo.name,
      startDate: promo.startDate !== '' ? promo.startDate : existingPromo.startDate,
      endDate: promo.endDate !== '' ? promo.endDate : existingPromo.endDate,
      duration: promo.duration,
      formationsTypes_id: promo.formationsTypes_id,
      formationsFormats_id: promo.formationsFormats_id
    };
  
    fetch(`http://localhost:8000/api/promos/${promotionID}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Nom :
            <input type="text" name="name" value={promo.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
            Date de début :
            <input type="date" name="startDate" value={promo.startDate} onChange={handleInputChange} />
        </label>
        <br />
        <label>
            Date de fin :
            <input type="date" name="endDate" value={promo.endDate} onChange={handleInputChange} />
        </label>
        <br />
        <label>
            Durée :
            <input type="number" name="duration" value={promo.duration} onChange={handleInputChange} />
        </label>
        <br />
        <label>
            Type de formation :
            <select name="formationsTypes_id" value={promo.formationsTypes_id} onChange={handleInputChange}>
            <option value="">--Choisir une option--</option>
            {types.map((type) => (
                <option key={type.id} value={type.id}>{type.name}</option>
            ))}
            </select>
        </label>
        <br />
        <label>
            Format de formation :
            <select name="formationsFormats_id" value={promo.formationsFormats_id} onChange={handleInputChange}>
            <option value="">--Choisir une option--</option>
            {formats.map((format) => (
                <option key={format.id} value={format.id}>{format.name}</option>
            ))}
            </select>
        </label>
        <br />
        <input type="submit" value="Enregistrer" />
        </form>
    </div>
  );
};

export default UpdatePromos;
