import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

const ActualitesID = () => {

  const { actualitesID } = useParams();
  const {requestAPI} = useContext(ApiContext);

  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    requestAPI('/actualites/' + actualitesID, 'GET',null)
      .then(response => response.json())
      .then(data => setActualites(data));

  }, []);

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
