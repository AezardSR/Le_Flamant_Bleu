import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../css/styles.css';
import { ApiContext } from "../features/APIToken/ApiContext";

const AddJobsAnnouncements = () => {

  const {requestAPI} = useContext(ApiContext);
  const [name, setName] = useState([]);
  const [dateOffers, setDateOffers] = useState([]);
  const [description, setDescription] = useState([]);
  const [link, setLink] = useState([]);

  const [user, setUser] = useState([]);
  const [userID, setUserID] = useState([]);

  const [partnerContacts, setPartnerContacts] = useState([]);
  const [partnerContactsID, setPartnerContactsID] = useState([]);

  useEffect(() => {
    requestAPI('/user', 'GET',null)
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  useEffect(() => {
    requestAPI('/partner-contacts', 'GET',null)
      .then(response => response.json())
      .then(data => setPartnerContacts(data))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/job-offers', 'POST', {name: name, dateOffers: dateOffers, description: description, link: link, user_id: userID, partnerContacts_id: partnerContactsID})
        .then(response => response.json())
        .then(data => console.log(data))
  }
  
    return (
      <div>
        <form className='form-jobs'>
            <div className='form-jobs-first-column'>
                <input value={dateOffers} onChange={(event) => {setDateOffers(event.target.value)}} name="dateOffers" type="date"></input>
                <input value={link} onChange={(event) => {setLink(event.target.value)}} name="link" className='form-jobs-url' placeholder="https://"></input>
            </div>

            <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setUserID(event.target.value)}} value={userID}>
              <option value="">--Choisir une option--</option>
              {user.map((createdBy) => (
                <option key={createdBy.id} value={createdBy.id}>{createdBy.id} : {createdBy.name}</option>
              ))}
            </select>

            <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setPartnerContactsID(event.target.value)}} value={partnerContactsID}>
              <option value="">--Choisir une option--</option>
              {partnerContacts.map((entreprise) => (
                <option key={entreprise.id} value={entreprise.id}>{entreprise.id} : {entreprise.name} {entreprise.firstname}</option>
              ))}
            </select>

            <input value={name} onChange={(event) => {setName(event.target.value)}} name="name" className='form-jobs-title' placeholder="Insérer titre"></input>
            <textarea value={description} onChange={(event) => {setDescription(event.target.value)}} name="description" className='form-jobs-description' placeholder="Description de l'annonce"></textarea>

            <Link to="/annonces-emplois"><button onClick={handleSubmit} type="submit" className="btn btn-form-jobs">Ajouter</button></Link>
        </form>

      </div>
    )
}

export default AddJobsAnnouncements;