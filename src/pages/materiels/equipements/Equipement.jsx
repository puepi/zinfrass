import { useState } from "react"


export default function Equipement({ handleSuivant, handlePrecedent, handleRegister, caracteristiques }) {
    const [equipements, setEquipements] = useState([])
    const [selectedNumSerie, setSelectedNumSerie] = useState('')

    function handleAjouter() {
        const alpha = 'abcdefghijklmnopqrstuvwxyz0123456'

        let x = ''
        for (let i = 0; i < 5; i++) {
            const j = Math.floor(Math.random() * alpha.length)
            x += alpha[j]
        }
        setEquipements(prev => [...prev, { numeroSerie: selectedNumSerie.toUpperCase(), numeroUnique: x.toUpperCase() }])
        setSelectedNumSerie(' ')
    }

    function handleChange(e) {
        setSelectedNumSerie(e.target.value)
    }

    return (
        <fieldset className="equipement">
            <legend>Enregistrer les Equipements</legend>
            <form className="entries" action={(formData) => handleRegister(formData, equipements)}>
                <label htmlFor="descriptive">Fiche descriptive :</label>
                <textarea required name="descriptive" id="descriptive" className="description"
                    placeholder="Describe how this new product will help employee perform fast and better">
                </textarea>
                <div></div>
                <div></div><div></div>
                <label htmlFor="marque">Marque : </label>
                <input type="text" name="marque" id="marque" required />
                <label htmlFor="modele">Modèle : </label>
                <input type="text" name="modele" id="modele" required /><div></div>
                <label htmlFor="caracteristics" className="caracteres">Caractéristiques:</label>
                <textarea
                    required className="caracteristiques" name="caracteristics"
                    id="caracteristics" placeholder="Enter the detail for each caracteristics after each colon"
                    defaultValue={caracteristiques}
                >
                </textarea>
                <input type="hidden" name="quantite" />
                <div></div><div></div><div></div><div></div><div></div>
                <label htmlFor="photos" className="photos">Photos :</label>
                <input type="file" name="photos" id="" />
                <div></div><div></div><div></div>

                <label htmlFor="couleur">Couleur :</label>
                <input type="text" name="couleur" id="couleur" />
                <div></div><div></div><div></div>

                <div></div>
                <div></div>
                <div className="eq-container">(Equipements)</div>
                <div></div><div></div>
                <label htmlFor="numSerie">N° de série :</label>
                <input type="text" nom="numSerie" id="numSerie" required onChange={handleChange} value={selectedNumSerie} />
                <label htmlFor="identifiant">Identifiant :</label>
                <input type="text" disabled name="identifiant" id="identifiant" required />
                <button type="button" onClick={handleAjouter}>Ajouter</button>

                <div className="count">[ {equipements.length} ]</div>
                <button onClick={handlePrecedent} type="button">Précédent</button>
                <div></div>
                <button>Enregistrer</button>
                <div></div>
                <button onClick={handleSuivant} type="button">Suivant</button>
            </form>
        </fieldset>
    )
}