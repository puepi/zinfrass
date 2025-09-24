import { useEffect, useState } from "react"
import { getAllResponsabilisations, getPersonnelsNomsEtPrenoms } from "../../utils/ApiFunctions"
import { Link } from "react-router-dom"
import PersonnelsModal from "./PersonnelsModal"


export default function RespoSave({ handlePrecedent, handleSubmitNow, isDisabled, messageButton, respos, getRespos, messageLoadingRespo }) {
    const [showModal, setShowModal] = useState(false)
    const [noms, setNoms] = useState('')

    function handleSubmit(formData) {
        const newRespo = {
            debut: formData.get('debut'),
            fin: formData.get('fin'),
            noms: formData.get('noms'),
            actif: formData.get('actif') === 'true' ? true : false
        }
        handleSubmitNow(newRespo)
    }
    function handleCloseModal() {
        setShowModal(false)
    }
    function openPersonnelsModal() {
        setShowModal(true)
    }
    async function handleSelectPerso(perso) {
        await getPersonnelsNomsEtPrenoms(perso.id)
            .then(data => setNoms(data))
            .catch(error => console.log(error.message))
    }
    function handleChange(e) {
        setNoms(e.target.value)
    }
    useEffect(() => {
        getRespos()
    }, [])
    return (
        <fieldset className="larespo">
            <legend>Enregistrer des Responsabilisations</legend>
            <form action={handleSubmit} className="respos-save">
                <label htmlFor="debut">Date de début :</label>
                <input type="date" name="debut" id="debut" />
                <span></span>
                <label htmlFor="fin">Date de fin :</label>
                <input type="date" name="fin" id="fin" />
                <label htmlFor="noms">Noms et prénoms :</label>
                <input disabled type="text" placeholder="Poste vacant" name="noms" id="noms" className="theinput" value={noms} onChange={handleChange} />
                <Link className="search-link" onClick={openPersonnelsModal}>...rechercher</Link>
                <label htmlFor="actif">
                    Actif &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select name="actif" id="actif" required>
                        <option value="">Faites un choix</option>
                        <option value="true">OUI</option>
                        <option value="false">NON</option>
                    </select>
                </label>
                <label htmlFor="affecter">Affecter à ce bureau :</label>
                <input type="text" name="affecter" id="affecter" className="theinput" disabled />
                <Link className="search-link" onClick={openPersonnelsModal}>...rechercher</Link>
                <div></div>
                <button type="button" onClick={handlePrecedent}>Précédent</button>
                <span></span>
                <div></div><div></div>
                <button disabled={isDisabled}>{messageButton}</button>
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
                        <th>Structure</th>
                        <th>Poste</th>
                        <th>Noms et prénoms</th>
                        <th>Bureau</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody className='lastructure-body'>
                    {respos && respos.length === 0 && <tr className='titles'><td>{messageLoadingRespo}</td></tr>}
                    {respos && respos.length > 0 && (
                        respos.map((respo, id) => <tr key={respo.id} className='dynamic-row' >
                            <td>{respo.nomStructure}</td>
                            <td>{respo.nomPoste}</td>
                            <td>{respo.noms}</td>
                            <td></td>
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
            {
                showModal &&
                <PersonnelsModal handleCloseModal={handleCloseModal} handleSelectPerso={handleSelectPerso} />
            }
        </fieldset>
    )
}