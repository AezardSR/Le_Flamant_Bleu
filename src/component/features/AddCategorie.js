import React, { useEffect, useState } from "react";

export default class AddCategorie extends React.Component {

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categorie: 'React POST Request Example' })
    };
    fetch('http://localhost:8000/api/categories', requestOptions)
        .then(response => response.json())
        .then(data => this.setState(console.log(data)));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom de la catégorie:
            <input type="text" name="categorie" onChange={this.componentDidMount} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}