import React, { Component } from 'react'
import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../../css/Calendar.css';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

export default function Planning() {
    const [date, setDate] = useState(new Date());

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        Promise.all([
          fetch('http://localhost:8000/api/appointments'),
        ])
          .then(([resAppointments]) =>
            Promise.all([resAppointments.json()])  
          )
          .then(([dataAppointments]) => {
            setAppointments(dataAppointments);
          })
      })
    return (
      <div>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date}  />
            </div>
            {/* <div className='text-center date-select-calendar'>
                <p className='planning-date'>{date.toDateString()}</p>
                <p className="date-select-formation">Cours 'Nom de la formation' de 'minHeure' à 'maxHeure' </p>
            </div> */}
            {appointments.map((appointments) => (
                <div className='text-center date-select-calendar'>
                <p className='planning-date'>{appointments.dateDetails}</p>
                <p className="date-select-formation planning-title">{appointments.titleDetails}</p>
                <p className="date-select-formation planning-details">{appointments.descriptionDetails}</p>
                </div>
                
            ))}
            <div className='add-event-planning date-select-calendar'>
                <Link to='/add-event-planning'>+ Ajouter un évènement</Link>
            </div>
      </div>
    )
}
