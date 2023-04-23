import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

const UpdateExercices = () => {
  const { exercicesID } = useParams();
  const {requestAPI} = useContext(ApiContext);

  const [exercice, setExercice] = useState({ name: '', content: '', image: '', file: '', parts_id: '' });
  const [parts, setParts] = useState([]);

  useEffect(() => {
    requestAPI('/exercices/' + exercicesID, 'GET',null)
      .then(response => response.json())
      .then(data => setExercice(data));

    requestAPI('/parts', 'GET',null)
      .then(response => response.json())
      .then(data => setParts(data));
  }, [exercicesID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExercice(prevExercice => ({ ...prevExercice, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/exercices/' + exercicesID, 'PATCH', exercice)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Modifier une exercice</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" value={exercice.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="content">Contenu :</label>
          <textarea id="content" name="content" value={exercice.content} onChange={handleInputChange} />
        </div>
        {/* <div>
          <label htmlFor="image">image :</label>
          <input type="text" id="image" name="image" value={exercice.image} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="file">File :</label>
          <input type="text" id="file" name="file" value={exercice.file} onChange={handleInputChange} />
        </div> */}
        <div>
          <label htmlFor="parts_id">Partie :</label>
          <select id="parts_id" name="parts_id" value={exercice.parts_id} onChange={handleInputChange}>
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

export default UpdateExercices;
