import { useState } from "react";
import Batiment from "./Batiment";

import './batiments.css'
import BatimentsShow from "./BatimentsShow";
export default function BatimentSave() {
    const [isDisabled, setIsDisabled] = useState(false)
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [subdivision, setSubdivision] = useState({})
    const [batiments, setBatiments] = useState([])

    const handleSubmit = async (formData) => {
        setIsDisabled(true)
        setMessageButton("...Loading")
        const newBatiment = {
            nom: formData.get("nom"),
            nature: formData.get("nature"),
            description: formData.get("description"),
            retrocede: formData.get("retrocede"),
            dateRetrocession: formData.get("dateRetrocession"),
            subdivisionId: subdivision.id
        }
        setFacture(newBatiment)
        await addFactures(newBatiment)
            .then(response => {
                setBatiments(prev => [response, ...prev])
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Rechercher')
            })
    }
    return (
        <>
            <h1>Enregistrement d'un nouveau bâtiment</h1>
            <Batiment handleSubmit={handleSubmit} isDisabled={isDisabled} messageButton={messageButton} />
            <BatimentsShow />
        </>
    )
}

