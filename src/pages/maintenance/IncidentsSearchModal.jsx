import { useEffect, useState } from "react"
import { getAllIncidents } from "../../utils/ApiFunctions"
import Modal from "../../Modal"



export default function IncidentsSearchModal({ handleCloseModal, handleSelectIncident }) {
    const [incidents, setIncidents] = useState([])
    const [messageButton, setMessageButton] = useState('Rechercher')
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    async function getIncidents() {
        setMessageLoading('...is Loading...')
        getAllIncidents()
            .then(data => setIncidents(data))
            .catch(error => { console.log(error); setMessageLoading('Aucun élément trouvé') })
            .finally(() => setMessageLoading('Aucun élément trouvé'))
    }

    useEffect(() => {
        getIncidents()
    }, [])

    function handleSelectRow(e, incident) {
        handleSelectIncident(incident)
        handleCloseModal()
    }
    function handleCloseModal2() {
        console.log("quitter")
    }
    return (
        <Modal>
            <h4>Rechercher un incident</h4>
            <form className='equipement-search'>
                <label htmlFor="nature">Nature :</label>
                <select name="nature" id="nature">
                    <option value="equipement">Equipement</option>
                    <option value="espace">Espace</option>
                    <option value="bâtiment">Bâtiment</option>
                </select>
                <div></div>
                <div></div>
                <label htmlFor="lieu">Lieu :</label>
                <input type="text" name="lieu" id="lieu" />
                <div></div>
                <div></div>
                <button>{messageButton}</button>
                <div></div>
                <div></div>
                <button type="button" onClick={handleCloseModal}>Quitter</button>
            </form>
            <table className="table-equipement">
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>N° incident</th>
                        <th>Nature</th>
                        <th>Objet</th>
                        <th>Date</th>
                        <th>Résolu</th>
                    </tr>
                </thead>
                <tbody>
                    {incidents && incidents.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {incidents && (
                        incidents.map((incident, id) => <tr key={incident.id} className='dynamic-row rows' onClick={(e) => handleSelectRow(e, incident)}>
                            <td>{id + 1}</td>
                            <td>{incident.nroIncident}</td>
                            <td>{incident.nature}</td>
                            <td>{incident.objet}</td>
                            <td>{incident.dateIncident}</td>
                            <td>{incident.resolu}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </Modal>
    )
}