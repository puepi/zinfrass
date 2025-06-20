import { Link } from 'react-router-dom'
import './factures.css'
export default function FacturesSave() {
    return (
        <>
            <h1>Enregistrement d'une facture d'eau ou d'électricité</h1>
            <section className="factures">
                <form action="" id="save-form">
                    <label htmlFor="">Numéro de la facture :</label>
                    <input type="text" />
                    <label htmlFor="">Numéro du compteur :</label>
                    <input type="text" />
                    <label htmlFor="">Période du :</label>
                    <input type="date" />
                    <label htmlFor="">Au :</label>
                    <input type="date" />
                    <label htmlFor="">Type de facture :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Facture d'eau</option>
                        <option value="">Facture d'électricité</option>
                    </select>
                    <label htmlFor="">Montant :</label>
                    <input type="text" />
                    <label htmlFor="">Ancien index :</label>
                    <input type="text" />
                    <label htmlFor="">Nouvel index :</label>
                    <input type="text" />
                    <label htmlFor="">Consommation :</label>
                    <input type="text" />
                    <label htmlFor="">Unités :</label>
                    <label htmlFor="">Mètres cube (m3)</label>
                    <button>Valider</button>
                    <div className='empty2'></div>
                </form>
                <Link className='show-link' to="/factures/show">Consulter</Link>
            </section>
        </>
    )
}