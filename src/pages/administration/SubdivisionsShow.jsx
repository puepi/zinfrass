import { useEffect } from "react"


export default function SubdivisionsShow({ subdivisions, getAllUnits, messageButton }) {

    useEffect(() => {
        getAllUnits()
    }, [])

    return (
        <section className="subdivisions">
            <form action="" id="show-form">
                <label htmlFor="">Nature :</label>
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
                        <th>Nom de la subdivision</th>
                        <th>Nature</th>
                        <th>Subdivision rattachée</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody className='subdivisions-body'>
                    {subdivisions && subdivisions.length === 0 && <tr className='titles'><td>{messageButton}</td></tr>}
                    {subdivisions && subdivisions.length > 0 && (
                        subdivisions.map((subdivision, id) => <tr key={subdivision.id} className='dynamic-row'>
                            <td>{subdivision.nom}</td>
                            <td>{subdivision.type}</td>
                            <td>{subdivision.parent}</td>
                            <td>
                                <button className="edit-btn">
                                    &#9998;
                                </button>&nbsp;&nbsp;
                                <button className="delete-btn">
                                    &#x1F5D1;
                                </button>
                            </td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </section>
    )
}