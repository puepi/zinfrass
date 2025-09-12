import { Link } from "react-router-dom"
import './structure.css'
import SubdivisionsShow from "./SubdivisionsShow"
import { useEffect, useState } from "react"
import { addSubdivision, getAllSubdivisions } from "../../utils/ApiFunctions"
import SubdivisionSearchModal from "../materiels/batiments/SuvdivisionSearchModal"

export default function UnitesAdminSave() {
    const [subdivisions, setSubdivisions] = useState([])
    const [messageButton, setMessageButton] = useState('Aucun élément trouvé')
    const [showModal, setShowModal] = useState(false)
    const [selectedSubdivision, setSelectedSubdivision] = useState({})
    const [messageSaving, setMessageSaving] = useState('Enregistrer')

    useEffect(() => {
        document.title = 'Enregistrer des subdivisions administratives'
    }, [])

    async function handleRegister(formData) {
        setMessageSaving('...is Saving...')
        const newSub = {
            nom: formData.get('nom'),
            type: formData.get('nature'),
            parentId: selectedSubdivision.id
        }
        console.log(selectedSubdivision.id)
        // setSelectedSubdivision(newSub)
        await addSubdivision(newSub)
            .then(response => setSubdivisions(prev => [response, ...prev]))
            .catch(error => console.log(error))
            .finally(() => setMessageSaving('Enregistrer'))
    }
    function handleClick() {
        setShowModal(true)
    }
    async function getAllUnits() {
        setMessageButton('... is loading...')
        await getAllSubdivisions()
            .then(data => { setSubdivisions(data); console.log(data) })
            .catch(error => setMessageButton('Aucun élément trouvé'))
            .finally(() => setMessageButton('Aucun élément trouvé'))
    }
    function handleCloseModal() {
        setShowModal(false)
    }
    function handleSelectSubdivision(subdivision) {
        setSelectedSubdivision(subdivision)
    }
    function handleChange() {

    }
    return (
        <>
            <h1>Créer les subdivisions administratives</h1>
            <section className="structures">
                <form action={handleRegister} id="structures-unites-admin">
                    <label htmlFor="nature">Nature :</label>
                    <select name="nature" id="nature" required>
                        <option value="">Sélectionner une option</option>
                        <option value="Services centraux">Services centraux</option>
                        <option value="Région">Région</option>
                        <option value="Département">Département</option>
                        <option value="Arrondissement">Arrondissement</option>
                    </select>
                    <label htmlFor="parent">Rattachée à :</label>
                    <input type="text" disabled name="parent" id="parent" value={selectedSubdivision.nom} onChange={handleChange} />
                    <Link className="search-link" to="" onClick={handleClick}>...rechercher</Link>
                    <label htmlFor="">Nombre :</label>
                    <input type="text" disabled />
                    <button disabled>Ajouter</button>
                    <div className="empty"></div>
                    <label htmlFor="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" required />
                    <button>{messageSaving}</button>
                    <div className="empty"></div>
                </form>
                <SubdivisionsShow subdivisions={subdivisions} getAllUnits={getAllUnits} messageButton={messageButton} />
            </section>
            {
                showModal &&
                <SubdivisionSearchModal handleCloseModal={handleCloseModal} handleSelectSubdivision={handleSelectSubdivision} />
            }
        </>
    )
}