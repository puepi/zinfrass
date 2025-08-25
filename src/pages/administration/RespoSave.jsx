import { useState } from "react"


export default function RespoSave({ handlePrecedent }) {
    const [respos, setRespos] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    return (
        <fieldset className="larespo">
            <legend>Responsabilisations</legend>
            <form action="" className="respos-save">
                <label htmlFor="debut">Date de début :</label>
                <input type="date" name="debut" id="debut" />
                <span></span>
                <label htmlFor="fin">Date de fin :</label>
                <input type="date" name="fin" id="fin" />
                <label htmlFor="noms">Noms et prénoms :</label>
                <input type="text" name="noms" id="noms" className="theinput" />
                <span></span>
                <label htmlFor="actif">
                    <input type="checkbox" name="actif" id="actif" />
                    Actif
                </label>
                <button>Enregistrer</button>
                <span></span>
                <div></div><div></div>
                <button type="button" onClick={handlePrecedent}>Précédent</button>
            </form>
            <form action="" className="show-form">
                <label htmlFor="">Selon le rang :</label>
                <select name="" id="">
                    <option value="">Faites un choix</option>
                </select>
                <select name="" id="">
                    <option value="">Selectionner une option</option>
                </select>
                <button type="button" >Rechercher</button>
            </form>
            <table>
                <thead>
                    <tr className='show-tab'>
                        <th>N° </th>
                        <th>Structure</th>
                        <th>Noms et prénoms</th>
                        <th>Debut</th>
                        <th>Fin</th>
                        <th>Actif</th>
                    </tr>
                </thead>
                <tbody className='lastructure-body'>
                    {respos && respos.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {respos && respos.length > 0 && (
                        respos.map((respo, id) => <tr key={respo.id} className='dynamic-row' onClick={() => handleClick(poste)}>
                            <td>{id + 1}</td>
                            <td>{respo.nom}</td>
                            <td>{respo.abreviation}</td>
                            <td>{respo.rang}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </fieldset>
    )
}