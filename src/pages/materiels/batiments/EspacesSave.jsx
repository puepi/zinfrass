import { Link } from "react-router-dom"

export default function EspacesSave() {
    return (
        <>
            <h1>Création d'espaces au sein d'un bâtiment</h1>
            <section className="batiments">
                <form action="" id="espaces-save">
                    <label htmlFor="">Nom du bâtiment :</label>
                    <input type="text" />
                    <div className="empty"></div>
                    <label htmlFor="">Nom de l'espace :</label>
                    <input type="text" />
                    <label htmlFor="">Usage : <Link className="create-link">...Créer</Link></label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Rez de chaussée</option>
                        <option value="">Etage</option>
                        <option value="">Bureau</option>
                        <option value="">Sous-sol</option>
                        <option value="">Toilettes/WC</option>
                        <option value="">Salle de réunion</option>
                        <option value="">Bibliothèque</option>
                        <option value="">Parking</option>
                    </select>
                    <label htmlFor="">Repérage unique :</label>
                    <input type="text" />
                    <label htmlFor="">Dimensions :</label>
                    <input type="text" />
                    <label htmlFor="">Fenêtres :</label>
                    <input type="text" />
                    <label htmlFor="">Portes :</label>
                    <input type="text" />
                    <button>Valider et pousruivre </button>
                    <div className="empty1"></div>
                    <button>Quitter </button>
                </form>
            </section>
        </>
    )
}