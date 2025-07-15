import { useState } from 'react'
import './batiments.css'
import Modal from '../../Modal'
import { getSubdivisions } from '../../utils/ApiFunctions'
import BatimentSearchResult from './BatimentSearchResult'
import SubdivisionSearchResult from './SubdivisionSearchResult'

export default function SubdivisionSearchModal({ handleCloseModal, handleSelectSubdivision }) {
    const [isDisabled, setIsDisabled] = useState(true)
    const [isDisabled2, setIsDisabled2] = useState(true)
    const [isDisabled3, setIsDisabled3] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [messageButton, setMessageButton] = useState('Rechercher')
    const [errorMessage, setErrorMessage] = useState('')
    const [batiments, setBatiments] = useState([])
    const [subdivisionName, setSubdivisionName] = useState('')


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
        getBatiments(subdivisionName)
            .then(response => {
                setBatiments(response)
            })
            .catch(error => console.log('error'))
            .finally(() => {
                setIsDisabled3(false)
                setMessageButton('Rechercher')
            })
    }
    function handleSelectRow(e, batiment) {
        handleSelectBatiment(batiment)
        handleCloseModal()
    }
    return (
        <Modal>
            <h4>Rechercher une subdivision administrative</h4>
            <div className='subdivisions-search'>
                <input type="checkbox" checked={isChecked} onChange={handleChange} id="subdivisionName" />
                <label htmlFor="subdivisionName">Nom de la subdivision :</label>
                <input type="text" name="subdivisionName" id="subdivisionName" disabled={isDisabled} value={subdivisionName} onChange={handleChange3} />
                <div></div>
                <div></div>
                <input type="checkbox" name="subdivision-nature" id="subdivision-nature" onChange={handleChange2} />
                <label htmlFor="subdivision-nature">Nature de la subdivision</label>
                <select name="" id="" disabled={isDisabled2}>
                    <option value="">Choisir</option>
                    <option value="">Services centraux</option>
                    <option value="">Région</option>
                    <option value="">Département</option>
                    <option value="">Arrondissement</option>
                </select>
                <label htmlFor="">Rattachée à :</label>
                <select name="" id="" disabled={isDisabled2}>
                    <option value="">Choisir</option>
                </select>
                <div></div>
                <button disabled={isDisabled3} onClick={handleRechercher}>{messageButton}</button>
                <div></div>
                <div></div>
                <button onClick={handleCloseModal}>Quitter</button>
            </div>
            <SubdivisionSearchResult batiments={batiments} handleSelectRow={handleSelectRow} />
        </Modal>
    )
}