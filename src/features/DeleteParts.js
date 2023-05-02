import React, { useEffect, useState, useContext } from "react";
import { ApiContext } from "../features/APIToken/ApiContext";

const DeleteParts = () => {

  const {requestAPI} = useContext(ApiContext);
  const [partsID, setPartsID] = useState('');
  const [parts, setParts] = useState([]);
  
  useEffect(() => {
    requestAPI('/parts', 'GET',null)
      .then(response => response.json())
      .then(data => setParts(data))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    requestAPI('/parts/' + partsID, 'DELETE', null)
      .then(response => response.json())
      .then(data => console.log(data))
  }
  
    return (
      <div>
        <form>
          <select onChange={(event) => {setPartsID(event.target.value)}} value={partsID}>
            {parts.map((part) => (
              <option key={part.id} value={part.id}>{part.id} : {part.name}</option>
            ))}
          </select>
          <button type="submit" onClick={handleSubmit}>Effacer</button>
        </form>
      </div>
    )
  }

export default DeleteParts;