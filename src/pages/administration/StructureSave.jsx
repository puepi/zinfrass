import { Link } from "react-router-dom"
import './structure.css'
export default function StructureSave() {
    return (
        <>
            <h1>Créer une structure avec ses postes de responsabilité</h1>
            <section className="structures">
                <form action="" id="structures-save">
                    <label htmlFor="">Type de subdivision :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Services centraux</option>
                        <option value="">Région</option>
                        <option value="">Département</option>
                        <option value="">Arrondissement</option>
                    </select>
                    <Link className="search-link" to="/administration/unites_admin/show">...rechercher</Link>
                    <input type="text" disabled value={"Région - OUEST"} />
                    <div className="empty2"></div>
                    <label htmlFor="">Nom de la structure :</label>
                    <input type="text" />
                    <label htmlFor="">Rattachée à  :</label>
                    <input type="text" />
                    <Link className="search-link" to="/administration/structures/show">...rechercher</Link>
                    <label htmlFor="">Abréviation :</label>
                    <input type="text" />
                    <label htmlFor="">Type de structure  :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Cabinet du Ministre</option>
                        <option value="">Secrétariat Général</option>
                        <option value="">Direction</option>
                        <option value="">Division</option>
                        <option value="">Cellule</option>
                        <option value="">Service</option>
                        <option value="">Bureau</option>
                    </select>
                    <div className='empty2'></div>
                    <label htmlFor="">Responsabilité :</label>
                    <input type="text" />
                    <label htmlFor="">Rang :</label>
                    <select name="" id="">
                        <option value="">Sélectionenr une option</option>
                        <option value="">Ministre</option>
                        <option value="">Secrétaire Général</option>
                        <option value="">Directeur</option>
                        <option value="">Directeur Adjoint</option>
                        <option value="">Sous-Directeur</option>
                        <option value="">Chef de Service</option>
                        <option value="">Chef de bureau</option>
                    </select>
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