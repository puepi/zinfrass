import { useEffect, useState } from "react"
import './maintenance.css'
import { Link } from "react-router-dom"
import RespoSearchModal from "../materiels/equipements/RespoSearchModal"
export default function InterventionsSave() {
    const [interventions, setInterventions] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [showRespoModal, setShowRespoModal] = useState(false)
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
        document.title = 'Enregistrer des interventions'
    }, [])
    return (
        <>
            <section className="maintenance interventions">
                <fieldset>
                    <legend>Enregistrement d'une intervention</legend>
                    <form action="" id="interventions-save">
                        <label htmlFor="intervenant">Intervenant:</label>
                        <input type="text" name="intervenant" id="intervenant" required />
                        <label htmlFor="poste">Poste:</label>
                        <input type="text" name="poste" id="poste" required />
                        <label htmlFor="service">Service:</label>
                        <input type="text" name="service" id="service" required />
                        <Link className="search-link" to="" onClick={handleOpenRespoModal}>...rechercher</Link>
                        <label htmlFor="raison">Raison:</label>
                        <select name="raison" id="raison">
                            <option value="">Faites un choix</option>
                            <option value="Installation">Installation</option>
                            <option value="Installation">Réception</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Déplacement">Déplacement</option>
                            <option value="Dépannage">Incident/Dépannage</option>
                        </select>
                        <label htmlFor="diagnostic">Diagnostic:</label>
                        <input type="text" name="diagnostic" id="diagnostic" />
                        <label htmlFor="solution">Solution:</label>
                        <input type="text" name="solution" id="solution" />
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
                        <input type="text" name="objet" id="objet" />
                        <label htmlFor="indentifiant">Identifiant :</label>
                        <input type="text" name="indentifiant" id="indentifiant" />
                        <Link className="search-link" to="" >...rechercher</Link>

                        <label htmlFor="respoStructure">Au profit de :</label>
                        <input type="text" disabled name="respoStructure" id="respoStructure" />
                        <label htmlFor="respoPoste">Poste :</label>
                        <input type="text" disabled name="respoPoste" id="respoPoste" />
                        <label htmlFor="respoNoms">Noms :</label>
                        <input type="text" disabled name="respoNoms" id="respoNoms" />
                        <Link className="search-link" to="" >...rechercher</Link>

                        <label htmlFor="lieu">Lieu:</label>
                        <input type="text" name="lieu" id="lieu" />
                        <Link className="search-link" to="" >...rechercher</Link>
                        <div></div>
                        <label htmlFor="autorisation">Autorisation:</label>
                        <input type="file" name="autorisation" id="autorisation" />
                        <div></div>
                        <label htmlFor="appréciations">Observations:</label>
                        <input type="text" name="appréciations" id="appréciations" required />
                        <label htmlFor="date">Date :</label>
                        <input type="date" name="date" id="date" required />
                        <label htmlFor="type">Etat de l'objet :</label>
                        <select name="type" id="type" required>
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
                        <input type="text" disabled name="nroIncident" id="nroIncident" />
                        <Link className="search-link" to="" >...rechercher</Link>
                        <div></div>
                        <label htmlFor="resolu">Résolu :</label>
                        <select name="resolu" id="resolu" required defaultValue={"ras"}>
                            <option value="">Faites votre choix</option>
                            <option value="ras">Aucun incident</option>
                            <option value="oui">Oui</option>
                            <option value="non">Non</option>
                        </select>
                        <div></div>

                        <label htmlFor="position">Posit° Eqmt:</label>
                        <select name="position" id="position">
                            <option value="en stock">En magasin</option>
                            <option value="out stock">Hors du magasin</option>
                        </select>
                        <div></div><div></div><div></div><div></div>
                        <button>Enregistrer</button>
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
                                <th>Objet</th>
                                <th>Raison</th>
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
                                    <td>{intervention.objet}</td>
                                    <td>{intervention.raison}</td>
                                    <td>{intervention.diagnostic}</td>
                                    <td>{intervention.solution}</td>
                                    <td>{intervention.appreciations}</td>
                                    <td>{intervention.dateIntervention}</td>
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
                </fieldset>
            </section>
            {
                showRespoModal &&
                <RespoSearchModal handleCloseModal={handleCloseRespoModal} handleSelectRespo={handleSelectRespo} />
            }
        </>
    )
}