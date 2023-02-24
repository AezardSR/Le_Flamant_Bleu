import React from 'react'
import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../css/Calendar.css';
import { Link } from 'react-router-dom';

function Planning() {
    const [date, setDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
          fetch('http://localhost:8000/api/appointments/', { method: 'GET' })
          .then(response => response.json())
          .then(data => setAppointments(data))
    }, [])

    function deleteID(id) {
      fetch('http://localhost:8000/api/appointments/' + id, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    return (
      <div>
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
                        <button className='btn-delete' onClick={() => deleteID(appointment.id)}>Delete</button>
                        <button type="submit" className='btn-update'><Link to={"/update/" + appointment.id}>Update</Link></button>
                    </div>
                ))}
            </div>
      </div>
    )
}

export default Planning;