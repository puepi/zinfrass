import { useEffect, useState } from "react"
import { getAllResponsabilisations, getPaginatedAllResponsabilisations, getPersonnelsNomsEtPrenoms } from "../../utils/ApiFunctions"
import { Link } from "react-router-dom"
import PersonnelsModal from "./PersonnelsModal"
import { SpinnerRow } from "./StructureSave"


export default function RespoSave({ handlePrecedent, change, handleSubmitNow, isDisabled, messageButton, respos, getRespos, messageLoadingRespo }) {
    const [showModal, setShowModal] = useState(false)
    const [noms, setNoms] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [pageData, setPageData] = useState({
        content: [],
        number: 0,
        size: 5,
        totalElements: 0,
        totalPages: 0,
        first: true,
        last: true,
        empty: true
    })

    function handleSubmit(formData) {
        const newRespo = {
            debut: formData.get('debut'),
            fin: formData.get('fin'),
            noms: noms,
            actif: formData.get('actif') === 'true' ? true : false
        }
        console.log(formData.get('noms'))
        handleSubmitNow(newRespo,change)
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
        // getRespos()
        const loadData = async () => {
            try {
                setIsLoading(true)
                const data = await getPaginatedAllResponsabilisations(currentPage, pageData.size)
                setPageData(data)
            } catch (error) {

            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [currentPage, pageData.size])
    function handleNext() {
        setCurrentPage(prev => prev + 1)
    }
    function handlePrev() {
        setCurrentPage(prev => prev - 1)
    }
    let elt
    if (pageData.content.length === 0) {
        elt = <tr className='titles'><td>{messageLoadingRespo}</td></tr>
    } else {
        elt = pageData.content && pageData.content.length > 0 && (
            pageData.content.map((respo, id) => <tr key={respo.id} className='dynamic-row' >
                <td>{respo.nomStructure.substring(0, 45) + '...'}</td>
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
        )
    }
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
                    <select name="actif" id="actif" required defaultValue={"true"}>
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
                    {
                        isLoading ? <SpinnerRow /> : elt
                    }
                </tbody>
            </table>
            {
                pageData.content.length > 0 && (
                    <div className="navigation">
                        <div>Page <span>{pageData.number + 1}</span> sur <span>{pageData.totalPages}</span></div>
                        <button onClick={handlePrev} disabled={pageData.first}>&laquo;</button>
                        <button onClick={handleNext} disabled={pageData.last}>&raquo;</button>
                    </div>
                )
            }
            {
                showModal &&
                <PersonnelsModal handleCloseModal={handleCloseModal} handleSelectPerso={handleSelectPerso} />
            }
        </fieldset>
    )
}