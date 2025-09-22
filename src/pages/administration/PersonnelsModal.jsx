import { useEffect, useState } from "react"
import Modal from "../../Modal"
import { getPersonnels, getPersonnelsNomsEtPrenoms } from "../../utils/ApiFunctions"


export default function PersonnelsModal({ handleCloseModal, handleSelectPerso }) {
    const [messageButton, setMessageButton] = useState('Rechercher')
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [persos, setPersos] = useState([])
    async function getPersos() {
        setMessageLoading('...loading...')
        getPersonnels()
            .then(data => setPersos(data))
            .catch(error => { console.log(error); setMessageLoading('Aucun élément trouvé') })
    }

    useEffect(() => {
        getPersos()
    }, [])
    function handleSelectRow(e, perso) {
        handleSelectPerso(perso)
        handleCloseModal()
    }
    return (
        <Modal>
            <h4>Rechercher un personnel</h4>
            <form className='respos-search'>
                <label htmlFor="noms">Noms ou prénoms:</label>
                <input type="text" name="noms" id="noms" required />
                <div></div>
                <div></div>
                <label htmlFor="matricule">Matricule</label>
                <input type="text" name="matricule" id="matricule" />
                <div></div>
                <div></div>
                <button>{messageButton}</button>
                <div></div>
                <div></div>
                <button type="button" onClick={handleCloseModal}>Quitter</button>
            </form>
            <table className="table-perso">
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>Noms et prénoms</th>
                        <th>Matricule</th>
                    </tr>
                </thead>
                <tbody>
                    {persos && persos.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {persos && (
                        persos.map((perso, id) => <tr key={perso.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, perso)}>
                            <td>{id + 1}</td>
                            <td>{perso.noms + " " + perso.prenoms}</td>
                            <td>{perso.matricule}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </Modal>
    )
}