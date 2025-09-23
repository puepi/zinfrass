import './batiments.css'

export default function BatimentsShow({ batiments, messageButton }) {

    return (
        <>
            <>
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
                            <th>Nom (Type)</th>
                            <th>Description</th>
                            <th>Date Rétrocession</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody className='batiments-body'>
                        {batiments && batiments.length === 0 && <tr className='titles'><td>{messageButton}</td></tr>}
                        {batiments && batiments.length > 0 && (
                            batiments.map((batiment, id) => <tr key={batiment.id} className='dynamic-row'>
                                <td>{id + 1}</td>
                                <td>{batiment.subdivisionName}</td>
                                <td>{batiment.nom + "(" + batiment.nature + ")"}</td>
                                <td>{batiment.description.length > 35 ? batiment.description.substring(0, 35) + '...' : batiment.description}</td>
                                {/* <td>{batiment.retrocede === true ? 'OUI' : 'NON'}</td> */}
                                <td>{batiment.dateRetrocession}</td>
                                <td>
                                    <button className="edit-btn">
                                        &#9998;
                                    </button>&nbsp;
                                    <button className="delete-btn">
                                        &#x1F5D1;
                                    </button>
                                </td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </>

        </>
    )
}