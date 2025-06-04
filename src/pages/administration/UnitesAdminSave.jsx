import { Link } from "react-router-dom"

export default function UnitesAdminSave() {
    return (
        <>
            <h1>Créer les subdivisions administratives</h1>
            <section className="structures">
                <form action="" id="structures-unites-admin">
                    <label htmlFor="">Subdivision :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Services centraux</option>
                        <option value="">Région</option>
                        <option value="">Département</option>
                        <option value="">Arrondissement</option>
                    </select>
                    <label htmlFor="">Rattachée à :</label>
                    <input type="text" disabled value={"Région - OUEST"} />
                    <Link className="search-link" to="/administration/unites_admin/show">...rechercher</Link>
                    <label htmlFor="">Nombre :</label>
                    <input type="text" />
                    <button>Ajouter</button>
                    <div className="empty"></div>
                    <label htmlFor="">Nom :</label>
                    <input type="text" />
                    <button>Valider</button>
                    <div className="empty"></div>
                </form>
            </section>
        </>
    )
}