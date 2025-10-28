import { Link } from "react-router-dom"
import './maintenance.css'
import { useEffect, useState } from "react"
import RespoSearchModal from "../materiels/equipements/RespoSearchModal"
import { addIncident, getAllIncidents, getPaginatedAllIncidents } from "../../utils/ApiFunctions"
import { useAppStore } from "../../store/useAppStore"
import { SpinnerRow } from "../administration/StructureSave"
import Toast from "../../components/Toast"

export default function IncidentsSave() {
    const lesIncidents = useAppStore(state => state.incidents)
    const setLesIncidents = useAppStore(state => state.setIncidents)

    const [incidents, setIncidents] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [showRespoModal, setShowRespoModal] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [selectedRespo, setSelectedRespo] = useState({})

    const [isLoading, setIsLoading] = useState(false)
    const [toast, setToast] = useState(null)
    const [change, setChange] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
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

    function handleCloseRespoModal() {
        setShowRespoModal(false)
    }
    function handleSelectRespo(respo) {
        setSelectedRespo(respo)
    }
    function handleOpenRespoModal() {
        setShowRespoModal(true)
    }
    async function getIncidents() {
        setMessageLoading('...is Loading')
        await getAllIncidents()
            .then(data => {
                setIncidents(data);
                const theIncidents = data.filter(inc => inc.resolu === "non")
                setLesIncidents(theIncidents.length)
                console.log(useAppStore.getState());
            })
            .catch(error => console.log(error))
            .finally(() => setMessageLoading('Aucun élément trouvé'))
    }
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true)
            try {
                const data = await getPaginatedAllIncidents(currentPage, pageData.size)
                setPageData(data)
                const theIncidents = data.content.filter(inc => inc.resolu === "non")
                setLesIncidents(theIncidents.length)
            } catch (error) {
                console.error("Erreur lors du chargement des structures:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData()
    }, [currentPage, pageData.size, change])
    useEffect(() => {
        document.title = 'Incidents'
        // getIncidents()
    }, [])
    async function handleSubmit(formData) {
        setIsDisabled(true)
        setMessageButton("...Saving")
        setIsLoading(true)
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
                setIsDisabled(true)
                setMessageButton('...loading...')
                setIncidents(prev => [response, ...prev])
                setLesIncidents(lesIncidents + 1)
                setToast({ message: "✅ Opération réussie !", type: "success" });
                setChange(prev => prev + 1)
            })
            .catch(error => { setToast({ message: "❌ Une erreur est survenue !", type: "error" }) })
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Enregistrer')
                setIsLoading(false)
            })
    }
    let elt
    if (pageData.content.length === 0) {
        elt = <tr className='titles'><td>{messageLoading}</td></tr>
    } else {
        elt = pageData.content && pageData.content.length > 0 && (
            pageData.content.map((incident, id) => <tr key={incident.id} className='dynamic-row' onClick={() => handleClick(incident)}>
                <td>{incident.nroIncident.toUpperCase()}</td>
                <td>{incident.nature}</td>
                <td>{incident.objet}</td>
                <td>{incident.description}</td>
                <td>{incident.dateIncident}</td>
                <td>{incident.resolu}</td>
                <td>
                    <button className="edit-btn">
                        &#9998;
                    </button>&nbsp;&nbsp;
                    <button className="delete-btn">
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
    return (
        <>
            <section className="maintenance incidents">
                <fieldset>
                    <legend>Déclarations d'incidents</legend>
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
                        <label htmlFor="nature">Nature de l'obet :</label>
                        <select name="nature" id="nature" required>
                            <option value="">Sélectionner une option</option>
                            <option value="Equipement">Equipement</option>
                            <option value="Logiciel">Logiciel</option>
                            <option value="Bâtiment">Batiments</option>
                            <option value="Espace">Espace</option>
                            <option value="Lot">Espace</option>
                        </select>
                        <Link className="search-link" to="">...rechercher</Link>
                        <input type="text" name="identifiant" />
                        <label htmlFor="respoNoms">Poste affecté :</label>
                        <input type="text" name="respoNoms" id="respoNoms" disabled />
                        <input type="text" disabled name="respoStructure" id="respoStructure" />
                        <Link className="search-link" to="">...rechercher</Link>
                        <label htmlFor="objet">Objet concerné :</label>
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
                            <option value="oui">Oui</option>
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
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody className='incidence-body'>
                            {
                                isLoading ? (<SpinnerRow />) : (
                                    elt
                                )
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
                toast &&
                <Toast message={toast.message} type={toast.type} onClose={() => { setToast(null) }} />
            }
        </>
    )
}