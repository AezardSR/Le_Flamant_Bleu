import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

const JobOffersID = () => {

  const { JobOffersID } = useParams();
  const {requestAPI} = useContext(ApiContext);

  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    requestAPI('/job-offers/' + JobOffersID, 'GET',null)
      .then(response => response.json())
      .then(data => setJobOffers(data));

  }, [JobOffersID]);

  return (
    <div>
      <div className='actualite-full'>
        <h1 className="mar-top-10px mar-left-10px actualite-title">{jobOffers.name}</h1>
        <p className='actualite-detail'>{jobOffers.dateOffers}</p>

        <div>
          <p className='actualite-content'>{jobOffers.description}</p>
        </div>

        <div>
          <a className='url-redirection' href={jobOffers.link}>Intéressé(e) ? Plus de détails ici !</a>
        </div>
      </div>

    </div>
  );
};

export default JobOffersID;
