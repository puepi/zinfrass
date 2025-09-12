import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { addPersonnel, getPersonnels } from "../../../utils/ApiFunctions"

export default function BatimentsLoger() {
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [personnels, setPersonnels] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)


    async function handleSubmit(formData) {
        setIsDisabled(true)
        setMessageButton("...Saving")
        const newPersonnel = {
            noms: formData.get("noms"),
            prenoms: formData.get("prenoms"),
            matricule: formData.get("matricule"),
            genre: formData.get("genre")
        }
        await addPersonnel(newPersonnel)
            .then(response => {
                setPersonnels(prev => [response, ...prev])
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Enregistrer')
            })
    }
    async function getAllPersonnels() {
        setMessageLoading('...is Loading')
        await getPersonnels()
            .then(data => setPersonnels(data))
            .catch(error => console.log(error))
            .finally(() => setMessageLoading('Aucun élément trouvé'))
    }
    useEffect(() => {
        document.title = "Enregistrer le personnel"
        getAllPersonnels()
    }, [])
    return (
        <>
            <h1>Enregistrer le personnel</h1>
            <section className="personnel">
                <form action={handleSubmit} id="personnel-save">
                    <label htmlFor="noms">Noms :</label>
                    <input type="text" name="noms" id='noms' required />
                    <label htmlFor="prenoms">Prénoms :</label>
                    <input type="text" name="prenoms" id='prenoms' required />
                    <label htmlFor="matricule">Matricule :</label>
                    <input type="text" name="matricule" id="matricule" required />
                    <div></div>
                    <label htmlFor="genre">Genre :</label>
                    <select name="genre" id="genre" required>
                        <option value="">Faites un choix</option>
                        <option value="feminin">Féminin</option>
                        <option value="masculin">Masculin</option>
                    </select>
                    <div></div>
                    <button disabled={isDisabled}>{messageButton}</button>
                </form>
                <form action="" className="show-form">
                    <label htmlFor="">Noms, prénoms ou matricule :</label>
                    <input type="text" name="" id="" />
                    <button type="button" >Rechercher</button>
                </form>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>N° </th>
                            <th>Noms</th>
                            <th>Prénoms</th>
                            <th>Matricule</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody className='lepersonnel-body'>
                        {personnels && personnels.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                        {personnels && personnels.length > 0 && (
                            personnels.map((personnel, id) => <tr key={personnel.id} className='dynamic-row' >
                                <td>{id + 1}</td>
                                <td>{personnel.noms}</td>
                                <td>{personnel.prenoms}</td>
                                <td>{personnel.matricule}</td>
                                <td>{personnel.genre}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>
        </>
    )
}