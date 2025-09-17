import { Link } from "react-router-dom"
import './maintenance.css'
import { useEffect, useState } from "react"
import RespoSearchModal from "../materiels/equipements/RespoSearchModal"
import { addIncident } from "../../utils/ApiFunctions"

export default function IncidentsSave() {
    const [incidents, setIncidents] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [showRespoModal, setShowRespoModal] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [selectedRespo, setSelectedRespo] = useState({})
    function handleCloseRespoModal() {
        setShowRespoModal(false)
    }
    function handleSelectRespo(respo) {
        setSelectedRespo(respo)
    }
    function handleOpenRespoModal() {
        setShowRespoModal(true)
    }
    useEffect(() => {
        document.title = 'Enregistrer un incident'

    }, [])
    async function handleSubmit(formData) {
        setIsDisabled(true)
        setMessageButton("...Saving")
        const newIncicent = {
            dateIncident: formData.get("date"),
            nomsDeclarant: formData.get("noms"),
            poste: formData.get("poste"),
            nomStructure: formData.get("service"),
            resolu: formData.get("resolu"),
            nature: formData.get("nature"),
            objet: formData.get("objet"),
            description: formData.get("description"),
            identifiant: formData.get("identifiant")
        }
        await addIncident(newIncicent)
            .then(response => {
                setIncidents(prev => [response, ...prev])
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Enregistrer')
            })
    }
    return (
        <>
            <h1>Déclarations d'incidents</h1>
            <section className="maintenance incidents">
                <form action={handleSubmit} id="incidents-save">
                    <label htmlFor="noms">Noms et prénoms :</label>
                    <input type="text" disabled name="noms" id="noms" value={selectedRespo.noms} />
                    <label htmlFor="poste">Poste :</label>
                    <input type="text" disabled name="poste" id="poste" value={selectedRespo.nomPoste} />
                    <label htmlFor="service">Service :</label>
                    <input type="text" disabled name="service" id="service" value={selectedRespo.nomStructure} />
                    <Link className="search-link" to="" onClick={handleOpenRespoModal}>...rechercher</Link>
                    <div></div>
                    <label htmlFor="description">Description :</label>
                    <input type="text" name="description" id="description" required />
                    <></>
                    <></>
                    <label htmlFor="date">Date de survenue :</label>
                    <input type="date" name="date" id="date" required />
                    <label htmlFor="nature">Nature de l'incident :</label>
                    <select name="nature" id="nature" required>
                        <option value="">Sélectionner une option</option>
                        <option value="Materiel en stock">Equipement</option>
                        <option value="Logiciel">Logiciel</option>
                        <option value="Bâtiment">Batiments</option>
                        <option value="Espace">Espace</option>
                    </select>
                    <Link className="search-link" to="">...rechercher</Link>
                    <input type="text" name="identifiant" />
                    <label htmlFor="objet">Objet affecté :</label>
                    <input type="text" name="objet" id="objet" required />
                    <label htmlFor="lieu">Lieu :&nbsp;&nbsp;
                        <Link className="search-link" to="">...rechercher</Link>
                    </label>
                    <input type="text" name="lieu" id="lieu" />
                    <label htmlFor="">Photos :</label>
                    <input type="file" name="" id="" />
                    <label htmlFor="resolu">Résolu :</label>
                    <select name="resolu" id="resolu" defaultValue={"non"}>
                        <option value="non">Non</option>
                    </select>
                    <button disabled={isDisabled}>{messageButton}</button>
                </form>
                <form action="" className="show-form">
                    <label htmlFor="">Nature :</label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                    </select>
                    <select name="" id="">
                        <option value="">Selectionner une option</option>
                    </select>
                    <button type="button" >Rechercher</button>
                </form>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>N° incident</th>
                            <th>Nature</th>
                            <th>Objet</th>
                            <th>Description</th>
                            <th>Date de survenue</th>
                            <th>Résolu</th>
                        </tr>
                    </thead>
                    <tbody className='incidence-body'>
                        {incidents && incidents.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                        {incidents && incidents.length > 0 && (
                            incidents.map((incident, id) => <tr key={incident.id} className='dynamic-row' onClick={() => handleClick(incident)}>
                                <td>{incident.nroIncident}</td>
                                <td>{incident.nature}</td>
                                <td>{incident.objet}</td>
                                <td>{incident.description}</td>
                                <td>{incident.dateIncident}</td>
                                <td>{incident.resolu}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>
            {
                showRespoModal &&
                <RespoSearchModal handleCloseModal={handleCloseRespoModal} handleSelectRespo={handleSelectRespo} />
            }
        </>
    )
}