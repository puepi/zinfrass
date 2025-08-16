
export default function StructureSearchResult({ structures, handleSelectRow }) {
    return (
        <section id="subdivision-modal-result">
            <table>
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>Nom de la structure</th>
                        <th>Type de subdivision</th>
                        <th>Abréviation</th>
                    </tr>
                </thead>
                <tbody>
                    {structures && structures.length === 0 && <tr className='title'><td>Aucun élément trouvé</td></tr>}
                    {structures && (
                        structures.map((structure, id) => <tr key={structure.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, structure)}>
                            <td>{id + 1}</td>
                            <td>{structure.nom}</td>
                            <td>{structure.subdivision.nom}</td>
                            <td>{structure.abreviation}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </section>
    )
}