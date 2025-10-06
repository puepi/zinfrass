import { useEffect, useState } from "react"
import './maintenance.css'
import { Link } from "react-router-dom"
import RespoSearchModal from "../materiels/equipements/RespoSearchModal"
import { addInstallation, deleteIntervention, getInterventions } from "../../utils/ApiFunctions"
import Spinner from '../../components/Spinner'
export default function InterventionsSave() {
    const [isSavingDisabled, setIsSavingDisabled] = useState(false)
    const [interventions, setInterventions] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [showRespoModal, setShowRespoModal] = useState(false)
    const [selectedRespo, setSelectedRespo] = useState({})
    const [showNoms, setShowNoms] = useState(true)
    const [showPoste, setShowPoste] = useState(true)
    const [showService, setShowService] = useState(true)
    const [showDiagnostic, setShowDiagnostic] = useState(true)
    const [showSolution, setShowSolution] = useState(true)
    const [showLinkProfit, setShowLinkProfit] = useState(false)
    const [showLinkLieu, setShowLinkLieu] = useState(true)
    const [showLinkIncident, setShowLinkIncident] = useState(false)
    const [showResolu, setShowResolu] = useState(true)
    const [showLieu, setShowLieu] = useState(true)
    const [showPosition, setShowPosition] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [toast, setToast] = useState(null)
    const [selectedIntervention, setSelectedIntervention] = useState({})
    const [showSearchEquipement,setShowSearchEquipement]=useState(false)

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
        document.title = 'Enregistrer des interventions'
        getAllInterventions()
    }, [])
    async function getAllInterventions() {
        setMessageLoading('...is loading...')
        await getInterventions()
            .then(data => { setInterventions(data); })
            .catch(error => console.log(error))
            .finally(() => setMessageLoading("Aucun élément trouvé"))
    }
    async function handleDeleteIntervention(intervention) {
        console.log(intervention)
        const id = intervention.id
        await deleteIntervention(id)
            .then(response => {
                setShowSpinner(true)
                setInterventions(prevInt => prevInt.filter(interv => interv.id !== id))
                setToast({ message: "✅ Opération réussie !", type: "success" });
            })
            .catch(error => { console.log(error); setToast({ message: "❌ Une erreur est survenue !", type: "error" }); })
            .finally(() => setShowSpinner(false))
    }
    function handleClick(intervention) { }
    async function handleSaveIntervention(formData) {
        const newIntervention = {
            nomsIntervenant: formData.get('intervenant'),
            poste: formData.get('poste'),
            service: formData.get('service'),
            raison: formData.get('raison'),
            diagnostic: formData.get('diagnostic'),
            solution: formData.get('solution'),
            nature: formData.get('nature'),
            objet: formData.get('objet'),
            identifiant: formData.get('identifiant'),
            structure_affecte: formData.get('respoStructure'),
            poste_affecte: formData.get('respoPoste'),
            personne_affecte: formData.get('respoNoms'),
            lieu: formData.get('lieu'),
            position_equipement: formData.get('position'),
            observations: formData.get('observations'),
            dateIntervention: formData.get('date'),
            etat_objet: formData.get('etat'),
            nroIncident: formData.get('nroIncident'),
            resolu: formData.get('resolu'),
            ref_autorisation: formData.get('ref'),
        }
        setSelectedIntervention(newIntervention)
        if (formData.get('raison') === 'Installation') {
            setShowSpinner(true)
            await addInstallation(newIntervention)
                .then(response => {
                    setInterventions(prev => [...prev, response])
                    setToast({ message: "✅ Opération réussie !", type: "success" });
                })
                .catch(error => {
                    setToast({ message: "❌ Une erreur est survenue !", type: "error" });
                })
                .finally(() => { setShowSpinner(false) })
        }
    }
    function handleOpenSearchEquipementModal(){
        setShowSearchEquipement(true)
    }
    return (
        <>
            <section className="maintenance interventions">
                <fieldset>
                    <legend>Enregistrement d'une intervention</legend>
                    <form action={handleSaveIntervention} id="interventions-save">
                        <label htmlFor="intervenant">Intervenant:</label>
                        <input disabled={showNoms} type="text" value={selectedRespo.noms} name="intervenant" id="intervenant" required />
                        <label htmlFor="poste">Poste:</label>
                        <input disabled={showPoste} type="text" value={selectedRespo.nomPoste} name="poste" id="poste" required />
                        <label htmlFor="service">Service:</label>
                        <input disabled={showService} type="text" value={selectedRespo.nomStructure} name="service" id="service" required />
                        <Link className="search-link" to="" onClick={handleOpenRespoModal}>...rechercher</Link>
                        <label htmlFor="raison">Raison:</label>
                        <select name="raison" id="raison" required>
                            <option value="">Faites un choix</option>
                            <option value="Installation">Installation</option>
                            <option value="Réception">Réception</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Déplacement">Déplacement</option>
                            <option value="Dépannage">Incident/Dépannage</option>
                        </select>
                        <label htmlFor="diagnostic">Diagnostic:</label>
                        <input disabled={showDiagnostic} type="text" name="diagnostic" id="diagnostic" required />
                        <label htmlFor="solution">Solution:</label>
                        <input disabled={showSolution} type="text" name="solution" id="solution" required />
                        <div></div>
                        <label htmlFor="nature">Sur :</label>
                        <select name="nature" id="nature" required>
                            <option value="">Sélectionner une option</option>
                            <option value="Lot">Lot</option>
                            <option value="Equipement">Equipement</option>
                            <option value="Logiciel">Logiciel</option>
                            <option value="Bâtiment">Batiment</option>
                            <option value="Espace">Espace</option>
                        </select>
                        <label htmlFor="objet">Objet:</label>
                        <input type="text" name="objet" id="objet" required />
                        <label htmlFor="indentifiant">Identifiant :</label>
                        <input type="text" name="indentifiant" id="indentifiant" required />
                        <Link className="search-link" to="" onClick={handleOpenSearchEquipementModal}>...rechercher</Link>

                        <label htmlFor="respoStructure">Au profit de :</label>
                        <input type="text" disabled name="respoStructure" id="respoStructure" required />
                        <label htmlFor="respoPoste">Poste :</label>
                        <input type="text" disabled name="respoPoste" id="respoPoste" required />
                        <label htmlFor="respoNoms">Noms :</label>
                        <input type="text" disabled name="respoNoms" id="respoNoms" required />
                        {showLinkProfit ? <Link className="search-link" to="" >...rechercher</Link> : <div></div>}

                        <label htmlFor="lieu">Lieu:</label>
                        <input type="text" name="lieu" id="lieu" disabled={showLieu} />
                        {showLinkLieu ? <Link className="search-link" to="" >...rechercher</Link> : <div></div>}
                        <div></div>
                        <label htmlFor="position">Posit° Eqmt:</label>
                        <select name="position" id="position" disabled={showPosition} defaultValue={"ras"}>
                            <option value="ras">Select</option>
                            <option value="en stock">En magasin</option>
                            <option value="out stock">Hors du magasin</option>
                        </select>
                        <div></div>
                        {/* <label htmlFor="ref">Référence:</label> */}
                        {/* <input type="text" name="ref" id="ref" /> */}
                        <label htmlFor="observations">Observations:</label>
                        <input type="text" name="observations" id="observations" required />
                        <label htmlFor="date">Date :</label>
                        <input type="date" name="date" id="date" required />
                        <label htmlFor="etat">Etat de l'objet :</label>
                        <select name="etat" id="etat" required>
                            <option value="">Faites un choix</option>
                            <option value="neuf">Bon état, tout neuf</option>
                            <option value="bon">En bon état</option>
                            <option value="decrépitude">En décrépitude</option>
                            <option value="panne">En panne</option>
                            <option value="hors-usage">Hors d'usage</option>
                            <option value="maintenance">En maintenance</option>
                        </select>
                        <div></div>
                        <label htmlFor="nroIncident">N° Incident:</label>
                        <input type="text" disabled name="nroIncident" id="nroIncident" required />
                        {showLinkIncident ? <Link className="search-link" to="" >...rechercher</Link> : <div></div>}
                        <div></div>
                        <label htmlFor="resolu">Résolu :</label>
                        <select name="resolu" id="resolu" required defaultValue={"ras"} disabled={showResolu}>
                            <option value="">Faites votre choix</option>
                            <option value="ras">Aucun incident</option>
                            <option value="oui">Oui</option>
                            <option value="non">Non</option>
                        </select>
                        <div></div>

                        <label htmlFor="autorisation">Autorisation:</label>
                        <input type="file" name="autorisation" id="autorisation" />
                        <label htmlFor="ref">Référence :</label>
                        <input type="text" name="ref" id="ref" />
                        <div></div><div></div>
                        <button disabled={isSavingDisabled}>Enregistrer</button>
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
                                <th>Intervenant</th>
                                <th>Objet / Raison</th>
                                <th>Position</th>
                                <th>Diagnostic</th>
                                <th>Solution</th>
                                <th>Appréciations</th>
                                <th>Date</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody className='interventions-body'>
                            {interventions && interventions.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                            {interventions && interventions.length > 0 && (
                                interventions.map((intervention, id) => <tr key={intervention.id} className='dynamic-row' onClick={() => handleClick(intervention)}>
                                    <td>{intervention.nomsIntervenant}</td>
                                    <td>{intervention.objet + "//" + intervention.raison}</td>
                                    <td>{intervention.position_equipement}</td>
                                    <td>{intervention.diagnostic}</td>
                                    <td>{intervention.solution}</td>
                                    <td>{intervention.observations.substring(0, 31) + '...'}</td>
                                    <td>{intervention.dateIntervention}</td>
                                    <td>
                                        <button className="edit-btn">
                                            &#9998;
                                        </button>&nbsp;&nbsp;
                                        <button className="delete-btn" onClick={() => handleDeleteIntervention(intervention)}>
                                            &#x1F5D1;
                                        </button>
                                    </td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </fieldset>
            </section>
            {
                showRespoModal &&
                <RespoSearchModal handleCloseModal={handleCloseRespoModal} handleSelectRespo={handleSelectRespo} />
            }
            {
                showSpinner &&
                <Spinner />
            }
            {
                showSearchEquipement &&
                <EquipementSearchModal />
            }
        </>
    )
}