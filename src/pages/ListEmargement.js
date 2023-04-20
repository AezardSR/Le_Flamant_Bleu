import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImgEmargement from '../assets/img/emargement.png'
import '../css/styles.css';

export default class ListEmargement extends Component {
  render() {
    return (
      <div>

            <h2>Emargement de la formation : [Nom de la formation]</h2>

            <div className="emargement-formation">

                <div className="emargement-etudiant">
                    <span>[Nom de l'étudiant]</span>
                    <img src={ImgEmargement} />
                </div>

                <div className="emargement-etudiant">
                    <span>[Nom de l'étudiant]</span>
                    <img src={ImgEmargement} />
                </div>

                <div className="emargement-etudiant">
                    <span>[Nom de l'étudiant]</span>
                    <img src={ImgEmargement} />
                </div>

                <div className="emargement-etudiant">
                    <span>[Nom de l'étudiant]</span>
                    <img src={ImgEmargement} />
                </div>

                <div className="emargement-etudiant">
                    <span>[Nom de l'étudiant]</span>
                    <img src={ImgEmargement} />
                </div>

                <div className="emargement-etudiant">
                    <span>[Nom de l'étudiant]</span>
                    <img src={ImgEmargement} />
                </div>

            </div>

      </div>
    )
  }
}
