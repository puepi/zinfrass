import { useEffect, useState } from "react"
import './maintenance.css'
import { Link } from "react-router-dom"
export default function InterventionsSave() {
    const [interventions, setInterventions] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    useEffect(() => {
        document.title = 'Enregistrer des interventions'
    }, [])
    return (
        <>
            <h1>Enregistrement des interventions</h1>
            <section className="maintenance interventions">
                <form action="" id="interventions-save">
                    <label htmlFor="intervenant">Intervenant:</label>
                    <input type="text" name="intervenant" id="intervenant" required />
                    <label htmlFor="poste">Poste:</label>
                    <input type="text" name="poste" id="poste" required />
                    <label htmlFor="service">Service:</label>
                    <input type="text" name="service" id="service" required />
                    <Link className="search-link" to="" >...rechercher</Link>
                    <label htmlFor="nature">Nature:</label>
                    <select name="nature" id="nature" required>
                        <option value="">Sélectionner une option</option>
                        <option value="Materiel en stock">Matériel en stock</option>
                        <option value="Materiel octroyé">Matériel octroyé</option>
                        <option value="Logiciel">Logiciel</option>
                        <option value="Bâtiment">Batiments</option>
                        <option value="Espace">Espace</option>
                    </select>
                    <label htmlFor="objet">Objet:</label>
                    <input type="text" name="objet" id="objet" />
                    <label htmlFor="indentifiant">Identifiant :</label>
                    <input type="text" name="indentifiant" id="indentifiant" />
                    <Link className="search-link" to="" >...rechercher</Link>
                    <label htmlFor="lieu">Lieu:</label>
                    <input type="text" name="lieu" id="lieu" />
                    <Link className="search-link" to="" >...rechercher</Link>
                    <div></div>
                    <label htmlFor="autorisation">Autorisation :</label>
                    <input type="file" name="autorisation" id="autorisation" />
                    <div></div>
                    <label htmlFor="raison">Raison:</label>
                    <select name="raison" id="raison">
                        <option value="">Faites un choix</option>
                        <option value="Installation">Installation</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Déplacement">Déplacement</option>
                        <option value="Dépannage">Incident/Dépannage</option>
                    </select>
                    <label htmlFor="diagnostic">Diagnostic:</label>
                    <input type="text" name="diagnostic" id="diagnostic" />
                    <label htmlFor="solution">Solution:</label>
                    <input type="text" name="solution" id="solution" />
                    <div></div>
                    <label htmlFor="nroIncident">N° Incident:</label>
                    <input type="text" name="nroIncident" id="nroIncident" />
                    <Link className="search-link" to="" >...rechercher</Link>
                    <div></div>
                    <label htmlFor="resolu">Résolu :</label>
                    <select name="resolu" id="resolu" required>
                        <option value="">Faites votre choix</option>
                        <option value="oui">Oui</option>
                        <option value="oui">Non</option>
                    </select>
                    <div></div>
                    <label htmlFor="appréciations">Appréciations:</label>
                    <input type="text" name="appréciations" id="appréciations" required />
                    <label htmlFor="date">Date :</label>
                    <input type="date" name="date" id="date" required />
                    <div></div><div></div>
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
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>
        </>
    )
}