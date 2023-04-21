import React, {useContext, useEffect, useState} from 'react';
import "../css/styles.css"
import { ApiContext } from '../features/APIToken/ApiContext.js';

export default function Register() {
  //importation des éléments du contexte
  const { loginError, passError, mailError,nameError, firstnameError, registerUser, rolesList, getRoles, getTypes, typesList} = useContext(ApiContext);
  //définition des états
  const [mail, setMail] = useState();// définition de l'état mail
  const [name, setName] = useState();// définition de l'état du nom
  const [firstname, setFirstname] = useState(); // définition de l'état prénom
  const [password, setPassword] = useState();// définition de l'état du mot de passe    
  const [password_confirmation, setPasswordConfirm] = useState(); // définition de l'état de la confirmation du mot de passe
  const [roles_id, setRole] = useState([]); // définition de l'état du rôle
  const [types_id, setType] = useState([]); // définition de l'état du type
  const [userRegisterd, setUserRegistered] = useState(false); // définition de l'état de l'inscription de l'utilisateur


//Fonction permettant de gérer l'envoie du formulaire d'inscription d'utilisateur
  const handleSubmit = async e => {
    e.preventDefault();
    //on appelle la fonction registerUser avec les informations "credentials" qui seront envoyées à l'API
    registerUser({
        name,
        firstname,
        mail,
        password,
        password_confirmation,
        roles_id,
        types_id
    }).then(data => {
        window.location.reload();
      })
    }

//on récupère les rôles et les types d'utilisateur au chargement de la page
useEffect(() =>{
  getRoles()//recupération des rôles
  getTypes()//recupération des types
},[])

// on retourne le composant
return (
        <div className='container flex-column'>
          <h1 className="title">Inscription d'utilisateur</h1>
            <div className="container-r">
                <form onSubmit={handleSubmit} id="form-register">
                  <div>
                    <div>
                      <input name='name' className="input-r" placeholder="Nom" onChange={e => setName(e.target.value)}/>
                      <p className="errorMessage">{nameError}</p> 
                    </div>
                    <div>
                      <input name='firstname' className="input-r" placeholder="Prénom" onChange={e => setFirstname(e.target.value)} />
                      <p className="errorMessage">{firstnameError}</p>
                    </div>
                  </div>
                  <input name='mail' className="input-r" placeholder="mail" onChange={e => setMail(e.target.value)}/>
                  <p className="errorMessage">{mailError}</p>
                  <input type='password' name='password' className="input-r" placeholder="mot de passe" onChange={e => setPassword(e.target.value)}/>
                  <p className="errorMessage">{passError}</p>
                  <input type='password' name='password_confirmation' className="input-r" placeholder="confirmation du mot de passe" onChange={e => setPasswordConfirm(e.target.value)}/>
                  <p className="errorMessage">{}</p>
                  <label className="">Rôle</label>
                  <select name="role" className="input-r" onChange={e => setRole(e.target.value)}>
                    <option value="0">Choisir un rôle</option>
                    {Array.isArray(rolesList) && rolesList.map((name, id) => (
                      <option key={id} value={name.id}>{name.name}</option>
                    ))}
                  </select>
                  <p className="errorMessage">{}</p>
                  <label className="">Type</label>
                  <select name="role" className="input-r" onChange={e => setType(e.target.value)}>
                    <option value="0">Choisir un rôle</option>
                    {Array.isArray(typesList) && typesList.map((name, id) => (
                      <option key={id} value={name.id}>{name.name}</option>
                    ))}
                  </select>
                  <p className="errorMessage">{}</p>
                  <input type="submit" className="btn-r" value="Valider"/>
                  <p className="errorMessage">{loginError}</p>
                </form>
            </div>
        </div>
        )
}