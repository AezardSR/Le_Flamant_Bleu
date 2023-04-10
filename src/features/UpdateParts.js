import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateParts = () => {
  const { partsID } = useParams();

  const [parts, setParts] = useState({ name: '', categories_id: '' });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/parts/${partsID}`)
      .then(response => response.json())
      .then(data => setParts(data));

    fetch('http://localhost:8000/api/categories/')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, [partsID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setParts(prevParts => ({ ...prevParts, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/parts/${partsID}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parts)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Modifier une leçon</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" value={parts.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="categories_id">Catégories :</label>
          <select id="categories_id" name="categories_id" value={parts.categories_id} onChange={handleInputChange}>
            {parts.map(part => (
              <option key={part.id} value={part.id}>{part.name}</option>
            ))}
          </select>
        </div>
        <button type="submit">Modifier la leçon</button>
      </form>
    </div>
  );
};

export default UpdateParts;
