
import './factures.css'

export default function FacturesShow({ factures, messageLoading }) {

    return (
        <>
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
                        <th>Période</th>
                        <th>Index</th>
                        <th>Batiment</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody className='factures-body'>
                    {factures && factures.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {factures && factures.length > 0 && (
                        factures.map((facture, id) => <tr key={facture.id} className='dynamic-row'>
                            <td>{facture.numeroFacture}</td>
                            <td>{facture.subdivisionName}</td>
                            <td>{facture.numéroCompteur}</td>
                            <td>{facture.montant}</td>
                            <td>{facture.consommation}</td>
                            <td>{facture.debut + "-" + facture.fin}</td>
                            <td>{facture.ancienIndex + "-" + facture.ancienIndex}</td>
                            <td>{facture.batimentName}</td>
                            <td>
                                <button className="edit-btn">
                                    &#9998;
                                </button>&nbsp;&nbsp;
                                <button className="delete-btn">
                                    &#x1F5D1;
                                </button>
                            </td>
                            <td>

                            </td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </>
    )
}