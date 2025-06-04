import { Link } from "react-router-dom"
export default function InterventionsSave(){
    return(
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
                    <input type="text" />
                    <Link className="search-link" to="administration/structures/show">...rechercher</Link>
                    <label htmlFor="">Noms de l'intervenant :</label>
                    <input type="text" />
                    <label htmlFor="">Poste :</label>
                    <input type="text" /><div></div>
                    <label htmlFor="">Nature de l'intervention :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Matériel</option>
                        <option value="">Logiciel</option>
                        <option value="">Batiments</option>
                        <option value="">Espaces</option>
                    </select>
                    <label htmlFor="">Objet :</label>
                    <input type="text" disabled/><div></div>
                    <label htmlFor="">Diagnostic :</label>
                    <input type="text" /><div></div><div></div><div></div>
                    <label htmlFor="">Solution proposée :</label>
                    <input type="text" /><div></div><div></div><div></div>
                    <label htmlFor="">Description de l'intervention :</label>
                    <input type="text" /><div></div><div></div><div></div>
                    <label htmlFor="">Date :</label>
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