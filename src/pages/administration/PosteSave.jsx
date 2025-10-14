import { useEffect, useState } from "react"
import { addPoste, getAllPostes, getPaginatedAllPostes } from "../../utils/ApiFunctions"
import { SpinnerRow } from "./StructureSave"


export default function PosteSave({ handlePrecedent, handleSuivant, handleClickPostes }) {
    const [postes, setPostes] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregister')
    const [isDisabled, setIsDisabled] = useState(false)
    const [selectedPoste, setSelectedPoste] = useState({})
    const [change,setChange]=useState(0)

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
    async function getPostes() {
        setMessageLoading('...Loading')
        await getAllPostes()
            .then(data => setPostes(data))
            .catch(error => console.log(error))
            .finally(() => setMessageLoading('Aucun élément trouvé'))
    }
    useEffect(() => {
        // getPostes()
        const loadData = async () => {
            try {
                setIsLoading(true)
                const data = await getPaginatedAllPostes(currentPage, pageData.size)
                setPageData(data)
            } catch (error) {

            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [currentPage, pageData.size, change])
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
                setToast({ message: "✅ Opération réussie !", type: "success" });
                setChange(prev=>prev + 1)
            })
            .catch(error => {setToast({ message: "❌ Une erreur est survenue !", type: "error" })})
            .finally(() => {
                setIsLoading(false)
            })
    }
    function handleNext() {
        setCurrentPage(prev => prev + 1)
    }
    function handlePrev() {
        setCurrentPage(prev => prev - 1)
    }
    let elt
    if (pageData.content.length === 0) {
        elt = <tr className='titles'><td>{messageLoading}</td></tr>
    } else {
        elt = pageData.content.length > 0 && (
            pageData.content.map((poste, id) => <tr key={poste.id} className='dynamic-row' onClick={() => handleClick(poste)}>
                <td>{id + 1}</td>
                <td>{poste.nom}</td>
                <td>{poste.abreviation}</td>
                <td>{poste.rang}</td>
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

        <>
            <fieldset className="leposte">
                <legend>Créer des Postes de travail</legend>
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
                        <option value="Secrétaire Général">Secrétaire Général</option>
                        <option value="Inspecteur Général">Inspecteur Général</option>
                        <option value="Directeur">Directeur</option>
                        <option value="Directeur Adjoint">Directeur Adjoint</option>
                        <option value="Sous-Directeur">Sous-Directeur</option>
                        <option value="Chef de Service">Chef de Service</option>
                        <option value="Chef de Bureau">Chef de Bureau</option>
                        <option value="NA">Not Available</option>
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
            </fieldset>
        </>
    )
}