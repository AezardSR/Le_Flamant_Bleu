import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

const UpdateLesson = () => {
  const { lessonsID } = useParams();
  const {requestAPI} = useContext(ApiContext);

  const [lesson, setLesson] = useState({ name: '', content: '', duration: '', parts_id: '' });
  const [parts, setParts] = useState([]);

  useEffect(() => {
    requestAPI('/lessons/' + lessonsID, 'GET',null)
      .then(response => response.json())
      .then(data => setLesson(data));

    requestAPI('/parts', 'GET',null)
      .then(response => response.json())
      .then(data => setParts(data));
  }, [lessonsID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLesson(prevLesson => ({ ...prevLesson, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/lessons/' + lessonsID, 'PATCH', lesson)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier une leçon</h1>
      <form className="flex align-center justify-center form-add-element" onSubmit={handleSubmit}>
        <div className="flex-column w-500px mar-left-10px">
          <div className="mar-vertical-10px">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" value={lesson.name} onChange={handleInputChange} />
          </div>
          <div className="mar-vertical-10px">
            <label htmlFor="content">Contenu :</label>
            <textarea id="content" name="content" value={lesson.content} onChange={handleInputChange} />
          </div>
          <div className="mar-vertical-10px">
            <label htmlFor="duration">Durée :</label>
            <input type="text" id="duration" name="duration" value={lesson.duration} onChange={handleInputChange} />
          </div>
          <div className="mar-vertical-10px">
            <label htmlFor="parts_id">Partie :</label>
            <select id="parts_id" name="parts_id" value={lesson.parts_id} onChange={handleInputChange}>
              {parts.map(part => (
                <option key={part.id} value={part.id}>{part.name}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer">Modifier la leçon</button>
      </form>
    </div>
  );
};

export default UpdateLesson;
