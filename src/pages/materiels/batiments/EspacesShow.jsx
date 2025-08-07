

export default function EspacesShow({ espaces, messageButton }) {

    return (
        <section className="espaces">
            <form action="" id="show-form">
                <label htmlFor="">Usage:</label>
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
                        <th>N°</th>
                        <th>Nom</th>
                        <th>Position</th>
                        <th>Dimensions</th>
                        <th>Usage</th>
                        <th>Bâtiment</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody className='espaces-body'>
                    {espaces && espaces.length === 0 && <tr className='titles'><td>{messageButton}</td></tr>}
                    {espaces && espaces.length > 0 && (
                        espaces.map((espace, id) => <tr key={espace.id} className='dynamic-row'>
                            <td>{id + 1}</td>
                            <td>{espace.nom}</td>
                            <td>{espace.position}</td>
                            <td>{espace.dimensions}</td>
                            <td>{espace.usage}</td>
                            <td>{espace.batimentNom}</td>
                            <td></td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </section>
    )
}