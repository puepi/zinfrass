import { useEffect, useState } from "react"
import Equipement from "./Equipement"
import { getAllCategories, getAllTypesEquipement } from "../../../utils/ApiFunctions"



export default function TypeEquipement({ handlePrecedent, handleSuiv }) {
    const [isActive, setIsActive] = useState(true)
    const [isButtonActive, setIsButtonActive] = useState(true)
    const [toShow2, setToShow2] = useState(false)
    const [categories, setCategories] = useState([])
    const [typesEquipement, setTypesEquipement] = useState([])
    const [selectedCategorie, setSelectedCategorie] = useState('')
    const [loadingMessage, setLoadingMessage] = useState('...is Loading...')
    function handleChange(e) {
        if (e.target.value === 'add') {
            setIsActive(true)
        }
    }
    function handleSuivant() {
        setToShow2(true)
    }
    const categoriesElts = categories.map((t, id) => <option key={id} value={t.nom}>{t.nom}</option>)
    function handleChange(e) {
        if (e.target.value === 'add a category') {
            setIsActive(false)
            setSelectedCategorie('')
        } else {
            setIsActive(true)
            setSelectedCategorie(e.target.value)
        }
    }
    function handleChangeInput(e) {
        setSelectedCategorie(e.target.value)
        if (e.target.value.trim()) {
            setIsButtonActive(false)
        } else {
            setIsButtonActive(true)
        }
    }
    function handleAjouter() {
        setCategories(prev => [{ nom: selectedCategorie }, ...prev])
        setSelectedCategorie('')
    }
    useEffect(() => {
        getAllCategories()
            .then(data => {
                setCategories(data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoadingMessage('Sélectionnez une option'))

        // getAllTypesEquipement()
        //     .then(data => {
        //         setTypesEquipement(data)
        //     })
        //     .catch(error => console.log(error))
        //     .finally(() => setLoadingMessage('Sélectionnez une option'))

    }, [])
    function handleRegister(formData) {

    }
    return (
        <>
            <fieldset className="type-equipement">
                <legend>Type d'équipement</legend>
                <form className="entries" action={handleRegister}>
                    <div></div>
                    <input type="text" disabled className="show-search" />
                    <span>(Sélectionnez une ligne)</span><div></div>
                    <label htmlFor="nom">Nom : </label>
                    <input type="text" name='nom' id='nom' required />
                    <label htmlFor="abreviation">Abréviation : </label>
                    <input type="text" name='abreviation' id='abreviation' /><div></div>
                    <label htmlFor="caracteristiques" className="caracteristics">Caractéristiques : </label>
                    <textarea required name="caracteristiques" id="caracteristiques" placeholder="Enter caracteristics separated by double slashes (//)"></textarea><div></div><div></div><div></div>
                    <label htmlFor="categorie">Categorie : </label>
                    <select name="categorie" id="categorie" onChange={handleChange} >
                        <option value="">{loadingMessage}</option>
                        <option value="add a category">--- Ajouter une catégorie ---</option>
                        {categoriesElts}
                    </select>
                    <input type="text" disabled={isActive} value={selectedCategorie} onChange={handleChangeInput} /><button disabled={isButtonActive} onClick={handleAjouter}>Ajouter</button>
                    <button>Enregistrer</button>
                </form>
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
                            <th>Caracteristiques</th>
                        </tr>
                    </thead>
                    <tbody className='type-equipement-body'>
                        {typesEquipement && typesEquipement.length === 0 && <tr className='titles'><td>Aucun élément trouvé</td></tr>}
                        {typesEquipement && typesEquipement.length > 0 && (
                            typesEquipement.map((type, id) => <tr key={type.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, fournisseur)}>
                                <td>{type.nom}</td>
                                <td>{type.representant}</td>
                                <td>{type.type}</td>
                                <td>{type.adresse}</td>
                                <td>{type.email}</td>
                                <td>{type.niu}</td>
                                <td>{type.contact}</td>
                            </tr>)
                        )}
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
            {toShow2 && <Equipement handleSuivant={handleSuiv} />}
        </>
    )
}