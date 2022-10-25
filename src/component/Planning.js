import React, { Component } from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../css/Calendar.css';
import { Link } from 'react-router-dom';

export default function Planning() {
    const [date, setDate] = useState(new Date());
    return (
      <div>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date}  />
            </div>
            <div className='text-center date-select-calendar'>
                <p className='planning-date'>{date.toDateString()}</p>
                <p className="date-select-formation">Cours 'Nom de la formation' de 'minHeure' à 'maxHeure' </p>
            </div>
            <div className='text-center date-select-calendar'>
                <p className='planning-date'>Date de l'event ajouter</p>
                <p className="date-select-formation planning-title">Titre de l'event ajouter</p>
                <p className="date-select-formation planning-details">Détails de l'event ajouter</p>
            </div>
            <div className='add-event-planning date-select-calendar'>
                <Link to='/add-event-planning'>+ Ajouter un évènement</Link>
            </div>
      </div>
    )
}
