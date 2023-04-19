import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/styles.css';
import moment from "moment";
import 'moment/locale/fr';
import Calendrier from '../assets/img/calendrier.png'
import Emploi from '../assets/img/emploi.jpg'
import News from '../assets/img/news.jpg'

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
                <div className="left-tb">
                    <div className="calendar-tb">
                        <Link to="/calendrier">
                            <div className='background-planning'>
                                <p className="text-date">{currentDate}</p>
                                <p className="text-month">{currentMonth}</p>
                                <p>Planning</p>
                            </div>
                        </Link>
                    </div>
                    <div className="news-tb zoom-img">
                        <Link to="/annonces-emplois">
                            <div className="article-table-bord">
                                <img src={Emploi} alt="News 1" className="img-tableau-bord"/>
                                <p className="text-tb">
                                    Maecenas vitae magna lacus. Quisque nec est sem. 
                                    Vivamus tincidunt volutpat enim, bibendum finibus eros faucibus ut. 
                                    Pellentesque vestibulum nec risus vitae consequat.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="right-tb zoom-img">
                    <a href="/nos-actualites">
                        <div className="article-table-bord">
                            <img src={News} alt="News 2" className="img-tableau-bord img-right-tb"/>
                            <p className="text-tb">
                                Duis posuere ut enim quis tempus. Nam sagittis risus non libero iaculis, 
                                vitae blandit lectus posuere. Sed consequat tincidunt ultricies. 
                                Phasellus aliquam efficitur mauris.
                            </p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default TableauBord;