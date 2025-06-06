import { Link } from "react-router-dom"
import './equipements.css'
export default function EquipementsDeplacer() {
    return (
        <>
            <h1>Déplacer un équipement</h1>
            <section className="equipements">
                <form action="" id="equipements-deplacer">
                    <label htmlFor="">Numéro unique du matériel :</label>
                    <input type="text" /><div></div><div></div>
                    <label htmlFor="">Emplacement de départ :</label>
                    <input type="text" />
                    <Link className="search-link">...rechercher</Link><div></div>
                    <label htmlFor="">Emplacement d'arrivée :</label>
                    <input type="text" />
                    <Link className="search-link">...rechercher</Link><div></div>
                    <label htmlFor="">Date du transfert :</label>
                    <input type="date" />
                    <label htmlFor="">Observations :</label>
                    <input type="text" />
                    <button>Enregistrer</button><div></div><div></div><div></div>
                </form>
            </section>
        </>
    )
}