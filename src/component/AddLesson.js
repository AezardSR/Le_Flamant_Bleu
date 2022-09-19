import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import '../css/AddLesson.css';

export default class AddLesson extends Component {
  render() {

    const categories = [
        { value: 'test1', label: 'test1' },
        { value: 'test2', label: 'test2' },
        { value: 'test3', label: 'test3' },
        { value: 'test4', label: 'test3' },
        { value: 'test5', label: 'test3' },
        { value: 'test6', label: 'test3' },
        { value: 'test7', label: 'test3' },
        { value: 'test8', label: 'test3' },
        { value: 'test9', label: 'test3' },
        { value: 'test10', label: 'test3' },
      ]

    return (
      <div>
        <form className="form-add-lesson">
            <div className='form-add-lesson-add-pdf'>
                <input type="file" className="form-add-lesson-pdf" placeholder="Veuillez insérer un fichier pdf"></input>
            </div>

            <div className='form-add-lesson-add-title'>
                <input className="form-add-lesson-title" placeholder="Insérer titre"></input>
            </div>

            <div className='form-add-lesson-add-details'>
                <div className='form-add-lesson-select-categorie'>
                    <Select options={categories} placeholder="Choisir une catégorie"/>
                </div>

                <div className='form-add-lesson-add-description'>
                    <textarea className="form-add-lesson-description" placeholder="Description du cours"></textarea>
                    <Link to="/cours"><button type="submit" className="btn btn-form-add-lesson">Valider le cours</button></Link>
                </div>
            </div>
        </form>
      </div>
    )
  }
}
