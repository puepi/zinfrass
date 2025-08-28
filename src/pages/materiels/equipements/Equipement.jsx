import { useState } from "react"


export default function Equipement({ handleSuivant, selectedTypeEquipement, handleRegister }) {
    const [equipements, setEquipements] = useState([])
    const [selectedNumSerie, setSelectedNumSerie] = useState('')

    function handleAjouter() {
        const alpha='abcdefghijklmnopqrstuvwxyz0123456'
        
        let x=''
        for(let i=0;i<5;i++){
            const j=Math.floor(Math.random()*alpha.length)
            x+=alpha[j]
        }
        setEquipements(prev => [...prev, { numeroSerie: selectedNumSerie, numeroUnique: x }])
        setSelectedNumSerie(' ')
    }
    function handleChange(e) {
        setSelectedNumSerie(e.target.value)
    }

    return (
        <fieldset className="equipement">
            <legend>Equipements</legend>
            <form className="entries" action={(formData) => handleRegister(formData, equipements)}>
                <label htmlFor="descriptive">Fiche descriptive</label>
                <textarea required name="descriptive" id="descriptive" placeholder="Describe how this new product will help employee perform fast and better"></textarea><div></div><div></div><div></div><div></div><div><div></div></div>
                <label htmlFor="marque">Marque : </label>
                <input type="text" name="marque" id="marque" required />
                <label htmlFor="modele">Modèle : </label>
                <input type="text" name="modele" id="modele" required />
                <label htmlFor="quantite">Quantité : </label>
                <input type="number" name="quantite" id="quantite" required /><div></div>
                <label htmlFor="caracteristics" className="caracteres">Caractéristiques:</label>
                <textarea required className="caracteristiques" name="caracteristics" id="caracteristics" placeholder="Enter the detail for each caracteristics after each colon"></textarea>
                <label htmlFor="photos" className="photos">Photos</label>
                <input type="file" name="photos" id="" />
                <div>1</div><div>2</div><div>3</div><div>4</div><div></div>
                <label htmlFor="couleur">Couleur</label>
                <input type="text" name="couleur" id="couleur" />
                <span>( Equipement un par un )</span>
                <label htmlFor="numSerie">N° de série</label>
                <input type="text" nom="numSerie" id="numSerie" required onChange={handleChange} value={selectedNumSerie} />
                <label htmlFor="identifiant">Identifiant</label>
                <input type="text" disabled name="identifiant" id="identifiant" required />
                <button type="button" onClick={handleAjouter}>Ajouter</button>
                <div></div><div></div><div></div><div></div>
                <p className="count"><span>( {equipements.length} )</span></p>
                <p className="navs">
                    <button>Enregistrer</button>
                    <button onClick={handleSuivant} type="button">Suivant</button>
                </p>
            </form>
        </fieldset>
    )
}