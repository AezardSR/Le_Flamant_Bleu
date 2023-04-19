import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ActualitesID = () => {

  const { actualitesID } = useParams();

  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PATH}/actualites/` + actualitesID)
      .then(response => response.json())
      .then(data => setActualites(data));

  }, [actualitesID]);

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">{actualites.title}</h1>

      <div>
        <p>{actualites.content}</p>

        <p><span>{actualites.publication_date}</span><span>- {actualites.author}</span></p>
      </div>

    </div>
  );
};

export default ActualitesID;
