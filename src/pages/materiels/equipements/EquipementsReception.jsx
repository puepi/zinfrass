import { Link } from "react-router-dom"

import './equipements.css'
import { useState } from "react"
import Fournisseur from "./Fournisseur"
import TypeEquipement from "./TypeEquipement"
import Equipement from "./Equipement"
import Lot from "./Lot"
import { addFournisseur, addLot, getAllFournisseurs, getAllLots } from "../../../utils/ApiFunctions"

export default function EquipementsReception() {
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [messageSubmit, setMessageSubmit] = useState('Enregistrer')
    const [lots, setLots] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('...data is loading')
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageLoadingLot, setMessageLoadingLot] = useState('Aucun élément trouvé')
    const [isDisabled, setIsDisabled] = useState(false)
    const [toShow, setToShow] = useState('fournisseur')
    const [toShow2, setToShow2] = useState(false)
    const [fournisseurs, setFournisseurs] = useState([])
    const [leLot, setLeLot] = useState({})
    const [equipementData, setEquipementData] = useState({})
    const [selectedTypeEquipement, setSelectedTypeEquipement] = useState({})
    const [selectedFournisseur, setSelectedFournisseur] = useState({
        nom: '',
        id: ''
    })
    const [fournisseur, setFournisseur] = useState({})
    function handleClick() {
        setToShow('type-equipement')
    }
    function handlePrecedent() {
        setToShow('fournisseur')
    }
    function handleSuiv() {
        setToShow('lot')
    }
    function handleSuivant() {
        setToShow2(true)
    }
    function handlePrec() {
        setToShow('type-equipement')
    }
    async function registerFournisseur(formData) {
        setIsDisabled(true)
        setMessageButton("...Loading")
        const newFournisseur = {
            nom: formData.get("nom"),
            representant: formData.get("representant"),
            type: formData.get("type"),
            adresse: formData.get("adresse"),
            contact: formData.get("contact"),
            email: formData.get("email"),
            niu: formData.get("niu")
        }
        setFournisseur(newFournisseur)
        await addFournisseur(newFournisseur)
            .then(response => {
                setFournisseurs(prev => ([response, ...prev]))
                setSelectedFournisseur({
                    nom: response.nom,
                    id: response.id
                })
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Rechercher')
            })
    }
    function handleSelectRowFourniseeur(e, f) {
        setSelectedFournisseur({
            nom: f.nom,
            id: f.id
        })
    }
    function handleChange(e) {

    }
    function handleReg(formData, equipements) {
        console.log(formData)
        console.log(equipements)
        const newEq = {
            descriptive: formData.get("descriptive"),
            marque: formData.get("Marque"),
            modele: formData.get("modele"),
            quantite: formData.get("quantite"),
            caracteristics: formData.get("caracteristics"),
            couleur: formData.get("couleur"),
            equipements: equipements
        }
        setEquipementData(newEq)
    }
    function handleSelectRow(e, type) {
        setSelectedTypeEquipement({
            nom: type.nom,
            id: type.id
        })
    }
    async function showAllLots() {
        setMessageLoadingLot('...is Loading ...')
        await getAllLots()
            .then(data => setLots(data))
            .catch(error => setMessageLoadingLot('Aucun élément trouvé'))
    }
    async function handleSubmitAll(formData) {
        setMessageSubmit("...Saving...")
        console.log(selectedTypeEquipement)
        const newLot = {
            nroLot: formData.get("numLot"),
            marque: equipementData.marque,
            modele: equipementData.modele,
            couleur: equipementData.couleur,
            quantiteStock: equipementData.quantite,
            descriptive: equipementData.descriptive,
            typeEquipementId: selectedTypeEquipement.id,
            equipements: equipementData.equipements,
            nomsLivreurs: formData.get("livreurs"),
            techniciens: formData.get("technicien"),
            dateReception: formData.get("dateLivraison"),
            observations: formData.get("observations"),
            providerId: selectedFournisseur.id,
            caracteristiques: equipementData.caracteristics,
        }
        setLeLot(newLot)
        await addLot(newLot)
            .then(response => {
                setLots(prev => ([response, ...prev]))
                console.log(response)
            })
            .catch(error => { console.log(error); })
            .finally(() => setMessageSubmit('Enregistrer'))
    }
    function chercherFournisseurs() {
        setIsLoading(true)
        getAllFournisseurs()
            .then(data => { console.log("data=" + data); setFournisseurs(data) })
            .catch(error => console.log(error))
            .finally(() => { setLoadingMessage('Aucun élément trouvé'); setIsLoading(false) })
    }
    return (
        <>
            <h1>Réception de Livraison d'Equipements</h1>
            <section id="reception">
                {toShow === 'fournisseur' && <Fournisseur isLoading={isLoading} loadingMessage={loadingMessage} chercherFournisseurs={chercherFournisseurs} handleChange={handleChange} handleSelectRow={handleSelectRowFourniseeur} fournisseurs={fournisseurs} handleSuivant={handleClick} isDisabled={isDisabled} messageButton={messageButton} selectedFournisseur={selectedFournisseur} registerFournisseur={registerFournisseur} />}
                {toShow === 'type-equipement' && <TypeEquipement selectedType={selectedTypeEquipement} handlePrecedent={handlePrecedent} handleSuivant={handleSuivant} handleSuiv={handleSuiv} handleReg={handleReg} handleSelectRow={handleSelectRow} messageLoading={messageLoading} />}
                {toShow === 'lot' && <Lot messageLoadingLot={messageLoading} lots={lots} showAllLots={showAllLots} messageSubmit={messageSubmit} handlePrecedent={handlePrec} handleSubmitAll={handleSubmitAll} />}
                {/* {toShow === 'equipement' && <Equipement handleSuivant={handleSuiv} selectedTypeEquipement={selectedType} handleRegister={handleReg} />} */}
            </section>
        </>
    )
}