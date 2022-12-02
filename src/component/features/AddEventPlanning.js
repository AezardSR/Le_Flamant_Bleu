import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';
import '../../css/AddEventPlanning.css';

export function AddEventPlanning() {
    const [dateEvent, onChange] = useState(new Date());
    return (
      <div>

        <form className='form-add-event-planning'>
            <div className='add-event-date'>
                <DatePicker onChange={onChange} value={dateEvent} />
                {/* <p>{dateEvent.toDateString()}</p> */}
            </div>

            <div className='add-event-description'>
                <input className='add-event-description-title' placeholder='Titre -'></input>
                <textarea placeholder='Détails -'></textarea>
            </div>

            <div>
                <Link to="/calendrier"><button type="submit" className="btn btn-add-event-planning">Ajouter</button></Link>
            </div>
        </form>

      </div>
    )
}

export default AddEventPlanning