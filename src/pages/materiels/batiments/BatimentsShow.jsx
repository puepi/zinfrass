import './batiments.css'

export default function BatimentsShow({ batiments, messageButton }) {

    return (
        <>
            <section className='batiments'>
                <form action="" id="show-form">
                    <label htmlFor="">Subdivision :</label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                        <option value="">Services centraux</option>
                        <option value="">Région</option>
                        <option value="">Département</option>
                        <option value="">Arrondissement</option>
                    </select>
                    <select name="" id="">
                        <option value="">Selectionner la nature</option>
                        <option value="">R+1</option>
                        <option value="">R+2</option>
                        <option value="">R+3</option>
                    </select>
                    <div></div><div></div>
                    <button>Valider</button>
                </form>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>N° </th>
                            <th>Subdivision</th>
                            <th>Nom</th>
                            <th>Nature</th>
                            <th>Description</th>
                            <th>Rétrocédé ?</th>
                            <th>Date Rétrocession</th>
                        </tr>
                    </thead>
                    <tbody className='batiments-body'>
                        {batiments && batiments.length === 0 && <tr className='titles'><td>{messageButton}</td></tr>}
                        {batiments && batiments.length > 0 && (
                            batiments.map((batiment, id) => <tr key={batiment.id} className='dynamic-row'>
                                <td>{id + 1}</td>
                                <td>{batiment.subdivisionName}</td>
                                <td>{batiment.nom}</td>
                                <td>{batiment.nature}</td>
                                <td>{batiment.description}</td>
                                <td>{batiment.retrocede === true ? 'OUI' : 'NON'}</td>
                                <td>{batiment.dateRetrocession}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>

        </>
    )
}