import { useEffect, useState } from "react"
import { getEquipementsStock } from "../../../utils/ApiFunctions"
import Modal from "../../../Modal"



export default function EquipementsSearchModal(handleCloseModal, handleSelectEquipement) {
    const [equipements, setEquipements] = useState([])
    const [messageButton, setMessageButton] = useState('Rechercher')
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    async function getEquipements() {
        setMessageLoading('...is Loading...')
        getEquipementsStock()
            .then(data => setEquipements(data))
            .catch(error => { console.log(error); setMessageLoading('Aucun élément trouvé') })
    }

    useEffect(() => {
        getEquipements()
    }, [])

    function handleSelectRow(e, equipement) {
        handleSelectEquipement(equipement)
        handleCloseModal()
    }
    return (
        <Modal>
            <h4>Rechercher un équipement</h4>
            <form className='equipement-search'>
                <label htmlFor="position">Position :</label>
                <select name="position" id="position">
                    <option value="en stock">En stock</option>
                    <option value="out stock">Hors stock</option>
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
                        <th>N° de série</th>
                        <th>N° unique</th>
                        <th>N° de lot</th>
                        <th>Position courante</th>
                        <th>Lieu</th>
                    </tr>
                </thead>
                <tbody>
                    {equipements && equipements.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {equipements && (
                        equipements.map((equipement, id) => <tr key={equipement.id} className='dynamic-row rows' onClick={(e) => handleSelectRow(e, lot)}>
                            <td>{id + 1}</td>
                            <td>{equipement.numeroSerie}</td>
                            <td>{equipement.numeroUnique}</td>
                            <td>{equipement.nroLot}</td>
                            <td>{equipement.currentPosition}</td>
                            <td>{equipement.lieu}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </Modal>
    )
}