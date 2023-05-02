import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

const UpdateJobsOffers = () => {
  const { jobOffersID } = useParams();
  const {requestAPI} = useContext(ApiContext);

  const [jobOffers, setJobOffers] = useState({ name: '', dateOffers: '', description: '', link: '', user_id: '', partnerContacts_id: '' });

  const [userID, setUserID] = useState([]);
  const [partnerContactID, setPartnerContactID] = useState([]);

  useEffect(() => {
    requestAPI('/job-offers/' + jobOffersID, 'GET',null)
      .then(response => response.json())
      .then(data => setJobOffers(data));

    requestAPI('/user', 'GET',null)
      .then(response => response.json())
      .then(data => setUserID(data));

    requestAPI('/partner-contacts', 'GET',null)
      .then(response => response.json())
      .then(data => setPartnerContactID(data));
  }, [jobOffersID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobOffers(prevJobOffers => ({ ...prevJobOffers, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/job-offers/' + jobOffersID, 'PATCH', {name: jobOffers.name, dateOffers: jobOffers.dateOffers, description: jobOffers.description, link: jobOffers.link, user_id: jobOffers.user_id, partnerContacts_id: jobOffers.partnerContacts_id})
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="title-lessons">Modifier une annonce</h1>
      <div className='form-container'>
      <form className="flex-column form-add" onSubmit={handleSubmit}>
            <div className='container-label-input-form'>
            <label className="label-form" htmlFor="name">Nom à modifier</label>
            <input type="text" id="name" name="name" value={jobOffers.name} onChange={handleInputChange} />
            </div>
            <div className='container-label-input-form'>
                <label className="label-form" htmlFor="link">Lien à modifier</label>
                <input type="text" id="link" name="link" value={jobOffers.link} onChange={handleInputChange} />
            </div>

          <div className='container-label-input-form'>
              <label className="label-form" htmlFor="dateOffers">Date à modifier</label>
              <input type="date" id="dateOffers" name="dateOffers" value={jobOffers.dateOffers} onChange={handleInputChange} />
            </div>

            <div className="container-label-input-form">
                <label className="label-form" htmlFor="description">Contenu à modifier</label>
                <textarea id="description" name="description" value={jobOffers.description} onChange={handleInputChange} />
            </div>

            <div className='container-label-input-form'>
            <label className="label-form" htmlFor="user_id">User à modifier</label>
            <select className="form-select" id="user_id" name="user_id" value={jobOffers.user_id} onChange={handleInputChange}>
                <option value="">--Choisir une option--</option>
              {userID.map(user => (
                <option key={user.id} value={user.id}>{user.id} : {user.name} {user.firstname}</option>
              ))}
            </select>
            </div>

            <div className='container-label-input-form'>
            <label className="label-form" htmlFor="partnerContacts_id">Contact partenaire à modifier</label>
            <select className="form-select" id="partnerContacts_id" name="partnerContacts_id" value={jobOffers.partnerContacts_id} onChange={handleInputChange}>
                <option value="">--Choisir une option--</option>
              {partnerContactID.map(contact => (
                <option key={contact.id} value={contact.id}>{contact.id} : {contact.name} {contact.firstname}</option>
              ))}
            </select>
            </div>
            <div className='btn-container'>
              <button className="btn-connexion pointer" type='submit'>Modifier l'annonce</button>
            </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateJobsOffers;
