import { Link } from "react-router-dom"

export default function EquipementsAffecterShow() {
    return (
        <>
            <h1>Consulter les équipements affectés un service oun un individu</h1>
            <section className="equipements">
                <form action="" id="equipements-affectation-show">
                    <label htmlFor="">Détenteur :</label>
                    <select name="" id="">
                        <option value="">Sélectioner une option</option>
                        <option value="">Service</option>
                        <option value="">Invididu</option>
                    </select>
                    <div className="empty"></div>
                    <label htmlFor="">Noms/prénoms :</label>
                    <input type="text" />
                    <label htmlFor="">Poste de travail :</label>
                    <input type="text" />
                    <button>Consulter</button>
                    <label htmlFor="">Numéro matériel :</label>
                    <input type="text" disabled />
                    <Link className="search-link">...rechercher</Link>
                    <div className="empty2"></div>
                    <label htmlFor="">Nature :</label>
                    <input type="text" disabled />
                    <div className="empty"></div>
                    <label htmlFor="">Marque :</label>
                    <input type="text" disabled />
                    <div className="empty"></div>
                    <label htmlFor="">Modèle :</label>
                    <input type="text" disabled />
                    <div className="empty"></div>
                    <label htmlFor="">Couleur :</label>
                    <input type="text" disabled />
                    <div className="empty"></div>
                    <label htmlFor="">Date d'octroi :</label>
                    <input type="date" disabled />
                    <label htmlFor="">Date d'installation :</label>
                    <input type="date" disabled />
                    <div className="empty3"></div>
                    <label htmlFor="">Installé par:</label>
                    <input type="text" disabled />
                    <label htmlFor="">Poste de travail :</label>
                    <input type="text" disabled />
                    <div className="empty4"></div>
                    <label htmlFor="">Caractéristiques :</label>
                    <textarea disabled name="" id=""></textarea>
                </form>
            </section>
        </>
    )
}