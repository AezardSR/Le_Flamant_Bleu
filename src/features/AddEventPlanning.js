import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { ApiContext } from '../features/APIToken/ApiContext';


const AddEventPlanning = () => {
    const {requestAPI} = useContext(ApiContext);

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);

    const [receiver, setReceiver] = useState([]);
    const [receiverID, setReceiverID] = useState([]);

    const [created, setCreated] = useState([]);
    const [createdID, setCreatedID] = useState([]);

    const [typeAppoitments, setTypeAppoitments] = useState([]);
    const [typeAppoitmentsID, setTypeAppoitmentsID] = useState([]);

    useEffect(() => {
        requestAPI('/user', 'GET',null)
        .then(response => response.json())
        .then(data => {
            setReceiver(data)
            setCreated(data)
        }).catch(error => console.log(error))
    }, [])

    useEffect(() => {
        requestAPI('/appointment-types', 'GET',null)
        .then(response => response.json())
        .then(data => setTypeAppoitments(data))
        .catch(error => console.log(error))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        requestAPI('/appointments', 'POST', {titleDetails: title, descriptionDetails: description, dateDetails: date, receiver_id: receiverID, create_id: createdID, appointments_types_id: typeAppoitmentsID})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    return (
      <div>

        <h1 className="mar-vertical-10px mar-left-10px">Ajouter un rendez-vous</h1>

        <form className='form-add-event-planning'>
            <div className='flex align-center'>
                <div className='add-event-date'>
                    <input value={date} onChange={(event) => {setDate(event.target.value)}} name="dateOffers" type="date"></input>
                </div>
                <div>
                    <label>Reçu par</label>
                    <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setCreatedID(event.target.value)}} value={createdID}>
                        <option value="">--Choisir une option--</option>
                        {created.map((createdBy) => (
                            <option key={createdBy.id} value={createdBy.id}>{createdBy.id} : {createdBy.name} {createdBy.firstname}</option>
                        ))}
                    </select>

                    <label>L'invité</label>
                    <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setReceiverID(event.target.value)}} value={receiverID}>
                        <option value="">--Choisir une option--</option>
                        {receiver.map((invit) => (
                            <option key={invit.id} value={invit.id}>{invit.id} : {invit.name} {invit.firstname}</option>
                        ))}
                    </select>

                    <label>Type de rendez-vous</label>
                    <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setTypeAppoitmentsID(event.target.value)}} value={typeAppoitmentsID}>
                        <option value="">--Choisir une option--</option>
                        {typeAppoitments.map((typeRDV) => (
                            <option key={typeRDV.id} value={typeRDV.id}>{typeRDV.id} : {typeRDV.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            

            <div className='add-event-description'>
                <input value={title} onChange={(event) => {setTitle(event.target.value)}} name="titleDetails" className='add-event-description-title' placeholder='Titre -'></input>
                <textarea value={description} onChange={(event) => {setDescription(event.target.value)}} name="descriptionDetails" placeholder='Détails -'></textarea>
            </div>

            

            <div>
                <Link to="/calendrier"><button onClick={handleSubmit} type="submit" className="btn btn-add-event-planning">Ajouter</button></Link>
            </div>
        </form>
      </div>
    )
}

export default AddEventPlanning