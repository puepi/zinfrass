import { Link } from 'react-router-dom'
import './factures.css'
import { useEffect, useState } from 'react'
import FacturesShow from './FacturesShow'
import BatimentSearchModal from './BatimentSearchModal'
import { addFactures, getAllFactures } from '../../utils/ApiFunctions'
export default function FacturesSave() {
    const [batimentResponse, setBatimentResponse] = useState({})
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [isDisabled, setIsDisabled] = useState(false)
    const [factures, setFactures] = useState([])
    const [facture, setFacture] = useState({
        type: '',
        numFacture: "",
        numCompteur: '',
        debut: '',
        fin: '',
        consommation: '',
        montant: '',
        oldIndex: '',
        newIndex: '',
        batimentId: '',
    })
    const [showModal, setShowModal] = useState(false)

    const handleLinkClick = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }
    function handleSelectBatiment(batiment) {
        setBatimentResponse(batiment)
    }
    const handleSubmit = async (formData) => {
        setIsDisabled(true)
        setMessageButton("...Loading")
        const newFacture = {
            type: formData.get("type"),
            numFacture: formData.get("numFacture"),
            numCompteur: formData.get("numCompteur"),
            debut: formData.get("debut"),
            fin: formData.get("fin"),
            consommation: formData.get("consommation"),
            montant: formData.get("montant"),
            oldIndex: formData.get("oldIndex"),
            newIndex: formData.get("newIndex"),
            batimentId: batimentResponse.id
        }
        setFacture(newFacture)
        await addFactures(newFacture)
            .then(response => {
                setFactures(prev => [response, ...prev])
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Rechercher')
            })
    }
    async function shoAllFactures() {
        setMessageLoading('...is Loading ...')
        await getAllFactures()
            .then(data => setFactures(data))
            .catch(error => setMessageLoading('Aucun élément trouvé'))
    }
    useEffect(() => {
        shoAllFactures()
    }, [])
    return (
        <>
            <h1 className='factures-heading'>Enregistrement d'une facture</h1>
            <section className="factures">
                <form id="save-form" action={handleSubmit}>
                    <label htmlFor="numFacture">Numéro facture:</label>
                    <input type="text" id="numFacture" name="numFacture" />
                    <div></div>
                    <label htmlFor="numCompteur">Numéro compteur:</label>
                    <input type="text" id="numCompteur" name="numCompteur" />
                    <label htmlFor="debut">Période du :</label>
                    <input type="date" id="debut" name="debut" />
                    <div></div>
                    <label htmlFor="fin">Au :</label>
                    <input type="date" id="fin" name="fin" />
                    <label htmlFor="type">Type de facture :</label>
                    <select name="type" id="type" required>
                        <option value="">Sélectionner une option</option>
                        <option value="Eau">Facture d'eau</option>
                        <option value="Electricité">Facture d'électricité</option>
                    </select>
                    <div></div>
                    <label htmlFor="montant">Montant :</label>
                    <input type="number" id="montant" name='montant' />
                    <label htmlFor="oldIndex">Ancien index :</label>
                    <input type="number" id="oldIndex" name="oldIndex" />
                    <div></div>
                    <label htmlFor="newIndex">Nouvel index :</label>
                    <input type="number" id="newIndex" name='newIndex' />
                    <label htmlFor="consommation">Consommation :</label>
                    <input type="number" id="consommation" name='consommation' />
                    <div></div>
                    <label htmlFor="">Unités :</label>
                    <label htmlFor="">Mètres cube (m3)</label>
                    <label htmlFor="batiment">Bâtiment :</label>
                    <input type="text" name="batiment" id="batiment" value={batimentResponse.nom} disabled />
                    <Link to="#" className='search-link' onClick={handleLinkClick}>...rechercher</Link>
                    <div></div>
                    <button disabled={isDisabled}>{messageButton}</button>
                </form>
            </section>
            <FacturesShow factures={factures} messageLoading={messageLoading} />
            {
                showModal &&
                <BatimentSearchModal handleCloseModal={handleCloseModal} handleSelectBatiment={handleSelectBatiment} />
            }

        </>
    )
}