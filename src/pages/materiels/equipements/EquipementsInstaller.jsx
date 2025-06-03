import { Link } from "react-router-dom"
import './equipements.css'
export default function EquipementsInstaller() {
    return (
        <>
            <section className="equipements">
                <h1>Installer un équipement</h1>
                <form action="" id="equipements-installer">
                    <label htmlFor="">Repérage de l'espace :</label>
                    <input type="text" />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Identifiant du matériel :</label>
                    <input type="text" />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Date d'installation :</label>
                    <input type="date" />
                    <div className="empty"></div>
                    <label htmlFor="">Nom de l'intervenant :</label>
                    <input type="text" />
                    <div className="empty"></div>
                    <label htmlFor="">Poste de responsabilité :</label>
                    <input type="text" />
                    <div className="empty"></div>
                    <label htmlFor="">Observations :</label>
                    <textarea name="" id=""></textarea>
                    <div className="empty-row"></div>
                    <button>Valider</button>
                </form>
            </section>
        </>
    )
}