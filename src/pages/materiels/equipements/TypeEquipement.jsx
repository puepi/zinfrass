import { useState } from "react"
import Equipement from "./Equipement"



export default function TypeEquipement({ handlePrecedent, toShow }) {
    const [isActive,setIsActive]=useState(true)
    const [toShow2,setToShow2]=useState(false)
    function handleChange(e){
        if(e.target.value==='add'){
            setIsActive(true)
        }
    }
    function handleSuivant(){
        setToShow2(true)
    }
    return (
        <>
            <fieldset className="type-equipement">
                <legend>Type d'équipement</legend>
                <div className="entries">
                    <div></div>
                    <input type="text" disabled className="show-search" />
                    <span>(Sélectionnez une ligne)</span><div></div>
                    <label htmlFor="">Nom : </label>
                    <input type="text" />
                    <label htmlFor="">Abréviation : </label>
                    <input type="text" /><div></div>
                    <label htmlFor="" className="caracteristics">Caractéristiques : </label>
                    <textarea name="" id="" placeholder="Enter caracteristics separated by double slashes (//)"></textarea><div></div><div></div><div></div>
                    <label htmlFor="categorie">Categorie : </label>
                    <select name="categorie" id="categorie" onChange={handleChange} >
                        <option value="">Sélectionner une option</option>
                        <option value="add">--- Ajouter une catégorie ---</option>
                    </select>
                    <input type="text" disabled={isActive} /><button>Ajouter</button>
                    <button>Enregistrer</button>
                </div>
                <p className="search-place">
                    <label htmlFor="">Chercher par nom :  </label>
                    <input type="text" />
                    <button>Chercher</button>
                </p>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>Nom</th>
                            <th>Abréviation</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
                <p className="nav-buttons">
                    <button>{"<"}</button>
                    <button>{">"}</button>
                </p>
                <p className="suivant">
                    <button className="precedent" onClick={handlePrecedent}>Précédent</button>
                    <button className="suivant" onClick={handleSuivant}>Suivant</button>
                </p>
            </fieldset>
            {toShow2 && <Equipement />}
        </>
    )
}