import { Link } from "react-router-dom"

import './equipements.css'
import { useState } from "react"
import Fournisseur from "./Fournisseur"
import TypeEquipement from "./TypeEquipement"

export default function EquipementsReception() {
    const [toShow, setToShow] = useState('fournisseur')
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
            </section>
        </>
    )
}