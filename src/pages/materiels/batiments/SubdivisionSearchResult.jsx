
import './factures.css'

export default function SubdivisionSearchResult({ batiments, handleSelectRow }) {
    return (
        <section id="subdivision-modal-result">
            <table>
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>Suvdivision</th>
                        <th>Nom du bâtiment</th>
                        <th>Nature du bâtiment</th>
                    </tr>
                </thead>
                <tbody>
                    {batiments && batiments.length === 0 && <tr className='title'><td>Aucun élément trouvé</td></tr>}
                    {batiments && (
                        batiments.map((batiment, id) => <tr key={batiment.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, batiment)}>
                            <td>{id + 1}</td>
                            <td>{batiment.subdivisionName}</td>
                            <td>{batiment.nom}</td>
                            <td>{batiment.nature}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </section>
    )
}