import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateJobsOffers = () => {
  const { jobOffersID } = useParams();

  const [jobOffers, setJobOffers] = useState({ name: '', dateOffers: '', description: '', link: '', user_id: '', partnerContacts_id: '' });

  const [userID, setUserID] = useState([]);
  const [partnerContactID, setPartnerContactID] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PATH}/job-offers/${jobOffersID}`)
      .then(response => response.json())
      .then(data => setJobOffers(data));

    fetch(`${process.env.REACT_APP_API_PATH}/user/`)
      .then(response => response.json())
      .then(data => setUserID(data));

    fetch(`${process.env.REACT_APP_API_PATH}/partner-contacts/`)
      .then(response => response.json())
      .then(data => setPartnerContactID(data));
  }, [jobOffersID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobOffers(prevJobOffers => ({ ...prevJobOffers, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: jobOffers.name, dateOffers: jobOffers.dateOffers, description: jobOffers.description, link: jobOffers.link, user_id: jobOffers.user_id, partnerContacts_id: jobOffers.partnerContacts_id})
    };
    fetch(`${process.env.REACT_APP_API_PATH}/job-offers/` + jobOffersID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="mar-vertical-10px mar-left-10px">Modifier une partie</h1>

      <form className="flex-column form-add" onSubmit={handleSubmit}>
        <div className="flex align-center justify-center form-add-element">
          <div className="mar-left-10px mar-vertical-10px">
            <label className="label-form" htmlFor="name">Nom à modifier</label>
            <input type="text" id="name" name="name" value={jobOffers.name} onChange={handleInputChange} />

            <div className="flex-column mar-left-10px mar-vertical-10px">
                <label className="label-form" htmlFor="link">Lien à modifier</label>
                <input type="text" id="link" name="link" value={jobOffers.link} onChange={handleInputChange} />
            </div>
          </div>
          <div className="flex-column mar-left-10px mar-vertical-10px">
            <label className="label-form" htmlFor="dateOffers">Date à modifier</label>
            <input type="date" id="dateOffers" name="dateOffers" value={jobOffers.dateOffers} onChange={handleInputChange} />
          
            <div className="flex-column mar-left-10px mar-vertical-10px">
                <label className="label-form" htmlFor="description">Contenu à modifier</label>
                <textarea id="description" name="description" value={jobOffers.description} onChange={handleInputChange} />
            </div>
          </div>
          <div className="flex-column mar-left-10px">
            <label className="label-form" htmlFor="user_id">User à modifier</label>
            <select className="form-select" id="user_id" name="user_id" value={jobOffers.user_id} onChange={handleInputChange}>
                <option value="">--Choisir une option--</option>
              {userID.map(user => (
                <option key={user.id} value={user.id}>{user.id} : {user.name} {user.firstname}</option>
              ))}
            </select>
            <label className="label-form" htmlFor="partnerContacts_id">Contact partenaire à modifier</label>
            <select className="form-select" id="partnerContacts_id" name="partnerContacts_id" value={jobOffers.partnerContacts_id} onChange={handleInputChange}>
                <option value="">--Choisir une option--</option>
              {partnerContactID.map(contact => (
                <option key={contact.id} value={contact.id}>{contact.id} : {contact.name} {contact.firstname}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="w-max-content mar-left-auto link-lesson-add mar-vertical-10px pointer" type='submit'>Modifier la partie</button>
      </form>
    </div>
  );
};

export default UpdateJobsOffers;
