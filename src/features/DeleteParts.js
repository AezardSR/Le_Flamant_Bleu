import React, { useEffect, useState } from "react";

const DeleteParts = () => {

  const [partsID, setPartsID] = useState('');
  const [parts, setParts] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8000/api/parts/')
      .then(response => response.json())
      .then(data => setParts(data))
  }, [])

  const handleSubmit = (event) => {
    const requestOptions = {
        method: 'DELETE'
    };
    fetch('http://localhost:8000/api/parts/' + partsID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
    event.preventDefault();
  }
  
    return (
      <div>
        <form>
          <select onChange={(event) => {setPartsID(event.target.value)}} value={partsID}>
            {parts.map((part) => (
              <option key={part.id} value={part.id}>{part.id} : {part.name}</option>
            ))}
          </select>
          <button type="submit" onClick={handleSubmit}>Delete</button>
        </form>
      </div>
    )
  }

export default DeleteParts;