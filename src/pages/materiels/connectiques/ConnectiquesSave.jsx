import FacturesShow from '../../factures/FacturesShow'
import './connectiques.css'
import { Link } from 'react-router-dom'

export default function ConnectiquesSave() {
    return (
        <>
            <h1>Enregistrement des connectiques</h1>
            <section className="connectiques">
                <form action="" id="connectiques-save">
                    <label htmlFor="">Nature de la connectique :</label>
                    <input type="text" />
                    <label htmlFor="">Quantité :</label>
                    <input type="text" />
                    <label htmlFor="">Type de réseau :</label>
                    <select name="" id="">
                        <option value="">Electrique</option>
                        <option value="">Eau</option>
                        <option value="">Informatique</option>
                        <option value="">Téléphonique</option>
                    </select>
                    <label htmlFor="">Décrire la position :</label>
                    <textarea name="" id=""></textarea>
                    <label htmlFor="">Emplacement:</label>
                    <input type="text" disabled />
                    <Link className="search-link" to="materiels/espaces/show">...rechercher</Link><div></div>
                    <button>Enregistrer</button>
                </form>
            </section>
            <FacturesShow />
        </>
    )
}