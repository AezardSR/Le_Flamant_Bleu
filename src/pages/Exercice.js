import React, { useState } from "react";
import '../css/styles.css';
import Module from '../component/Module';
import Categorie from "../component/Categories";
import Part from "../component/Part";
import CardExercice from "../component/CardExercice";

function Exercice() {

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

  const handleReturnToPart = () => {
    setShowPart(true);
  };

  const handleReturnToCategorie = () =>{
    setShowCategorie(true)
  }
  
  const handleReturnToModule = () => {
    setShowModule(true)
  }
  return (
    <div>
      {
        showModule ? (
          <Module onToggle={handleToggleModule}/>
        ) : ( 
          showCategorie ? (
            <Categorie moduleId={selectedModuleId} onToggle={handleToggleCategorie} returnToModule={handleReturnToModule} />
          ) : (
            showPart ? (
              <Part  categorieId={selectedCategorieId} onToggle={handleTogglePart} returnToCategorie={handleReturnToCategorie} />
            ) : (
              <CardExercice partId={selectedPartId} returnToPart={handleReturnToPart} />
            )
          )
        )
      }

    </div>
  )
}
export default Exercice