import { Link } from "react-router-dom"
import './maintenance.css'

export default function IncidentsSave() {
    return (
        <>
            <h1>Déclarations d'incidents</h1>
            <section className="maintenance">
                <form action="" id="incidents-save">
                    <label htmlFor="">Déclarant :</label>
                    <input type="text" disabled />
                    <label htmlFor="">Poste :</label>
                    <input type="text" disabled />
                    <label htmlFor="">Service :</label>
                    <input type="text" disabled />
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
                        <option value="">Batiments</option>
                        <option value="">Espace</option>
                    </select>
                    <Link className="search-link" to="materiels/show">...rechercher</Link>
                    <input type="text" disabled />
                    <label htmlFor="">Photos :</label>
                    <input type="file" name="" id="" /><div></div>
                    <button>Enregistrer</button>
                </form>
            </section>
        </>
    )
}