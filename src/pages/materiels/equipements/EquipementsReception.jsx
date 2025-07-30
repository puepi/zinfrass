import { Link } from "react-router-dom"

import './equipements.css'
import { useState } from "react"
import Fournisseur from "./Fournisseur"
import TypeEquipement from "./TypeEquipement"
import Equipement from "./Equipement"
import Lot from "./Lot"
import { addFournisseur } from "../../../utils/ApiFunctions"

export default function EquipementsReception() {
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [isDisabled, setIsDisabled] = useState(false)
    const [toShow, setToShow] = useState('fournisseur')
    const [toShow2, setToShow2] = useState(false)
    const [fournisseurs, setFournisseurs] = useState([])
    const [selectedFournisseur, setSelectedFournisseur] = useState({
        nom: '',
        id: ''
    })
    const [fournisseur, setFournisseur] = useState({
        nom: '',
        representant: '',
        type: '',
        adresse: '',
        contact: '',
        email: '',
        niu: ''
    })
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
                setFournisseurs(prev => ([...prev, response]))
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
    function handleSelectRow(e, f) {
        setSelectedFournisseur({
            nom: f.nom,
            id: f.id
        })
    }
    function handleChange(e) {

    }
    return (
        <>
            <h1>Réception de Livraison d'Equipements</h1>
            <section id="reception">
                {toShow === 'fournisseur' && <Fournisseur handleChange={handleChange} handleSelectRow={handleSelectRow} lesFournisseurs={fournisseurs} handleSuivant={handleClick} isDisabled={isDisabled} messageButton={messageButton} selectedFournisseur={selectedFournisseur} registerFournisseur={registerFournisseur} />}
                {toShow === 'type-equipement' && <TypeEquipement handlePrecedent={handlePrecedent} handleSuivant={handleSuivant} handleSuiv={handleSuiv} />}
                {toShow === 'lot' && <Lot handlePrecedent={handlePrec} />}
            </section>
        </>
    )
}