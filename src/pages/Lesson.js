import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../css/Lesson.css';
import "../css/card.css";
import Module from '../component/Module';
import Categorie from "../component/Categories";

function Lesson() {

  const [showModule, setShowModule] = useState(true);
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  const handleToggle = (moduleId) => {
    setShowModule((prev) => !prev);
    setSelectedModuleId(moduleId);
    // console.log("module id: " + moduleId)
  };
  return (
    <div>
      {showModule ? (
        <Module onToggle={handleToggle}/>
      ):( 
        <Categorie moduleId={selectedModuleId} />
      )}
    <div datatype="toto">
    </div>
      <Link to="/ajouter-cours"><button className="link-lesson-add mar-bottom-10px">Ajouter un cours</button></Link>

    </div>
  )
}
export default Lesson