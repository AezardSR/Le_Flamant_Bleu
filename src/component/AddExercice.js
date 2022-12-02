import React, { Component } from 'react'
import axios from 'axios';
import Select from 'react-select'
import { Link } from 'react-router-dom'
import '../css/AddLesson.css';

export default class AddExercice extends React.Component {

  state = {
    name: '',
    content: '',
    id_parts: '2',
  }

  handleChange = event => {
    this.setState({ 
      name: event.target.value,
      content: event.target.value,
      id_parts: event.target.value,
     });
  }

  handleSubmit = event => {
    event.preventDefault();

    const nameExo       = {name: this.state.name};
    const contentExo    = {content: this.state.content}
    const id_partsExo   = {id_parts: this.state.id_parts}

    axios.post(`http://localhost:8000/api/exercice/`, { nameExo }, { contentExo }, { id_partsExo })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {

    const testOption = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

  return (
    <div>
      <form className="form-add-lesson" onSubmit={this.handleSubmit}>
            <div className='form-add-lesson-add-pdf'>
                <input type="file" className="form-add-lesson-pdf" placeholder="Veuillez insérer un fichier pdf"></input>
            </div>

            <div className='form-add-lesson-add-title'>
                <input name="name" onChange={this.handleChange} className="form-add-lesson-title" placeholder="Insérer titre"></input>
            </div>

            <div className='form-add-lesson-add-details'>
                <div className='form-add-lesson-select-categorie'>
                    <Select options={testOption} onChange={this.handleChange} />
                </div>
                <div className='form-add-lesson-add-description'>
                    <textarea name="content" onChange={this.handleChange} className="form-add-lesson-description" placeholder="Description de l'exercice"></textarea>
                    <Link to="/exercice"><button type="submit" className="btn btn-form-add-lesson">Valider l'exercice</button></Link>
                </div>
            </div>
        </form>
    </div>
    )
  }
}
