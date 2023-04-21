import React, { useState, useEffect, useContext } from 'react';
import {  useParams } from 'react-router-dom';
import '../css/styles.css';
import { ApiContext } from "../features/APIToken/ApiContext";

const UpdateEventPlanning = () => {

    const {requestAPI} = useContext(ApiContext);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);

    const [receiver, setReceiver] = useState([]);
    const [receiverID, setReceiverID] = useState('');

    const [created, setCreated] = useState([]);
    const [createdID, setCreatedID] = useState('');

    const [typeAppoitments, setTypeAppoitments] = useState([]);
    const [typeAppoitmentsID, setTypeAppoitmentsID] = useState('');

    const { appointmentID } = useParams();

    useEffect(() => {
        requestAPI('/user', 'GET',null)
            .then(response => response.json())
            .then(data => setReceiver(data))
            .then(data => setCreated(data))
    }, [])

    useEffect(() => {
        requestAPI('/appointment-types', 'GET',null)
            .then(response => response.json())
            .then(data => setTypeAppoitments(data))
    }, [])

    function updateAppointment(e) {
        e.preventDefault()
        requestAPI('/appointments' + appointmentID, 'PATCH',{titleDetails: title, descriptionDetails: description, dateDetails: date, receiver_id: receiverID, create_id: createdID, appointments_types_id: typeAppoitmentsID})
            .then(response => response.json())
            .then(data => console.log(data))
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
                <button className='btn btn-add-event-planning' onClick={updateAppointment}>Modifier</button>
            </div>
        </form>

      </div>
    )
}

export default UpdateEventPlanning