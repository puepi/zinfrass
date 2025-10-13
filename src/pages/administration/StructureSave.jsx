import { Link } from "react-router-dom"
import './structure.css'
import { useEffect, useState } from "react"
import { addRespo, addStructure, getAllResponsabilisations, getAllStructures, getPaginatedAllStructures } from "../../utils/ApiFunctions"
import SubdivisionSearchModal from "../materiels/batiments/SuvdivisionSearchModal"
import StructureSearchModal from "./StructureSearchModal"
import PosteSave from "./PosteSave"
import RespoSave from "./RespoSave"
import Toast from "../../components/Toast"
import Spinner from "../../components/Spinner"
import monSpinnerGif from '../../assets/spinner.gif'

export function SpinnerRow() {
    return (
        <tr>
            <td className="overlay">
                <img src={monSpinnerGif} alt="Chargement..." className="spinner" />
            </td>
        </tr>
    )
}
export default function StructureSave() {
    const [structures, setStructures] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [isDisabledRespo, setIsDisabledRespo] = useState(false)
    const [messageLoadingRespo, setMessageLoadingRespo] = useState('Aucun élément trouvé')
    const [messageButtonRespo, setMessageButtonRespo] = useState('Enregistrer')
    const [respos, setRespos] = useState([])
    const [selectedStructure, setSelectedStructure] = useState({})
    const [selectedStructureParent, setSelectedStructureParent] = useState({})
    const [selectedPoste, setSelectedPoste] = useState({})
    const [selectedSubdivision, setSelectedSubdivision] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isDeactivated, setIsDeactivated] = useState(false)
    const [toContinue, setToContinue] = useState('structures')
    const [currentPage, setCurrentPage] = useState(0)
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
    const [isLoading, setIsLoading] = useState(false)
    const [toast, setToast] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true)
            try {
                const data = await getPaginatedAllStructures(currentPage, pageData.size)
                console.log(data)
                setPageData(data)
            } catch (error) {
                console.error("Erreur lors du chargement des structures:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData()
    }, [currentPage, pageData.size])


    async function getstructures() {
        setMessageLoading('...is Loading')
        await getAllStructures()
            .then(data => setStructures(data))
            .catch(error => console.log(error))
            .finally(() => setMessageLoading('Aucun élément trouvé'))
    }
    useEffect(() => {
        document.title = "Structures et postes de responsabilité"
        // getstructures()
    }, [])
    async function handleSubmit(formData) {
        setIsDisabled(true)
        setMessageButton("...Saving")
        const newStructure = {
            nom: formData.get("nom"),
            type: formData.get("type"),
            abreviation: formData.get("abreviation"),
            subdivisionId: selectedSubdivision.id,
            parentId: selectedStructureParent.id,
        }
        await addStructure(newStructure)
            .then(response => {
                setSelectedStructure(prev => ({ ...prev, nom: response.nom }))
                setStructures(prev => [response, ...prev])
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Enregistrer')
            })
    }
    function handleChange(e) {
        setSelectedStructure(prev => ({ ...prev, nom: e.target.value }))
    }
    function handleChange2(e) {

    }
    function handleChange3(e) {
        setSelectedStructure(prev => ({ ...prev, nom: e.target.value }))
    }
    function handleSearchSub() {
        setShowModal(true)
    }
    function handleSearchStructure() {
        setShowModal2(true)
    }
    function handleCloseModal() {
        setShowModal(false)
    }
    function handleCloseModal2() {
        setShowModal2(false)
    }
    function handleSelectSubdivision(subdivision) {
        setSelectedSubdivision(subdivision)
    }
    function handleSelectStructure(structure) {
        setSelectedStructureParent(structure)
    }
    function handleClick(structure) {
        setSelectedStructure({
            nom: structure.nom, id: structure.id
        })
    }
    function handleSuivant() {
        setToContinue('postes')
    }
    function handlePrevious() {
        setToContinue('structures')
    }
    function handleNextPage() {
        setToContinue('responsabilisations')
    }
    function handleClickPostes(poste) {
        setSelectedPoste(poste)
    }
    function handlePrecedRespo() {
        setToContinue('postes')
    }
    async function getRespos() {
        setMessageLoadingRespo('...is Loading')
        await getAllResponsabilisations()
            .then(data => { setRespos(data); console.log(data) })
            .catch(error => console.log(error))
            .finally(() => setMessageLoadingRespo('Aucun élément trouvé'))
    }
    async function handleSubmitRespo(respo) {
        setIsDisabledRespo(true)
        setMessageButtonRespo("...Saving")
        const newRespo = {
            structureId: selectedStructure.id,
            posteId: selectedPoste.id,
            ...respo
        }
        await addRespo(newRespo)
            .then(response => {
                setRespos(prev => [response, ...prev])
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabledRespo(false)
                setMessageButtonRespo('Enregistrer')
            })
    }
    let elt
    if (pageData.content.length === 0) {
        elt = <tr className='titles'><td>{messageLoading}</td></tr>
    } else {
        elt = pageData.content && pageData.content.length > 0 && (
            pageData.content.map((structure, id) => (
                <tr key={structure.id} className='dynamic-row' onClick={() => handleClick(structure)}>
                    <td>{id + 1 + (pageData.number * pageData.size)}</td>
                    <td>{structure.nom.substring(0, 45) + '...'}</td>
                    <td>{structure.subdivision.nom}</td>
                    <td>{structure.abreviation}</td>
                    <td>{structure.parent}</td>
                    <td>
                        <button className="edit-btn">
                            &#9998;
                        </button>&nbsp;&nbsp;
                        <button className="delete-btn">
                            &#x1F5D1;
                        </button>
                    </td>
                </tr>
            )
            )
        )
    }
    function handleNext() {
        setCurrentPage(prev => prev + 1)
    }
    function handlePrev() {
        setCurrentPage(prev => prev - 1)
    }
    return (
        <>
            {

                <>
                    <section className="structures">
                        {
                            toContinue === 'structures' &&
                            <fieldset className="lastructure">
                                <legend>Enregistrer une structure</legend>
                                <form action={handleSubmit} id="structures-save">
                                    <label htmlFor="">Structure</label>
                                    <input type="text" name="" id="" disabled value={selectedStructure.nom} onChange={handleChange3} /><div></div><div></div>
                                    <label htmlFor="">Subdivision :</label>
                                    <select name="" id="">
                                        <option value="">Sélectionner une option</option>
                                        <option value="">Services centraux</option>
                                        <option value="">Région</option>
                                        <option value="">Département</option>
                                        <option value="">Arrondissement</option>
                                    </select>
                                    <Link className="search-link" to="" onClick={handleSearchSub}>...rechercher</Link>
                                    <input type="text" disabled value={selectedSubdivision.nom} onChange={handleChange2} />
                                    <label htmlFor="nom">Nom  :</label>
                                    <input type="text" name="nom" id="nom" />
                                    <label htmlFor="parent">Rattachée à  :</label>
                                    <input type="text" name="parent" id="parent" disabled value={selectedStructureParent.nom} />
                                    <Link className="search-link" to="" onClick={handleSearchStructure}>...rechercher</Link>
                                    <label htmlFor="abreviation">Abréviation :</label>
                                    <input type="text" name='abreviation' id='abreviation' />
                                    <label htmlFor="type">Type de structure  :</label>
                                    <select id="type" name='type'>
                                        <option value="">Sélectionner une option</option>
                                        <option value="Cabinet du Ministre">Cabinet du Ministre</option>
                                        <option value="Secrétariat Général">Secrétariat Général</option>
                                        <option value="Inspection Générale">Inspection Générale</option>
                                        <option value="Direction">Direction</option>
                                        <option value="Sous-direction">Sous-Direction</option>
                                        <option value="Division">Division</option>
                                        <option value="Cellule">Cellule</option>
                                        <option value="Service">Service</option>
                                        <option value="Bureau">Bureau</option>
                                    </select><div></div>
                                    <button disabled={isDisabled}>{messageButton}</button>
                                    <div></div><div></div><div></div>
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
                                            <th>Subdivision</th>
                                            <th>Abréviation</th>
                                            <th>Rattachée à</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody className='lastructure-body'>
                                        {
                                            isLoading ? (<SpinnerRow />) : (
                                                elt
                                            )

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
                            </fieldset>
                        }
                        {
                            toContinue === 'postes' && <PosteSave handleClickPostes={handleClickPostes} handlePrecedent={handlePrevious} handleSuivant={handleNextPage} />
                        }{
                            toContinue === 'responsabilisations' && <RespoSave messageLoadingRespo={messageLoadingRespo} respos={respos} getRespos={getRespos} isDisabled={isDisabledRespo} messageButton={messageButtonRespo} handlePrecedent={handlePrecedRespo} handleSubmitNow={handleSubmitRespo} />
                        }
                    </section>
                    {
                        showModal &&
                        <SubdivisionSearchModal handleCloseModal={handleCloseModal} handleSelectSubdivision={handleSelectSubdivision} />
                    }
                    {
                        showModal2 &&
                        <StructureSearchModal handleCloseModal={handleCloseModal2} handleSelectStructure={handleSelectStructure} />
                    }
                </>

            }


        </>
    )
}