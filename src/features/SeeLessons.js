import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import '../css/Lesson.css';

function SeeLessons() {

    const [lesson, setLesson] = useState(null);

    const { lessonsID } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/lessons/${lessonsID}`)
          .then(response => response.json())
          .then(data => setLesson(data))
      }, [lessonsID])
    
      if (!lesson) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <h2>{lesson.name}</h2>
          <p>{lesson.content}</p>
        </div>
      );
}

export default SeeLessons;
