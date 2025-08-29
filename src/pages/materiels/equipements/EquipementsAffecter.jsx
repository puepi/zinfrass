import { Link } from "react-router-dom"

import './equipements.css'
export default function EquipementsAffecter() {
    return (
        <>
            <section className="equipements">
                <h1>Octroyer du matériel</h1>
                <form action="" id="equipements-affecter">
                    <label htmlFor="">N° du lot :</label>
                    <input type="text"  />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Type d'équipement :</label>
                    <input type="text" />
                    <div></div>
                    <label htmlFor="">Modèle :</label>
                    <input type="text"  className="model"/>
                    <label htmlFor="">Quantité :</label>
                    <input type="number"  />
                    <div></div>
                    <label htmlFor="">Structure :</label>
                    <input type="text" />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Poste :</label>
                    <input type="text" />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Date :</label>
                    <input type="date" />
                    <label htmlFor="">Bénéficiaire :</label>
                    <input type="text" className="benef"/>
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Document :</label>
                    <input type="file" />
                    <button>Enregistrer</button>
                </form>
            </section>
        </>
    )
}