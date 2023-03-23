import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import '../css/Lesson.css';

function SeeExercices() {

    const [exercices, setExercices] = useState(null);

    const { exercicesID } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/exercices/${exercicesID}`)
          .then(response => response.json())
          .then(data => setExercices(data))
      }, [exercicesID])
    
      if (!exercices) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <h2>{exercices.name}</h2>
          <p>{exercices.content}</p>
        </div>
      );
}

export default SeeExercices;
