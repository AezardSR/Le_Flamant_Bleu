import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class AddCategorie extends React.Component {
  state = {
    categorie: '',
  }

  handleChange = event => {
    this.setState({ categorie: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
        categorie: this.state.categorie
    };

    axios.post(`http://localhost:8000/api/categories/`, {
        categorie: user.categorie
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom de la catégorie:
            <input type="text" name="categorie" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}