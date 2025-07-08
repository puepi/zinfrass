import { Link } from 'react-router-dom'
import './factures.css'

export default function FacturesShow() {
    return (
        <>
            <section className='factures'>
                <form action="" id="show-form">
                    <label htmlFor="">Type de facture :</label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                        <option value="">Eau</option>
                        <option value="">Electrictié</option>
                        <option value="">Téléphone</option>
                        <option value="">Internet</option>
                    </select>
                    <select name="" id="">
                        <option value="">Selectionner une option</option>
                        <option value="">Numéro de facture</option>
                        <option value="">Période</option>
                        <option value="">Bâtiment</option>
                        <option value="">Unité administrative</option>
                        <option value="">Consommation</option>
                        <option value="">Numéro de compteur</option>
                    </select>
                    <div></div><div></div>
                    <button>Valider</button>
                </form>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>N° facture</th>
                            <th>N° compteur</th>
                            <th>Montant</th>
                            <th>Consommation</th>
                            <th>Début</th>
                            <th>Fin</th>
                            <th>Ancien index</th>
                            <th>Nouvel index</th>
                        </tr>
                    </thead>
                </table>
            </section>

        </>
    )
}