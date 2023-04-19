import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateLesson = () => {
  const { lessonsID } = useParams();

  const [lesson, setLesson] = useState({ name: '', content: '', duration: '', parts_id: '' });
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/lessons/${lessonsID}`)
      .then(response => response.json())
      .then(data => setLesson(data));

    fetch('http://localhost:8000/api/parts/')
      .then(response => response.json())
      .then(data => setParts(data));
  }, [lessonsID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLesson(prevLesson => ({ ...prevLesson, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/lessons/${lessonsID}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lesson)
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
          <input type="text" id="name" name="name" value={lesson.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="content">Contenu :</label>
          <textarea id="content" name="content" value={lesson.content} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="duration">Durée :</label>
          <input type="text" id="duration" name="duration" value={lesson.duration} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="parts_id">Partie :</label>
          <select id="parts_id" name="parts_id" value={lesson.parts_id} onChange={handleInputChange}>
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

export default UpdateLesson;
