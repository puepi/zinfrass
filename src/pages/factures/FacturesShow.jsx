import { Link } from 'react-router-dom'
import './factures.css'

export default function FacturesShow() {
    return (
        <>
            <h1>Consultation d'une facture d'eau</h1>
            <section className='factures'>
                <Link className='show-link' to="/factures/save">Enregistrer une facture</Link>
                <form action="" id="show-form">
                    <label htmlFor="">Rechercher selon :</label>
                    <select name="" id="">
                        <option value="">Selectionner une option</option>
                        <option value="">Numéro de facture</option>
                        <option value="">Période</option>
                        <option value="">Bâtiment</option>
                        <option value="">Unité administrative</option>
                        <option value="">Consommation</option>
                        <option value="">Numéro de compteur</option>
                    </select>
                    <button>Valider</button>
                </form>
                <div className='show-tab'>
                    <span>N° facture</span>
                    <span>N° compteur</span>
                    <span>Montant</span>
                    <span>Consommation</span>
                    <span>Début</span>
                    <span>Fin</span>
                    <span>Ancien index</span>
                    <span>Nouvel index</span>
                </div>

            </section>
        </>
    )
}