import { Link } from "react-router-dom"
import EspacesShow from "./EspacesShow"
import { useState } from "react"

export default function EspacesSave() {
    const [selectedBatiment,setSelectedBatiment]=useState({})
    const [espaces,setEspaces]=useState([])
    function handleRegister(){

    }
    return (
        <>
            <h1>Création d'espaces au sein d'un bâtiment</h1>
            <section className="batiments">
                <form action={handleRegister} id="espaces-save">
                    <label htmlFor="">Nom du bâtiment :</label>
                    <input type="text" disabled value={selectedBatiment.nom}/>
                    <Link className="search-link">...rechercher</Link><div></div>
                    <label htmlFor="nom">Nom de l'espace :</label>
                    <input type="text" placeholder="Bureau des cadres..." name="nom" id="nom"/>
                    <label htmlFor="usage">Usage : <Link className="create-link">...Créer</Link></label>
                    <select name="usage" id="usage">
                        <option value="">Sélectionner une option</option>
                        <option value="">--- Add an option ---</option>
                        <option value="">Rez de chaussée</option>
                        <option value="">Etage</option>
                        <option value="">Bureau</option>
                        <option value="">Sous-sol</option>
                        <option value="">Toilettes/WC</option>
                        <option value="">Salle de réunion</option>
                        <option value="">Bibliothèque</option>
                        <option value="">Parking</option>
                    </select>
                    <label htmlFor="position">Repérage unique :</label>
                    <input type="text" placeholder="Porte R3" name="position" id="position"/>
                    <label htmlFor="dimensions">Dimensions :</label>
                    <input type="text" name="dimensions" id="dimensions"/>
                    <label htmlFor="">Photos :</label>
                    <input type="file" />
                    <div></div>
                    <div></div>
                    <button>Enregistrer </button>
                    <div className="empty1"></div>
                    
                </form>
                <EspacesShow espaces={espaces}/>
            </section>
           
        </>
    )
}