import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { addPersonnel, getPaginatedAllPersonnels, getPersonnels } from "../../utils/ApiFunctions"
import '../materiels/batiments/batiments.css'
import Toast from "../../components/Toast"
import Spinner from "../../components/Spinner"
import { SpinnerRow } from "./StructureSave"

export default function Personnels() {
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [personnels, setPersonnels] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)
    const [change,setChange]=useState(0)

    const [currentPage, setCurrentPage] = useState(0)
    const [toast, setToast] = useState(null)
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

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true)
                const data = await getPaginatedAllPersonnels(currentPage, pageData.size)
                setPageData(data)
            } catch (error) {
                setToast({ message: "❌ Une erreur est survenue :" + error.message, type: "error" });
            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [currentPage, pageData.size,change])


    async function handleSubmit(formData) {
        setIsLoading(true)
        const newPersonnel = {
            noms: formData.get("noms"),
            prenoms: formData.get("prenoms"),
            matricule: formData.get("matricule"),
            genre: formData.get("genre")
        }
        await addPersonnel(newPersonnel)
            .then(response => {
                setToast({ message: "✅ Opération réussie !", type: "success" });
                setChange(prev=>prev + 1)
            })
            .catch(error => {setToast({ message: "❌ Une erreur est survenue !", type: "error" })})
            .finally(() => {
                setIsLoading(false)
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
        document.title = "Le Personnel"
        // getAllPersonnels()
    }, [])
    let elt
    if (pageData.content.length === 0) {
        elt = <tr className='titles'><td>{messageLoading}</td></tr>
    } else {
        elt = pageData.content.length > 0 && (
            pageData.content.map((personnel, id) => <tr key={personnel.id} className='dynamic-row' >
                <td>{id + 1 + (pageData.number * pageData.size)}</td>
                <td>{personnel.noms}</td>
                <td>{personnel.prenoms}</td>
                <td>{personnel.matricule}</td>
                <td>{personnel.genre}</td>
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
    function handleNext() {
        setCurrentPage(prev => prev + 1)
    }
    function handlePrev() {
        setCurrentPage(prev => prev - 1)
    }
    return (
        <>
            <section className="personnel">
                <fieldset>
                    <legend>Enregistrer le personnel</legend>
                    <form action={handleSubmit} id="personnel-save">
                        <label htmlFor="noms">Noms :</label>
                        <input type="text" name="noms" id='noms' required />
                        <label htmlFor="prenoms">Prénoms :</label>
                        <input type="text" name="prenoms" id='prenoms' required />
                        <label htmlFor="matricule">Matricule :</label>
                        <input type="text" name="matricule" id="matricule" required placeholder="RAS si inexistant" />
                        <div></div>
                        <label htmlFor="genre">Genre :</label>
                        <select name="genre" id="genre" required>
                            <option value="">Faites un choix</option>
                            <option value="féminin">Féminin</option>
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
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody className='lepersonnel-body'>
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
            </section>
            {
                toast &&
                <Toast message={toast.message} type={toast.type} onClose={() => { setToast(null) }} />
            }
        </>
    )
}