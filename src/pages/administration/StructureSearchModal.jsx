import { useState } from "react"
import Modal from "../../Modal"
import StructureSearchResult from "./StructureSearchResult"
import { getStructures } from "../../utils/ApiFunctions"


export default function StructureSearchModal({ handleCloseModal, handleSelectStructure }) {
    const [isDisabled, setIsDisabled] = useState(true)
    const [isDisabled2, setIsDisabled2] = useState(true)
    const [isDisabled3, setIsDisabled3] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [messageButton, setMessageButton] = useState('Rechercher')
    const [errorMessage, setErrorMessage] = useState('')
    const [subdivisionName, setSubdivisionName] = useState('')
    const [subdivisions, setSubdivisions] = useState([])


    function handleChange(e) {
        setIsDisabled(prev => !prev)
        setIsChecked(e.target.checked)
        if (!e.target.checked) {
            setIsDisabled3(true)
            setSubdivisionName('')
        }
    }
    function handleChange3(e) {
        const sub = e.target.value
        setSubdivisionName(sub)
        if (sub) {
            setIsDisabled3(false)
        } else {
            setIsDisabled3(true)
        }
    }
    function handleChange2(e) {
        setIsDisabled2(prev => !prev)
    }
    async function handleRechercher() {
        setIsDisabled3(true)
        setMessageButton('...Loading')
        getStructures(subdivisionName)
            .then(response => {
                setSubdivisions(response)
                console.log(response)
            })
            .catch(error => console.log('error'))
            .finally(() => {
                setIsDisabled3(false)
                setMessageButton('Rechercher')
            })
    }
    function handleSelectRow(e, subdivision) {
        handleSelectStructure(subdivision)
        handleCloseModal()
    }
    return (
        <Modal>
            <h4>Rechercher une structure administrative</h4>
            <div className='subdivisions-search'>
                <input type="checkbox" checked={isChecked} onChange={handleChange} id="subdivisionName" />
                <label htmlFor="subdivisionName">Nom de la structure :</label>
                <input type="text" name="subdivisionName" id="subdivisionName" disabled={isDisabled} value={subdivisionName} onChange={handleChange3} />
                <div></div>
                <div></div>


                <div></div>
                <button disabled={isDisabled3} onClick={handleRechercher}>{messageButton}</button>

                <button onClick={handleCloseModal}>Quitter</button>
            </div>
            <StructureSearchResult structures={subdivisions} handleSelectRow={handleSelectRow} />
        </Modal>
    )
}