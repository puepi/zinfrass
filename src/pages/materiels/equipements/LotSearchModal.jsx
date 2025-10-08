import { useEffect, useState } from "react"
import { getAllLots, getAllTypesEquipement } from "../../../utils/ApiFunctions"
import Modal from "../../../Modal"


export default function LotSearchModal({ handleCloseModal, handleSelectLot }) {
    const [typesEquipement, setTypesEquipement] = useState([])
    const [lots, setLots] = useState([])
    const [messageButton, setMessageButton] = useState('Rechercher')
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    async function getTypesEquipement() {
        getAllTypesEquipement()
            .then(data => setTypesEquipement(data))
            .catch(error => console.log(error))
    }

    async function getLots() {
        setMessageLoading('...is Loading...')
        getAllLots()
            .then(data => setLots(data))
            .catch(error => { console.log(error); setMessageLoading('Aucun élément trouvé') })
    }

    useEffect(() => {
        getTypesEquipement()
        getLots()
    }, [])

    async function handleRechercher() {

    }

    function handleSelectRow(e, lot) {
        handleSelectLot(lot)
        handleCloseModal()
    }

    return (
        <Modal>
            <h4>Rechercher un Lot</h4>
            <form className='lot-search' action={handleRechercher}>
                <label htmlFor="dateReception">Date de réception:</label>
                <input type="date" name="dateReception" id="dateReception" required />
                <div></div>
                <div></div>
                <label htmlFor="typEquipement">Type d'équipement</label>
                <select name="typEquipement" id="typEquipement" required>
                    <option value="">Choisir</option>
                    {
                        typesEquipement.map(t => <option key={t.id} value={t.nom}>{t.nom}</option>)
                    }
                </select>
                <div></div>
                <div></div>
                <button>{messageButton}</button>
                <div></div>
                <div></div>
                <button type="button" onClick={handleCloseModal}>Quitter</button>
            </form>
            <table className="table-lot">
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>N° du lot</th>
                        <th>Type d'équipement</th>
                        <th>Date de réception</th>
                        <th>Marque</th>
                        <th>Modèle</th>
                    </tr>
                </thead>
                <tbody>
                    {lots && lots.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {lots && (
                        lots.map((lot, id) => <tr key={lot.id} className='dynamic-row rows' onClick={(e) => handleSelectRow(e, lot)}>
                            <td>{id + 1}</td>
                            <td>{lot.nroLot}</td>
                            <td>{lot.typeEquipementName}</td>
                            <td>{lot.dateReception}</td>
                            <td>{lot.marque}</td>
                            <td>{lot.modele}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </Modal>
    )
}