

export default function ConnectiquesShow({ connectiques, messageLoading }) {
    return (
        <section className='connectiques'>
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
                        <th>Nature</th>
                        <th>Quantité</th>
                        <th>Type de réseau</th>
                        <th>Position</th>
                        <th>Emplacement</th>
                    </tr>
                </thead>
                <tbody className='connectiques-body'>
                    {connectiques && connectiques.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {connectiques && connectiques.length > 0 && (
                        connectiques.map((connectique, id) => <tr key={connectique.id} className='dynamic-row'>
                            <td>{connectique.numeroFacture}</td>
                            <td>{connectique.subdivisionName}</td>
                            <td>{connectique.numéroCompteur}</td>
                            <td>{connectique.montant}</td>
                            <td>{connectique.consommation}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </section>
    )
}