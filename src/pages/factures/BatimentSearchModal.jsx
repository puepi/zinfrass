import { useState } from 'react'
import './factures.css'
import Modal from '../../Modal'
import { getBatiments } from '../../utils/ApiFunctions'

export default function BatimentSearchModal({handleCloseModal}){
    const [isDisabled, setIsDisabled] = useState(true)
    const [isDisabled2, setIsDisabled2] = useState(true)

    const [subdivisionName, setSubdivisionName] = useState('')

    function handleChange(e) {
        setIsDisabled(prev => !prev)
        if(!isDisabled){
            setSubdivisionName(e.target.value)
        }
    }
    function handleChange2(e) {
        setIsDisabled2(prev => !prev)
    }
    function handleRechercher() {
        useEffect(() => {
            getBatiments()
            .then(data=>console.log(data))
            .catch(error=>console.log(error))
        },[])
    }
    return(
        <Modal>
            <h4>Rechercher un bâtiment</h4>
            <div className='batiments-search'>
                <input type="checkbox" value={subdivisionName} name="subdivisionName" id="subdivisionName" onChange={(e) => handleChange(e)} />
                <label htmlFor="subdivisionName">Nom de la subdivision :</label>
                <input type="text" name="" id="" disabled={isDisabled} />
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
                <button onClick={handleRechercher}>Rechercher</button>
                <div></div>
                <div></div>
                <div></div>
                <button onClick={handleCloseModal}>Quitter</button>
            </div>
        </Modal>
    )
}