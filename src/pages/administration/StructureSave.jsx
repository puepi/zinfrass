import { Link } from "react-router-dom"
import './structure.css'
export default function StructureSave() {
    return (
        <>
            <h1>Créer une structure avec ses postes de responsabilité</h1>
            <section className="structures">
                <form action="" id="structures-save">
                    <label htmlFor="">Unité administrative :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Services centraux</option>
                        <option value="">Région</option>
                        <option value="">Département</option>
                        <option value="">Arrondissement</option>
                    </select>
                    <Link className="search-link" to="/administration/unites_admin/show">...rechercher</Link>
                    <div className="empty"></div>
                    <label htmlFor="">Nom de la structure :</label>
                    <input type="text" />
                    <label htmlFor="">Rattachée à  :</label>
                    <input type="text" />
                    <Link className="search-link" to="/administration/structures/show">...rechercher</Link>
                    <label htmlFor="">Abréviation :</label>
                    <input type="text" />
                    <div className='empty2'></div>
                    <label htmlFor="">Responsabilité :</label>
                    <input type="text" />
                    <label htmlFor="">Rang :</label>
                    <input type="text" />
                    <div className="empty2"></div>
                    <label htmlFor="">Abréviation :</label>
                    <input type="text" />
                    <div className='empty2'></div>
                    <button>Ajouter un poste</button>
                    <div className="empty3"></div>
                    <button>Valider</button>
                    <div className="empty3"></div>
                </form>
            </section>
        </>
    )
}