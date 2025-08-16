import { useState } from "react"


export default function PosteSave() {
    const [postes, setPostes] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    return (

        <>
            <fieldset className="leposte">
                <legend>Postes de responsabilité</legend>
                <form action="" className="structure-postes-save">
                    <label htmlFor="nom">Nom :</label>
                    <input type="text" name="nom" id="nom" />
                    <label htmlFor="abreviation">Abréviation :</label>
                    <input type="text" name="abreviation" id="abreviation" />
                    <label htmlFor="rang">Rang :</label>
                    <select name="rang" id="rang">
                        <option value="">Faites un choix</option>
                        <option value="Ministre">Ministre</option>
                        <option value="Sectétaire Général">Secrétaire Général</option>
                        <option value="Inspecteur Général">Inspecteur Général</option>
                        <option value="Directeur">Directeur</option>
                        <option value="Directeur Adjoint">Directeur Adjoint</option>
                        <option value="Sous-directeur">Sous-directeur</option>
                        <option value="Chef de service">Chef de Service</option>
                        <option value="Chef de Bureau">Chef de Bureau</option>
                    </select>
                    <div></div><div></div>
                    <button>Enregistrer</button>
                    <div></div>
                    <button type="button">Précédent</button>
                    <button type="button">Suivant</button>
                </form>
                <form action="" className="show-form">
                    <label htmlFor="">Type de structure :</label>
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
                            <th>Nom</th>
                            <th>Abréviation</th>
                            <th>Rang</th>
                        </tr>
                    </thead>
                    <tbody className='lastructure-body'>
                        {postes && postes.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                        {postes && postes.length > 0 && (
                            postes.map((poste, id) => <tr key={poste.id} className='dynamic-row' onClick={() => handleClick(structure)}>
                                <td>{id + 1}</td>
                                <td>{poste.nom}</td>
                                <td>{poste.subdivision.nom}</td>
                                <td>{poste.abreviation}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </fieldset>
        </>
    )
}