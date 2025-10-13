import { useEffect, useState } from "react"
import Modal from "../../../Modal"
import { getAllResponsabilisations, getPaginatedAllResponsabilisations } from "../../../utils/ApiFunctions"
import Spinner from "../../../components/Spinner"


export default function RespoSearchModal({ handleCloseModal, handleSelectRespo }) {
    const [messageButton, setMessageButton] = useState('Rechercher')
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [respos, setRespos] = useState([])

    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [pageData, setPageData] = useState({
        content: [],
        number: 0,
        totalElements: 0,
        totalPages: 0,
        size: 5,
        first: true,
        last: true,
        empty: true
    })

    async function handleRechercher() {

    }
    async function getRespos() {
        setMessageLoading('...loading...')
        getAllResponsabilisations()
            .then(data => setRespos(data))
            .catch(error => { console.log(error); setMessageLoading('Aucun élément trouvé') })
    }
    useEffect(() => {
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

    function handleSelectRow(e, respo) {
        handleSelectRespo(respo)
        handleCloseModal()
    }
    let elt
    if (pageData.content.length === 0) {
        elt = <tr className='titles'><td>{messageLoading}</td></tr>
    } else {
        elt = pageData.content.map((respo, id) => <tr key={respo.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, respo)}>
            <td>{id + 1 + (pageData.number * pageData.size)}</td>
            <td>{respo.nomStructure}</td>
            <td>{respo.nomPoste}</td>
            <td>{respo.noms}</td>
        </tr>)
    }
    function handleNext() {
        setCurrentPage(prev => prev + 1)
    }
    function handlePrev() {
        setCurrentPage(prev => prev - 1)
    }
    return (
        <Modal>
            <h4>Rechercher une responsabilisation</h4>
            <form className='respos-search' action={handleRechercher}>
                <label htmlFor="structure">Nom de la structure:</label>
                <input type="text" name="structure" id="structure" required />
                <div></div>
                <div></div>
                <label htmlFor="poste">Poste de responsabilité</label>
                <input type="text" name="poste" id="poste" />
                <div></div>
                <div></div>
                <button>{messageButton}</button>
                <div></div>
                <div></div>
                <button type="button" onClick={handleCloseModal}>Quitter</button>
            </form>
            <table className="table-respo">
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>Structure</th>
                        <th>Poste</th>
                        <th>Noms et prénoms</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? <Spinner /> : elt
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
        </Modal>
    )
}