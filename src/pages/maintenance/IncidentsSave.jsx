import { Link } from "react-router-dom"
import './maintenance.css'

export default function IncidentsSave(){
    return(
        <>
            <h1>Déclarations d'incidents</h1>
            <section className="maintenance">
                <form action="" id="incidents-save">
                    <label htmlFor="">Déclarant :</label>
                    <input type="text" />
                    <label htmlFor="">Poste :</label>
                    <input type="text" />
                    <label htmlFor="">Service :</label>
                    <input type="text" />
                    <Link className="search-link" to="administration/structures/show">...rechercher</Link>
                    <div></div>
                    <label htmlFor="">Description :</label>
                    <input type="text" />
                    <></>
                    <></>
                    <label htmlFor="">Date de survenue :</label>
                    <input type="date" />
                    <label htmlFor="">Nature de l'incident :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Matériel</option>
                        <option value="">Logiciel</option>
                        <option value="">Batiments</option>
                        <option value="">Espaces</option>
                    </select>
                    <Link className="search-link" to="materiels/show">...rechercher</Link>
                    <input type="text" disabled/>
                    <label htmlFor="">Image ou vidéo :</label>
                    <input type="text" /><div></div>
                    <button>Enregistrer</button>
                </form>
            </section>
        </>
    )
}