import { Link } from "react-router-dom"

import './equipements.css'
export default function EquipementsAffecter() {
    return (
        <>
            <section className="equipements">
                <h1>Octroyer du matériel</h1>
                <form action="" id="equipements-affecter">
                    <label htmlFor="">Numéro unique :</label>
                    <input type="text" disabled />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Service d'affectation :</label>
                    <input type="text" disabled />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Nom du détenteur :</label>
                    <input type="text" disabled />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Poste de responsabilité :</label>
                    <input type="text" disabled />
                    <div className="empty"></div>
                    <label htmlFor="">Référence :</label>
                    <input type="file" />
                    <div className="empty"></div>
                    <button>Valider</button>
                </form>
            </section>
        </>
    )
}