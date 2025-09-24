import { useEffect, useState } from "react"
import Equipement from "./Equipement"
import { addCategorie, addTypeEquipement, getAllCategories, getAllTypesEquipement } from "../../../utils/ApiFunctions"



export default function TypeEquipement({ handlePrecedent, handleSuivant, selectedType, handleSelectRow }) {
    const [isActive, setIsActive] = useState(true)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isButtonActive, setIsButtonActive] = useState(true)
    const [isSelectDisabled, setIsSelectDisabled] = useState(false)
    const [toShow2, setToShow2] = useState(false)
    const [categories, setCategories] = useState([])
    const [typesEquipement, setTypesEquipement] = useState([])
    const [typeEquipement, setTypeEquipement] = useState({})
    const [selectedCategorie, setSelectedCategorie] = useState({ nom: '', id: '' })
    const [loadingMessage, setLoadingMessage] = useState('...is Loading...')
    const [loadingMessage2, setLoadingMessage2] = useState('...data is Loading...')
    // const [selectedTypeEquipement, setSelectedTypeEquipement] = useState(selectedType)
    const [messageButton, setMessageButton] = useState('Enregistrer')
    // function handleSuivant() {
    //     setToShow2(true)
    // }
    const categoriesElts = categories.map((t, id) => <option key={t.id} value={t.nom}>{t.nom}</option>)
    function handleChange(e) {
        if (e.target.value === 'add a category') {
            setIsActive(false)
            setSelectedCategorie({ nom: '', id: '' })
        } else if (e.target.value === "") {
            setIsActive(true)
            setSelectedCategorie({ nom: '', id: '' })
        } else {
            setIsActive(true)
            const obj = categories.filter(c => c.nom === e.target.value)
            setSelectedCategorie({
                nom: e.target.value,
                id: obj[0].id
            })
        }
    }
    function handleChangeInput(e) {
        setSelectedCategorie(prev => ({ ...prev, nom: e.target.value }))
        if (e.target.value.trim()) {
            setIsButtonActive(false)
        } else {
            setIsButtonActive(true)
        }
    }
    async function handleAjouter() {

        setIsSelectDisabled(true)
        await addCategorie({ nom: selectedCategorie.nom })
            .then(response => {
                setCategories(prev => [{ nom: response.nom, id: response.id }, ...prev])
            })
            .catch(error => console.log(error))
            .finally(() => {
                setSelectedCategorie({ nom: '', id: '' })
                setIsButtonActive(true)
                setIsSelectDisabled(false)
            })
    }
    useEffect(() => {
        getAllCategories()
            .then(data => {
                setCategories(data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoadingMessage('Sélectionnez une option'))
        chercherTypesEquipement()
    }, [])

    async function handleRegister(formData) {
        if (selectedCategorie.id === '') {
            return
        }
        setIsDisabled(true)
        setMessageButton("...Loading")
        const newTypeEquipement = {
            nom: formData.get("nom"),
            abreviation: formData.get("abreviation"),
            caracteristiques: formData.get("caracteristiques"),
            categorieId: selectedCategorie.id,
        }
        setTypeEquipement(newTypeEquipement)
        await addTypeEquipement(newTypeEquipement)
            .then(response => {
                if (response) {
                    setTypesEquipement(prev => ([response, ...prev]))
                    setSelectedTypeEquipement({
                        nom: response.nom,
                        id: response.id
                    })
                }
                console.log(response)

            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Enregistrer')
            })
    }
    function chercherTypesEquipement() {
        getAllTypesEquipement()
            .then(data => { console.log("data=" + data); setTypesEquipement(data) })
            .catch(error => console.log(error))
            .finally(() => setLoadingMessage2('Aucun élément trouvé'))
    }

    function handleChangeSelectedInput(e) {
        setSelectedTypeEquipement(prev => ({ ...prev, nom: e.target.value }))
    }

    return (
        <>
            <fieldset className="type-equipement">
                <legend>Enregistrer le type d'équipement</legend>
                <form className="entries" action={handleRegister}>
                    <div></div>
                    <input type="text" disabled className="show-search" value={selectedType.nom} onChange={handleChangeSelectedInput} />
                    <span>(Sélectionnez une ligne)</span><div></div>
                    <label htmlFor="nom">Nom : </label>
                    <input type="text" name='nom' id='nom' required />
                    <label htmlFor="abreviation">Abréviation : </label>
                    <input type="text" name='abreviation' id='abreviation' /><div></div>
                    <label htmlFor="caracteristiques" className="caracteristics">Caractéristiques : </label>
                    <textarea required name="caracteristiques" id="caracteristiques" placeholder="Enter caracteristics separated by double slashes (//)"></textarea><div></div><div></div><div></div>
                    <label htmlFor="categorie">Categorie : </label>
                    <select name="categorie" id="categorie" onChange={handleChange} disabled={isSelectDisabled} required>
                        <option value="">{loadingMessage}</option>
                        <option value="add a category">--- Ajouter une catégorie ---</option>
                        {categoriesElts}
                    </select>
                    <input type="text" required disabled={isActive} value={selectedCategorie.nom} onChange={handleChangeInput} /><button type="button" disabled={isButtonActive} onClick={handleAjouter}>Ajouter</button>
                    <button disabled={isDisabled}>{messageButton}</button>
                </form>
                <form action="" id="show-form">
                    <label htmlFor="">Nom :</label>
                    <input type="text" name="" id="" />
                    <div></div>
                    <label htmlFor="">Catégorie :</label>
                    <input type="text" name="" id="" />
                    <button>Rechercher</button>
                </form>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>Nom</th>
                            <th>Abréviation</th>
                            <th>Catégorie</th>
                            <th>Caracteristiques</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody className='type-equipement-body'>
                        {typesEquipement && typesEquipement.length === 0 && <tr className='titles'><td>{loadingMessage2}</td></tr>}
                        {typesEquipement && typesEquipement.length > 0 && (
                            typesEquipement.map((type, id) => <tr key={type.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, type)}>
                                <td>{type.nom}</td>
                                <td>{type.abreviation}</td>
                                <td>{type.categorieNom}</td>
                                <td>{type.caracteristiques.substring(0, 40) + '...'}</td>
                                <td>
                                    <button className="edit-btn">
                                        &#9998;
                                    </button>&nbsp;&nbsp;
                                    <button className="delete-btn">
                                        &#x1F5D1;
                                    </button>
                                </td>
                            </tr>)
                        )}
                    </tbody>
                </table>
                {/* <p className="nav-buttons">
                    <button>{"<"}</button>
                    <button>{">"}</button>
                </p> */}
                <p className="suivant">
                    <button className="precedent" onClick={handlePrecedent}>Précédent</button>
                    <button className="suivant" onClick={() => handleSuivant(selectedType)}>Suivant</button>
                </p>
            </fieldset>
            {/* {toShow2 && <Equipement handleSuivant={handleSuiv} selectedTypeEquipement={selectedType} handleRegister={handleReg} />} */}
        </>
    )
}