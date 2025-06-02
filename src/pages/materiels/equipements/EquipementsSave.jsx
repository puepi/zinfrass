import { Link } from "react-router-dom"
import './equipements.css'

export default function EquipementsSave() {
    return (
        <>
            <h1>Enregistrer un équipement</h1>
            <section className="equipements">
                <form action="" id="equipements-save">
                    <label htmlFor="">Nature :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Informatique et Electronique</option>
                        <option value="">Matériel roulant</option>
                        <option value="">Mobilier de bureau</option>
                        <option value="">Matériel didactique</option>
                    </select>
                    <label htmlFor="">Catégorie :</label>
                    <select name="" id="">
                        <option value="">Unité centrale</option>
                        <option value="">Imprimante</option>
                        <option value="">Copieur</option>
                        <option value="">Scanner</option>
                        <option value="">Compteur</option>
                        <option value="">Voiture</option>
                        <option value="">Moto</option>
                        <option value="">Fauteuil</option>
                        <option value="">Chaise</option>
                        <option value="">Table</option>
                        <option value="">Multifonction</option>
                    </select>
                    <div className="empty"></div>
                    <label htmlFor="">Lot n° :</label>
                    <input type="text" />
                    <Link className="search-link">...rechercher</Link>
                    <div className="empty1"></div>
                    <label htmlFor="">Réceptionné le:</label>
                    <input type="date" />
                    <div className="empty2"></div>
                    <label htmlFor="">Fournisseur :</label>
                    <input type="text" />
                    <Link className="search-link">...rechercher</Link>
                    <div className='empty1'></div>
                    <label htmlFor="">Numéro unique:</label>
                    <input type="text" />
                    <div className='empty2'></div>
                    <label htmlFor="">Nom généré :</label>
                    <input type="text" />
                    <div className="empty2"></div>
                    <label htmlFor="">Quantité :</label>
                    <input type="text" />
                    <span>0</span>
                    <span className="prec-suiv-buttons"><span>&lt;| </span><span>|&gt;</span></span>
                    <Link className="show-link">Annuler</Link>
                    <label htmlFor="">Marque :</label>
                    <input type="text" />
                    <div className='empty2'></div>
                    <label htmlFor="">Modèle :</label>
                    <input type="text" />
                    <div className='empty2'></div>
                    <label htmlFor="">Couleur :</label>
                    <input type="text" />
                    <div className='empty2'></div>
                    <label htmlFor="">Caractéristiques :</label>
                    <textarea name="" id=""></textarea>
                    <button>Ajouter</button>
                    <button>VALIDER</button>
                    <div className="empty2"></div>
                </form>
                <Link className='show-link' to="/materiels/equipements/show">Consulter</Link>
            </section>
        </>
    )
}