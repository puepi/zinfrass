import { useEffect, useState } from "react"
import { getAllEspaces } from "../../utils/ApiFunctions"
import Modal from "../../Modal"


export default function EspaceSearchModal({ handleCloseModal, handleSelectEspace }) {
    const [espaces, setEspaces] = useState([])
    const [messageButton, setMessageButton] = useState('Rechercher')
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    async function getEspaces() {
        setMessageLoading('...is Loading...')
        getAllEspaces()
            .then(data => setEspaces(data))
            .catch(error => { console.log(error); setMessageLoading('Aucun élément trouvé') })
            .finally(() => setMessageLoading('Aucun élément trouvé'))
    }

    useEffect(() => {
        getEspaces()
    }, [])

    function handleSelectRow(e, espace) {
        handleSelectEspace(espace)
        handleCloseModal()
    }

    return (
        <Modal>
            <h4>Rechercher un espace</h4>
            <form className='espace-search'>
                <label htmlFor="usage">Usage :</label>
                <select name="usage" id="usage">
                    <option value="bureau">Bureau</option>
                    <option value="magasin">Magasin</option>
                    <option value="salle de réunion">Salle de réunion</option>
                </select>
                <div></div>
                <div></div>
                <label htmlFor="bâtiment">Bâtiment :</label>
                <input type="text" name="bâtiment" id="bâtiment" />
                <div></div>
                <div></div>
                <button>{messageButton}</button>
                <div></div>
                <div></div>
                <button type="button" onClick={handleCloseModal}>Quitter</button>
            </form>
            <table className="table-espace">
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>Nom</th>
                        <th>Position</th>
                        <th>Usage</th>
                        <th>Bâtiment</th>
                    </tr>
                </thead>
                <tbody>
                    {espaces && espaces.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {espaces && (
                        espaces.map((espace, id) => <tr key={espace.id} className='dynamic-row rows' onClick={(e) => handleSelectRow(e, espace)}>
                            <td>{id + 1}</td>
                            <td>{espace.nom}</td>
                            <td>{espace.position}</td>
                            <td>{espace.usage}</td>
                            <td>{espace.batimentNom}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </Modal>
    )
}