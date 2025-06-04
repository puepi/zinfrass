import { Link } from "react-router-dom"

import './equipements.css'

export default function EquipementsReception(){
    return(
        <>
            <h1>Réception de Livraison d'Equipements/Logiciels</h1>
            <section className="equipements">
                <form action="" id="equipements-reception">
                    <label htmlFor="">Numéro du lot :</label>
                    <input type="text" />
                    <Link className="search-link" to="/materiels/lots/show">...rechercher</Link>
                    <label htmlFor="">Noms du fournisseur :</label>
                    <input type="text" disabled/>
                    <div className="empty"></div>
                    <label htmlFor="">Noms du récepteur :</label>
                    <input type="text" />
                    <div className="empty"></div>
                    <label htmlFor="">Poste de responsabilité:</label>
                    <input type="text" />
                    <div className="empty"></div>
                    <label htmlFor="">Date de livraison:</label>
                    <input type="date" />
                    <div className="empty"></div>
                    <label htmlFor="">Observations:</label>
                    <textarea name="" id=""></textarea>
                    <div></div>
                    <button>Enregistrer</button>
                </form>
            </section>
        </>
    )
}