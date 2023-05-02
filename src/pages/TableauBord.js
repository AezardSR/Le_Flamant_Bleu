import React, {useState, useEffect } from 'react';
import '../css/styles.css';
import moment from "moment";
import 'moment/locale/fr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faPaste } from '@fortawesome/free-solid-svg-icons';

function TableauBord() {

    const [currentDate, setCurrentDate] = useState('');
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {  
        moment.locale('fr');
        var date = moment().utcOffset('+02:00').format('DD');
        var month = moment().utcOffset('+02:00').format('MMMM');

        setCurrentDate(date); 
        setCurrentMonth(month); 
    }, []);

    return (
        //DIV Parent de la page
        <div className="page-tableau-bord">
            <div className="tableau-bord">
                <div className="container-card-tb">
                    <div className="calendar-tb">
                        <a href="/calendrier">
                            <div className='background-planning'>
                                <p className="text-date">{currentDate}</p>
                                <p className="text-month">{currentMonth}</p>
                                <p>Planning</p>
                            </div>
                        </a>
                    </div>
                    <div className="calendar-tb">
                        <a href="/nos-actualites">
                            <div className='background-planning'>
                                <FontAwesomeIcon className='text-date' icon={faNewspaper} style={{marginBottom:20}}/>
                                <p>Actualités</p>
                            </div>
                        </a>
                    </div>
                    <div className="calendar-tb">
                        <a href="/annonces-emplois">
                            <div className='background-planning'>
                                <FontAwesomeIcon className='text-date' icon={faPaste} style={{marginBottom:20}} />
                                <p>Offres d'emplois</p>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default TableauBord;