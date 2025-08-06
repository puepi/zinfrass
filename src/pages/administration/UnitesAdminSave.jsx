import { Link } from "react-router-dom"
import SubdivisionsShow from "./SubdivisionsShow"
import { useState } from "react"
import { getAllSubdivisions } from "../../utils/ApiFunctions"

export default function UnitesAdminSave() {
    const [subdivisions,setSubdivisions]=useState([])
    const [messageButton,setMessageButton]=useState('Aucun élément trouvé')

    async function handleRegister(formData){

    }

    async function getAllUnits(){
        setMessageButton('... is loading...')
        await getAllSubdivisions()
            .then(data=>{setMessageButton('... is loading...');setSubdivisions(data)})
            .catch(error=>setMessageButton('Aucun élément trouvé'))
    }
    return (
        <>
            <h1>Créer les subdivisions administratives</h1>
            <section className="structures">
                <form action="handleRegister" id="structures-unites-admin">
                    <label htmlFor="nature">Nature :</label>
                    <select name="nature" id="nature" required>
                        <option value="">Sélectionner une option</option>
                        <option value="Centraux">Services centraux</option>
                        <option value="Région">Région</option>
                        <option value="Département">Département</option>
                        <option value="Arrondissement">Arrondissement</option>
                    </select>
                    <label htmlFor="parent">Rattachée à :</label>
                    <input type="text" disabled name="parent" id="parent"/>
                    <Link className="search-link" to="/administration/unites_admin/show">...rechercher</Link>
                    <label htmlFor="">Nombre :</label>
                    <input type="text" disabled/>
                    <button disabled>Ajouter</button>
                    <div className="empty"></div>
                    <label htmlFor="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" required/>
                    <button>Enregistrer</button>
                    <div className="empty"></div>
                </form>
                <SubdivisionsShow subdivisions={subdivisions} getAllUnits={getAllUnits} messageButton={messageButton}/>
            </section>
        </>
    )
}