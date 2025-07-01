import { Link } from "react-router-dom"
export default function InterventionsSave() {
    return (
        <>
            <h1>Enregistrement des interventions</h1>
            <section className="maintenance">
                <form action="" id="interventions-save">
                    <label htmlFor="">Origine :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Incident</option>
                        <option value="">Spontanée</option>
                        <option value="">Maintenance</option>
                        <option value="">Installation</option>
                        <option value="">Déplacement</option>
                        <option value="">Réception de matériel</option>
                        <option value="">Mission</option>
                    </select>
                    <label htmlFor="">Numéro incident :</label>
                    <input type="text" disabled />
                    <Link className="search-link" to="administration/structures/show">...rechercher</Link>
                    <label htmlFor="">Noms du technicien :</label>
                    <input type="text" disabled />
                    <label htmlFor="">Poste :</label>
                    <input type="text" disabled />
                    <Link className="search-link" to="administration/structures/show">...rechercher</Link>
                    <label htmlFor="">Sur un bâtiment :</label>
                    <Link className="search-link" to="administration/structures/show">...rechercher</Link>
                    <input type="text" disabled /><div></div><div></div>
                    <label htmlFor="">Sur un espace :</label>
                    <Link className="search-link" to="administration/structures/show">...rechercher</Link>
                    <input type="text" disabled /><div></div><div></div>
                    <label htmlFor="">Sur un équipement :</label>
                    <Link className="search-link" to="administration/structures/show">...rechercher</Link>
                    <input type="text" disabled /><div></div><div></div>

                    <label htmlFor="">Diagnostic :</label>
                    <input type="text" /><div></div><div></div><div></div>
                    <label htmlFor="">Solution proposée :</label>
                    <input type="text" /><div></div><div></div><div></div>
                    <label htmlFor="">Décrire l'intervention :</label>
                    <textarea name="" id=""></textarea><div></div><div></div><div></div>
                    <label htmlFor="">Date de l'intervention :</label>
                    <input type="date" /><div></div><div></div><div></div>
                    <label htmlFor="">Appréciation du résultat :</label>
                    <input type="text" /><div></div><div></div><div></div>
                    <button>Enregistrer</button><div></div><div></div>
                    <button>Imprimer la fiche</button>
                </form>
            </section>
        </>
    )
}