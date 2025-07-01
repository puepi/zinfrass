import { Link } from "react-router-dom"

import './equipements.css'

export default function EquipementsReception() {
    return (
        <>
            <h1>Réception de Livraison d'Equipements/Logiciels</h1>
            {/* <section className="equipements">
                <form action="" id="equipements-reception">
                    <label htmlFor="">Numéro du lot :</label>
                    <input type="text" />
                    <Link className="search-link" to="/materiels/lots/show">...rechercher</Link>
                    <label htmlFor="">Noms du fournisseur :</label>
                    <input type="text" disabled />
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
            </section> */}
            <section id="reception">

                <div className="reception-lots">
                    <label htmlFor="">Numéro du lot :</label>
                    <input type="text" disabled />
                    <label htmlFor="">Marque :</label>
                    <input type="text" />
                    <label htmlFor="">Modèle :</label>
                    <input type="text" />
                    <label htmlFor="">Couleur :</label>
                    <input type="text" />
                    <label htmlFor="">Quantité :</label>
                    <input type="number" />
                    <label htmlFor="">Date de livraison :</label>
                    <input type="date" id="" />
                    <label htmlFor="">Type de matériel :</label>
                    <input type="text" name="" id="" disabled />
                    <Link className="search-link" to="/materiels/lots/show">...rechercher</Link>
                    <label htmlFor="">Noms des livreurs :</label>
                    <input type="text" name="" id="" className="livreurs" />

                    <label htmlFor="" >Caractéristiques :</label>
                    <textarea name="" className="caracteristiques" id=""></textarea>
                    <label htmlFor="">Fiche descriptive :</label>
                    <textarea className="descriptive" name="" id=""></textarea>

                </div>

                <fieldset>
                    <legend>Photos</legend>
                    <label htmlFor="">Insérer des photos : </label>
                    <input type="file" name="" id="" />
                    <button>Ajouter</button>
                </fieldset>
                <fieldset id="reception-fournisseur">
                    <legend>Fournisseur</legend>
                    <Link className="search-link" to="/materiels/lots/show">...rechercher</Link>
                    <label htmlFor="">Nom du fournisseur :</label>
                    <input type="text" name="" id="" disabled />
                </fieldset>
                <fieldset id="reception-technicien">
                    <legend>Techniciens ayant réceptionné le lot</legend>
                    <Link className="search-link" to="/materiels/lots/show">...rechercher</Link>
                    <label htmlFor="">Noms :</label>
                    <input type="text" name="" id="" disabled />
                    <label htmlFor="">Poste :</label>
                    <input type="text" name="" id="" disabled />

                </fieldset>
                <fieldset id="reception-equipements">
                    <legend><span>(50)</span> Enregistrer chaque équipement</legend>

                    <label htmlFor="">Numéro de série :</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Numéro unique :</label>
                    <input type="text" name="" id="" disabled />
                    <button>Ajouter</button>
                    <div></div>
                </fieldset>
                <fieldset id="reception-conclusions">
                    <legend>Conclusions</legend>
                    <label htmlFor="">Appréciation :</label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                        <option value="">Très bien</option>
                        <option value="">Incident mineur</option>
                        <option value="">Poursuivre les tests</option>
                        <option value="">Rejeté</option>
                    </select>
                    <label htmlFor="">Procès verbal :</label>
                    <input type="file" name="" id="" />
                    <label htmlFor="">Observations :</label>
                    <textarea name="" id=""></textarea>
                </fieldset>
                <button>Valider la réception du lot</button>
            </section>
        </>
    )
}