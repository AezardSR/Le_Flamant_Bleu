import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/TableauBord.css';
import Calendrier from '../assets/img/calendrier.png'
import Emploi from '../assets/img/emploi.jpg'
import News from '../assets/img/news.jpg'

class TableauBord extends Component {
    render() {
        return (
            //DIV Parent de la page
            <div className="page-tableau-bord">
                <div className="tableau-bord">
                    <div className="left-tb">
                        <div className="calendar-tb">
                            <Link to="/calendrier">
                                <img src={Calendrier} alt="Planning" className="img-tableau-bord img-calendar"/>
                            </Link>
                        </div>
                        <div className="news-tb">
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
                    <div className="right-tb">
                        <a href="#">
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
}

export default TableauBord;