import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/styles.css"
import { ApiContext } from '../features/APIToken/ApiContext.js';

export default function Register() {
  const { loginError, passError, mailError,nameError, firstnameError, registerUser, rolesList, getRoles, getTypes, typesList} = useContext(ApiContext);
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const [firstname, setFirstname] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirm] = useState();
  const [roles_id, setRole] = useState();
  const [types_id, setType] = useState();
  const [userRegisterd, setUserRegistered] = useState(false);



  const handleSubmit = async e => {
    e.preventDefault();
    registerUser({
        name,
        firstname,
        mail,
        password,
        password_confirmation,
        roles_id,
        types_id
    }).then(data => {
      if(data.message === "user registered"){
        setUserRegistered("utilisateur bien enregistré")
        window.location.reload();
      }
    })
}

  getRoles()
  getTypes()


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
                  <input type='password' name='password_confirmation' className="input-r" placeholder="confirmation du mot de pass" onChange={e => setPasswordConfirm(e.target.value)}/>
                  <p className="errorMessage">{}</p>
                  <label className="">Rôle</label>
                  <select name="role" className="input-r" onChange={e => setRole(e.target.value)}>
                    <option value="0">Choisir un rôle</option>
                    {rolesList && rolesList.map((name, id) => (
                      <option key={id} value={name.id}>{name.name}</option>
                    ))}
                  </select>
                  <p className="errorMessage">{}</p>
                  <label className="">Type</label>
                  <select name="role" className="input-r" onChange={e => setType(e.target.value)}>
                    <option value="0">Choisir un rôle</option>
                    {typesList && typesList.map((name, id) => (
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