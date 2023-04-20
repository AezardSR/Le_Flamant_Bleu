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
      <div className='actualite-full'>
        <h1 className="mar-top-10px mar-left-10px actualite-title">{actualites.title}</h1>
        <p className='actualite-detail'>{actualites.publication_date}- {actualites.author}</p>

        <div>
          <p className='actualite-content'>{actualites.content}</p>
        </div>
      </div>

    </div>
  );
};

export default ActualitesID;
