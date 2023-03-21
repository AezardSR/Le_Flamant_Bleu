import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';
import '../css/AddEventPlanning.css';

const AddEventPlanning = () => {

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
        fetch('http://localhost:8000/api/user')
        .then(response => response.json())
        .then(data => setReceiver(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:8000/api/user')
        .then(response => response.json())
        .then(data => setCreated(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:8000/api/appointment-types')
        .then(response => response.json())
        .then(data => setTypeAppoitments(data))
    }, [])

    const handleSubmit = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({titleDetails: title, descriptionDetails: description, dateDetails: date, receiver_id: receiverID, create_id: createdID, appointments_types_id: typeAppoitmentsID})
        };

        fetch('http://localhost:8000/api/appointments', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            event.preventDefault();
    }

    return (
      <div>

        <form className='form-add-event-planning'>
            <div className='add-event-date'>
                <input value={date} onChange={(event) => {setDate(event.target.value)}} name="dateOffers" type="date"></input>
            </div>

            <div className='add-event-description'>
                <input value={title} onChange={(event) => {setTitle(event.target.value)}} name="titleDetails" className='add-event-description-title' placeholder='Titre -'></input>
                <textarea value={description} onChange={(event) => {setDescription(event.target.value)}} name="descriptionDetails" placeholder='Détails -'></textarea>
            </div>

            <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setReceiverID(event.target.value)}} value={receiverID}>
                {receiver.map((invit) => (
                    <option key={invit.id} value={invit.id}>{invit.id} : {invit.name} {invit.firstname}</option>
                ))}
            </select>

            <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setCreatedID(event.target.value)}} value={createdID}>
                {created.map((createdBy) => (
                    <option key={createdBy.id} value={createdBy.id}>{createdBy.id} : {createdBy.name} {createdBy.firstname}</option>
                ))}
            </select>

            <select className="p-5px w-100 h-45px" style={{marginBottom: '20px', fontSize: 'Medium'}} onChange={(event) => {setTypeAppoitmentsID(event.target.value)}} value={typeAppoitmentsID}>
                {typeAppoitments.map((typeRDV) => (
                    <option key={typeRDV.id} value={typeRDV.id}>{typeRDV.id} : {typeRDV.name}</option>
                ))}
            </select>

            <div>
                <Link to="/calendrier"><button onClick={handleSubmit} type="submit" className="btn btn-add-event-planning">Ajouter</button></Link>
            </div>
        </form>
      </div>
    )
}

export default AddEventPlanning