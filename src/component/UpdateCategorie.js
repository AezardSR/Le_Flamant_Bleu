import React, { useState } from 'react';
import axios from 'axios';

export default function UpdateCategorie() {
    // state = {
    //     id: '',
    //     categorie: ''
    // }

    // handleChange = event => {
    //     this.setState({ id: event.target.value });
    //     this.setState({ categorie: event.target.value });
    // }

    const [id, setId] = useState('');
    const [categorie, setCategorie] = useState('');
    const [categories, setCategories] = useState([]);

    // const handleChange = (event) => {
    //   setcategorieUpdate({ ...categorieUpdate, [event.target.categorie]: event.target.value });
    // };

    const handleSubmit = event => {
        event.preventDefault();

        const cat =  {
            id:         id,
            categorie:  categorie
        };

        axios.put(`http://localhost:8000/api/categories/` + cat.id + '/' + cat.categorie 
        // {
        //     id: cat.id,
        //     categorie: cat.categorie,
        // }
        ).then(() => {console.log(cat);})

        axios.get('http://localhost:8000/api/categories')
        .then(res => {
          const categories = res.data;
          this.setState({ categories });
        })

        
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <select name="id" value={id} onChange={e => {setId(e.target.value)}} >
              {
                categories
                  .map(categories =>
                    <option value={id}>{categories.categorie}</option>
                )
              }
            </select>
          <label>
            Modifier le nom de la catégorie : 
            <input type="text" name="categorie" value={categorie} onChange={e => {setCategorie(e.target.value)}} />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    )
}