import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../css/Lesson.css';
import "../css/card.css";
import Module from '../component/Module';
import Categorie from "../component/Categories";
import Part from "../component/Part";
import CardLesson from "../component/CardLesson";

function Lesson() {

  const [showModule, setShowModule] = useState(true);
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  const [showCategorie, setShowCategorie] = useState(true)
  const [selectedCategorieId, setSelectedCategorieId] = useState(null)

  const [showPart, setShowPart] = useState(true);
  const [selectedPartId, setSelectedPartId] = useState(null)

  const handleToggleModule = (moduleId) => {
    setShowModule((prev) => !prev);
    setSelectedModuleId(moduleId);
    // console.log("module id: " + moduleId)
  };

  const handleToggleCategorie = (categorieId) =>{
    setShowCategorie((prev) => !prev);
    setSelectedCategorieId(categorieId)
  }

  const handleTogglePart = (partId) => {
    setShowPart((prev) => !prev);
    setSelectedPartId(partId)
  }
  return (
    <div>
      {
        showModule ? (
          <Module onToggle={handleToggleModule}/>
        ) : ( 
          showCategorie ? (
            <Categorie moduleId={selectedModuleId} onToggle={handleToggleCategorie} />
          ) : (
            showPart ? (
              <Part  categorieId={selectedCategorieId} onToggle={handleTogglePart} />
            ) : (
              <CardLesson partId={selectedPartId} />
            )
          )
        )
      }
    <div datatype="toto">
    </div>
      <Link to="/ajouter-cours"><button className="link-lesson-add mar-bottom-10px">Ajouter un cours</button></Link>

    </div>
  )
}
export default Lesson