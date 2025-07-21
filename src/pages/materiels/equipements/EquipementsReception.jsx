import { Link } from "react-router-dom"

import './equipements.css'
import { useState } from "react"
import Fournisseur from "./Fournisseur"
import TypeEquipement from "./TypeEquipement"
import Equipement from "./Equipement"

export default function EquipementsReception() {
    const [toShow, setToShow] = useState('fournisseur')
    const [toShow2, setToShow2] = useState('')
    function handleClick() {
        setToShow('type-equipement')
    }
    function handlePrecedent() {
        setToShow('fournisseur')
    }
    return (
        <>
            <h1>Réception de Livraison d'Equipements</h1>
            <section id="reception">
                {toShow === 'fournisseur' && <Fournisseur handleClick={handleClick} />}
                {toShow === 'type-equipement' && <TypeEquipement handlePrecedent={handlePrecedent} />}
                {toShow==='type-equipement' && toShow==='equipepement' && <Equipement />}
            </section>
        </>
    )
}