import { useEffect, useState } from "react"
import './maintenance.css'
import { Link } from "react-router-dom"
import RespoSearchModal from "../materiels/equipements/RespoSearchModal"
import { addDepannage, addInstallation, deleteIntervention, getInterventions, getPaginatedAllInterventions } from "../../utils/ApiFunctions"
import Spinner from '../../components/Spinner'
import EquipementsSearchModal from "../materiels/equipements/EquipementsSearchModal"
import { SpinnerRow } from "../administration/StructureSave"
import EspaceSearchModal from "./EspaceSearchModal"
import IncidentsSearchModal from "./IncidentsSearchModal"
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
    const [showSearchEquipement, setShowSearchEquipement] = useState(false)
    const [showSearchEspace, setShowSearchEspace] = useState(false)
    const [selectedEquipement, setSelectedEquipement] = useState({})
    const [selectedProfit, setSelectedProfit] = useState({})
    const [showRespoProfit, setShowRespoProfit] = useState(false)
    const [selectedEspace, setSelectedEspace] = useState({})
    const [valueStock, setValueStock] = useState(null)
    const [showSearchIncident, setShowSearchIncident] = useState(false)
    const [selectedIncident, setSelectedIncident] = useState({})

    const [currentPage, setCurrentPage] = useState(0)
    const [change, setChange] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [pageData, setPageData] = useState({
        content: [],
        number: 0,
        size: 5,
        totalElements: 0,
        totalPages: 0,
        first: true,
        last: true,
        empty: true
    })

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true)
                const data = await getPaginatedAllInterventions(currentPage, pageData.size)
                setPageData(data)
            } catch (error) {

            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [currentPage, pageData.size, change])

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
        document.title = 'Interventions'
        // getAllInterventions()
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
        setShowSpinner(true)
        await deleteIntervention(id)
            .then(response => {
                const interv = pageData.content
                setPageData(data => ({ ...data, content: interv.filter(int => int.id !== id) }))
                setChange(prev => prev + 1)
                setToast({ message: "✅ Opération réussie !", type: "success" });
            })
            .catch(error => { console.log(error); setToast({ message: "❌ Une erreur est survenue !", type: "error" }); })
            .finally(() => setShowSpinner(false))
    }
    function handleClick(intervention) { }
    async function handleSaveIntervention(formData) {
        const newIntervention = {
            nomsIntervenant: selectedRespo.noms,
            poste: formData.get('poste'),
            service: formData.get('service'),
            raison: formData.get('raison'),
            diagnostic: formData.get('diagnostic'),
            solution: formData.get('solution'),
            nature: formData.get('nature'),
            objet: formData.get('objet'),
            identifiant: selectedEquipement.identifiant,
            structure_affecte: formData.get('respoStructure'),
            poste_affecte: formData.get('respoPoste'),
            personne_affecte: formData.get('respoNoms'),
            lieu: selectedEspace.nom,
            position_equipement: formData.get('position'),
            observations: formData.get('observations'),
            dateIntervention: formData.get('date'),
            etat_objet: formData.get('etat'),
            nroIncident: selectedIncident.nroIncident || formData.get('nroIncident'),
            resolu: formData.get('resolu'),
            ref_autorisation: formData.get('ref'),
        }
        setSelectedIntervention(newIntervention)
        if (formData.get('raison') === 'Installation') {
            setShowSpinner(true)
            await addInstallation(newIntervention)
                .then(response => {
                    const interv = pageData.content
                    setPageData(prev => ({ ...prev, content: [...interv, response] }))
                    setChange(prev => prev + 2)
                    setToast({ message: "✅ Opération réussie !", type: "success" });
                })
                .catch(error => {
                    setToast({ message: "❌ Une erreur est survenue !", type: "error" });
                })
                .finally(() => { setShowSpinner(false) })
        }
        if (formData.get('raison') === 'Dépannage') {
            setShowSpinner(true)
            await addDepannage(newIntervention)
                .then(response => {
                    const interv = pageData.content
                    setPageData(prev => ({ ...prev, content: [...interv, response] }))
                    setChange(prev => prev + 3)
                    setToast({ message: "✅ Opération réussie !", type: "success" });
                })
                .catch(error => {
                    setToast({ message: "❌ Une erreur est survenue !", type: "error" });
                })
                .finally(() => { setShowSpinner(false) })
        }
    }
    function handleOpenSearchEquipementModal() {
        setShowSearchEquipement(true)
    }
    function handleCloseEquipementModal() {
        setShowSearchEquipement(false)
    }
    function handleSelectEquipement(equipement) {
        console.log(equipement)
        setSelectedEquipement({ identifiant: equipement.numeroUnique })
    }
    function handleChangeRaison(e) {
        if (e.target.value === "Installation" || e.target.value === "Dépannage") {
            setShowLinkProfit(true)
        }
        if (e.target.value === "Dépannage") {
            setShowDiagnostic(false)
            setShowSolution(false)
            setShowLinkIncident(true)
            setShowResolu(false)
            setValueStock('no')
        }
    }
    function handleShowRespo() {
        setShowRespoProfit(true)
    }
    function handleSelectRespoProfit(profit) {
        setSelectedProfit(profit)
    }
    function handleCloseRespoModalProfit() {
        setShowRespoProfit(false)
    }
    function handleCloseIncidentModal() {
        setShowSearchIncident(false)
    }
    function handleSelectIncident(incident) {
        setSelectedIncident({ nroIncident: incident.nroIncident })
    }
    function handleChangeIncident(e) {
        setSelectedIncident(e.target.value)
    }
    let elt
    if (pageData.content.length === 0) {
        elt = <tr className='titles'><td>{messageLoading}</td></tr>
    } else {
        elt = pageData.content.length > 0 && (
            pageData.content.map((intervention, id) => <tr key={intervention.id} className='dynamic-row' onClick={() => handleClick(intervention)}>
                <td>{id + 1 + (pageData.number * pageData.size)}</td>
                <td>{intervention.nomsIntervenant}</td>
                <td>{intervention.objet + "//" + intervention.raison}</td>
                <td>{intervention.position_equipement + '//' + intervention.dateIntervention}</td>
                <td>{intervention.diagnostic}</td>
                <td>{intervention.solution}</td>
                <td>{intervention.observations.substring(0, 31) + '...'}</td>
                <td>
                    <button className="edit-btn">
                        &#9998;
                    </button>&nbsp;&nbsp;
                    <button className="delete-btn" onClick={() => handleDeleteIntervention(intervention)}>
                        &#x1F5D1;
                    </button>
                </td>
            </tr>)
        )
    }
    function handleNext() {
        setCurrentPage(prev => prev + 1)
    }
    function handlePrev() {
        setCurrentPage(prev => prev - 1)
    }
    function handleOpenEspaceModal() {
        setShowSearchEspace(true)
    }
    function handleCloseEspaceModal() {
        setShowSearchEspace(false)
    }
    function handleSelectEspace(espace) {
        setSelectedEspace({ nom: espace.nom })
    }
    function handleChange(e) {
        setSelectedEspace(e.target.value)
    }
    function handleOpenIncidentModal() {
        setShowSearchIncident(true)
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
                        <select name="raison" id="raison" required onChange={handleChangeRaison}>
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
                        <label htmlFor="identifiant">Identifiant :</label>
                        <input type="text" disabled name="identifiant" id="identifiant" required value={selectedEquipement.identifiant} />
                        <Link className="search-link" to="" onClick={handleOpenSearchEquipementModal}>...rechercher</Link>

                        <label htmlFor="respoStructure">Au profit de :</label>
                        <input type="text" disabled name="respoStructure" id="respoStructure" required value={selectedProfit.nomStructure} />
                        <label htmlFor="respoPoste">Poste :</label>
                        <input type="text" disabled name="respoPoste" id="respoPoste" required value={selectedProfit.nomPoste} />
                        <label htmlFor="respoNoms">Noms :</label>
                        <input type="text" disabled name="respoNoms" id="respoNoms" required value={selectedProfit.noms} />
                        {showLinkProfit ? <Link className="search-link" to="" onClick={handleShowRespo}>...rechercher</Link> : <div></div>}

                        <label htmlFor="lieu">Lieu:</label>
                        <input type="text" name="lieu" id="lieu" disabled={showLieu} value={selectedEspace.nom} onChange={handleChange} />
                        {showLinkLieu ? <Link className="search-link" to="" onClick={handleOpenEspaceModal}>...rechercher</Link> : <div></div>}
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
                            <option value="bon">En bon état, réparé</option>
                            <option value="decrépitude">En décrépitude</option>
                            <option value="panne">En panne</option>
                            <option value="observer">Réparé, à observer</option>
                            <option value="hors-usage">Hors d'usage</option>
                            <option value="maintenance">En maintenance</option>
                        </select>
                        <div></div>
                        <label htmlFor="nroIncident">N° Incident:</label>
                        <input type="text" onChange={handleChangeIncident} disabled name="nroIncident" id="nroIncident" required value={selectedIncident.nroIncident} />
                        {showLinkIncident ? <Link className="search-link" to="" onClick={handleOpenIncidentModal}>...rechercher</Link> : <div></div>}
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
                                <th>N°</th>
                                <th>Intervenant</th>
                                <th>Objet / Raison</th>
                                <th>Position/Date</th>
                                <th>Diagnostic</th>
                                <th>Solution</th>
                                <th>Appréciations</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody className='interventions-body'>
                            {
                                isLoading ? <SpinnerRow /> : elt
                            }
                        </tbody>
                    </table>
                    {
                        pageData.content.length > 0 && (
                            <div className="navigation">
                                <div>Page <span>{pageData.number + 1}</span> sur <span>{pageData.totalPages}</span></div>
                                <button onClick={handlePrev} disabled={pageData.first}>&laquo;</button>
                                <button onClick={handleNext} disabled={pageData.last}>&raquo;</button>
                            </div>
                        )
                    }

                </fieldset>
            </section>
            {
                showRespoModal &&
                <RespoSearchModal handleCloseModal={handleCloseRespoModal} handleSelectRespo={handleSelectRespo} />
            }
            {
                showRespoProfit &&
                <RespoSearchModal handleCloseModal={handleCloseRespoModalProfit} handleSelectRespo={handleSelectRespoProfit} />
            }
            {
                showSpinner &&
                <Spinner />
            }
            {
                showSearchEquipement &&
                <EquipementsSearchModal value={valueStock} handleCloseModal={handleCloseEquipementModal} handleSelectEquipement={handleSelectEquipement} />
            }
            {
                showSearchEspace &&
                <EspaceSearchModal handleCloseModal={handleCloseEspaceModal} handleSelectEspace={handleSelectEspace} />
            }
            {
                showSearchIncident &&
                <IncidentsSearchModal handleCloseModal={handleCloseIncidentModal} handleSelectIncident={handleSelectIncident} />
            }
        </>
    )
}

