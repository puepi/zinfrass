
import './factures.css'

export default function FacturesShow({ factures }) {

    return (
        <>
            <section className='factures'>
                <form action="" id="show-form">
                    <label htmlFor="">Type de facture :</label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                    </select>
                    <select name="" id="">
                        <option value="">Selectionner une option</option>
                    </select>
                    <div></div><div></div>
                    <button>Rechercher</button>
                </form>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>N° facture</th>
                            <th>Subdivision</th>
                            <th>N° compteur</th>
                            <th>Montant</th>
                            <th>Consommation</th>
                            <th>Début</th>
                            <th>Fin</th>
                            <th>Ancien index</th>
                            <th>Nouvel index</th>
                            <th>Batiment</th>
                        </tr>
                    </thead>
                    <tbody className='factures-body'>
                        {factures && factures.length === 0 && <tr className='titles'><td>Aucun élément trouvé</td></tr>}
                        {factures && factures.length > 0 && (
                            factures.map((facture, id) => <tr key={facture.id} className='dynamic-row'>
                                <td>{facture.numeroFacture}</td>
                                <td>{facture.subdivisionName}</td>
                                <td>{facture.numéroCompteur}</td>
                                <td>{facture.montant}</td>
                                <td>{facture.consommation}</td>
                                <td>{facture.debut}</td>
                                <td>{facture.fin}</td>
                                <td>{facture.ancienIndex}</td>
                                <td>{facture.nouvelIndex}</td>
                                <td>{facture.batimentName}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>

        </>
    )
}