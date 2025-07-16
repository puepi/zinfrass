
import './batiments.css'

export default function SubdivisionSearchResult({ subdivisions, handleSelectRow }) {
    return (
        <section id="subdivision-modal-result">
            <table>
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>Nom de la subdivision</th>
                        <th>Type de subdivision</th>
                        <th>Subdivision parent</th>
                    </tr>
                </thead>
                <tbody>
                    {subdivisions && subdivisions.length === 0 && <tr className='title'><td>Aucun élément trouvé</td></tr>}
                    {subdivisions && (
                        subdivisions.map((subdivision, id) => <tr key={subdivision.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, batiment)}>
                            <td>{id + 1}</td>
                            <td>{subdivision.nom}</td>
                            <td>{subdivision.type}</td>
                            <td>{subdivision.parent}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </section>
    )
}