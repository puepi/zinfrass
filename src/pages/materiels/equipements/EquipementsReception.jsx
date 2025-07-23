import { Link } from "react-router-dom"

import './equipements.css'
import { useState } from "react"
import Fournisseur from "./Fournisseur"
import TypeEquipement from "./TypeEquipement"
import Equipement from "./Equipement"
import Lot from "./Lot"

export default function EquipementsReception() {
    const [toShow, setToShow] = useState('fournisseur')
    const [toShow2, setToShow2] = useState(false)
    function handleClick() {
        setToShow('type-equipement')
    }
    function handlePrecedent() {
        setToShow('fournisseur')
    }
    function handleSuiv(){
        setToShow('lot')
    }
    function handleSuivant(){
        setToShow2(true)
    }
    function handlePrec(){
        setToShow('type-equipement')
    }
    return (
        <>
            <h1>Réception de Livraison d'Equipements</h1>
            <section id="reception">
                {toShow === 'fournisseur' && <Fournisseur handleClick={handleClick} />}
                {toShow === 'type-equipement' && <TypeEquipement handlePrecedent={handlePrecedent} handleSuivant={handleSuivant} handleSuiv={handleSuiv} />}
                {toShow === 'lot' && <Lot handlePrecedent={handlePrec}/>}
            </section>
        </>
    )
}