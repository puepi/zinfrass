import { useEffect, useState } from "react"
import { addPoste, getAllPostes } from "../../utils/ApiFunctions"


export default function PosteSave({ handlePrecedent, handleSuivant, handleClickPostes }) {
    const [postes, setPostes] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregister')
    const [isDisabled, setIsDisabled] = useState(false)
    const [selectedPoste, setSelectedPoste] = useState({})
    async function getPostes() {
        setMessageLoading('...Loading')
        await getAllPostes()
            .then(data => setPostes(data))
            .catch(error => console.log(error))
            .finally(() => setMessageLoading('Aucun élément trouvé'))
    }
    useEffect(() => {
        getPostes()
    }, [])
    function handleClick(poste) {
        const newPoste = {
            nom: poste.nom,
            id: poste.id
        }
        setSelectedPoste(newPoste)
        handleClickPostes(newPoste)
    }
    function handleChange(e) {
        setSelectedPoste(prev => ({ ...prev, nom: e.target.value }))
    }
    async function handleSubmitPoste(formData) {
        setIsDisabled(true)
        setMessageButton("...Saving")
        const newPoste = {
            nom: formData.get("nom"),
            rang: formData.get("rang"),
            abreviation: formData.get("abreviation")
        }
        await addPoste(newPoste)
            .then(response => {
                setSelectedPoste(prev => ({ ...prev, nom: response.nom }))
                setPostes(prev => [response, ...prev])
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Enregistrer')
            })
    }
    return (

        <>
            <fieldset className="leposte">
                <legend>Postes de responsabilité</legend>
                <form action={handleSubmitPoste} className="structure-postes-save">
                    <div></div>
                    <input className="myinput" type="text" name="" id="" disabled value={selectedPoste.nom} onChange={handleChange} />
                    <label htmlFor="nom">Nom :</label>
                    <input type="text" name="nom" id="nom" required />
                    <label htmlFor="abreviation">Abréviation :</label>
                    <input type="text" name="abreviation" id="abreviation" required />
                    <label htmlFor="rang">Rang :</label>
                    <select name="rang" id="rang" required>
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
                    <button disabled={isDisabled}>{messageButton}</button>
                    <div></div>
                    <button type="button" onClick={handlePrecedent}>Précédent</button>
                    <div></div>
                    <div></div>
                    <button type="button" onClick={handleSuivant}>Suivant</button>
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
                            postes.map((poste, id) => <tr key={poste.id} className='dynamic-row' onClick={() => handleClick(poste)}>
                                <td>{id + 1}</td>
                                <td>{poste.nom}</td>
                                <td>{poste.abreviation}</td>
                                <td>{poste.rang}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </fieldset>
        </>
    )
}