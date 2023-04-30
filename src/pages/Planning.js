import React from 'react'
import Calendar from 'react-calendar';
import { useState, useEffect, useContext } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../css/styles.css';
import { Link } from 'react-router-dom';
import { ApiContext } from "../features/APIToken/ApiContext";

function Planning() {
    const {requestAPI} = useContext(ApiContext);
    const [date, setDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        requestAPI('/appointments', 'GET',null)
          .then(response => response.json())
          .then(data => setAppointments(data))
    }, [])

    function deleteID(id) {
      requestAPI('/appointments' + id, 'DELETE',null)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div className='responsive-calendar'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date}  />

                <div className='add-event-planning btn-add'>
                    <Link to='/add-event-planning'>+</Link>
                </div>
            </div>
            <div className='calendar-appointments'>
                {appointments.map((appointment) => (
                    <div id={appointment.id} key={appointment.id} value={appointment.id} className='text-center date-select-calendar'>
                        <p className='planning-date'>{appointment.dateDetails}</p>
                        <p className="date-select-formation planning-title">{appointment.titleDetails}</p>
                        <p className="date-select-formation planning-details">{appointment.descriptionDetails}</p>
                        <button className='btn-delete' onClick={() => deleteID(appointment.id)}>Effacer</button>
                        <button type="submit" className='btn-update'><Link to={"/update/" + appointment.id}>Modifier</Link></button>
                    </div>
                ))}
            </div>
      </div>
    )
}

export default Planning;