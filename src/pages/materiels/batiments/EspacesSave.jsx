import { Link } from "react-router-dom"
import EspacesShow from "./EspacesShow"
import { useEffect, useState } from "react"
import { addEspace, getAllEspaces } from "../../../utils/ApiFunctions"
import BatimentSearchModal from "../../factures/BatimentSearchModal"

export default function EspacesSave() {
    const [selectedBatiment, setSelectedBatiment] = useState({})
    const [espaces, setEspaces] = useState([])
    const [loadingMessage, setLoadingMessage] = useState('Enregistrer')
    const [isDisabled, setIsDisabled] = useState(false)
    const [messageButton, setMessageButton] = useState('Aucun élément trouvé')
    const [showModal, setShowModal] = useState(false)
    async function handleRegister(formData) {
        const newEspace = {
            nom: formData.get("nom"),
            position: formData.get('position'),
            usage: formData.get('usage'),
            dimensions: formData.get('dimensions'),
            batimentId: selectedBatiment.id,
        }
        setIsDisabled(true)
        setLoadingMessage('..in progress..')
        await addEspace(newEspace)
            .then(response => setEspaces(prev => [response, ...prev]))
            .catch(error => console.log(error))
            .finally(() => { setIsDisabled(false); setLoadingMessage('Enregistrer') })
    }
    async function getEspaces() {
        setMessageButton('...is loading ...')
        await getAllEspaces()
            .then(data => setEspaces(data))
            .catch(error => { setMessageButton('Aucun élément trouvé') })
    }
    useEffect(() => {
        document.title = "Créer des espaces au sein des bâtiments"
        getEspaces()
    }, [])
    function handleClick() {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    function handleSelectBatiment(batiment) {
        setSelectedBatiment(batiment)
    }
    return (
        <>
            <h1>Création d'espaces au sein d'un bâtiment</h1>
            <section className="batiments">
                <form action={handleRegister} id="espaces-save">
                    <label htmlFor="">Nom du bâtiment :</label>
                    <input type="text" disabled value={selectedBatiment.nom} />
                    <Link className="search-link" onClick={handleClick}>...rechercher</Link><div></div>
                    <label htmlFor="nom">Nom de l'espace :</label>
                    <input type="text" placeholder="Bureau des cadres..." name="nom" id="nom" />
                    <label htmlFor="usage">Usage : <Link className="create-link">...Créer</Link></label>
                    <select name="usage" id="usage">
                        <option value="">Sélectionner une option</option>
                        <option value="add an option">--- Add an option ---</option>
                        <option value="Etage">Etage</option>
                        <option value="Secrétariat">Secrétariat</option>
                        <option value="Rez de chaussée">Rez de chaussée</option>
                        <option value="Bureau">Bureau</option>
                        <option value="Sous-sol">Sous-sol</option>
                        <option value="Toilettes">Toilettes/WC</option>
                        <option value="Salle de réunion">Salle de réunion</option>
                        <option value="Bibliothèque">Bibliothèque</option>
                        <option value="Parking">Parking</option>
                    </select>
                    <label htmlFor="position">Repérage unique :</label>
                    <input type="text" placeholder="Porte R3" name="position" id="position" />
                    <label htmlFor="dimensions">Dimensions :</label>
                    <input type="text" name="dimensions" id="dimensions" />
                    <label htmlFor="description">Description :</label>
                    <input type="text" name="description" id="description" />
                    <label htmlFor="">Photos :</label>
                    <input type="file" />
                    <button disabled={isDisabled}>{loadingMessage} </button>
                    <div className="empty1"></div>

                </form>
                <EspacesShow espaces={espaces} messageButton={messageButton} />
                {
                    showModal &&
                    <BatimentSearchModal handleCloseModal={handleCloseModal} handleSelectBatiment={handleSelectBatiment} />
                }
            </section>

        </>
    )
}