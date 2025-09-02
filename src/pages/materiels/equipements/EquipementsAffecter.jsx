import { Link } from "react-router-dom"

import './equipements.css'
import { useState } from "react"
import LotSearchModal from "./LotSearchModal"
import RespoSearchModal from "./RespoSearchModal"
import { addOctroi } from "../../../utils/ApiFunctions"
export default function EquipementsAffecter() {
    const [octrois, setOctrois] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [isDisabled, setIsDisabled] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedLot,setSelectedLot]=useState({})
    const [showRespoModal,setShowRespoModal]=useState(false)
    const [selectedRespo,setSelectedRespo]=useState({})
    function openModal(){
        setShowModal(true)
    }
    function handleCloseModal(){
        setShowModal(false)
    }
    function handleCloseRespoModal(){
        setShowRespoModal(false)
    }
    function openRespoModal(){
        setShowRespoModal(true)
    }
    function handleSelectLot(lot){
        setSelectedLot({
            id:lot.id,
            nroLot:lot.nroLot,
            typeEquipementName:lot.typeEquipementName,
            modele:lot.modele
        })
    }

    function handleChange(e){

    }
    function handleSelectRespo(respo){
        setSelectedRespo(respo)
    }
    async function handleSubmit(formData){
        setIsDisabled(true)
        setMessageButton("...Saving...")
        const newOctroi={
            lotId: selectedLot.id,
            structureId: selectedRespo.structureId,
            dateOctroi: formData.get("date"),
            nomsBénéficiaire: selectedRespo.noms,
            poste: selectedRespo.nomPoste,
            referenceDocument: formData.get("reference")
        }
        console.log(newOctroi)
         await addOctroi(newOctroi)
            .then(response => {
                setOctrois(prev => [response, ...prev])
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Enregistrer')
            })
    }
    return (
        <>
            <section className="lequipement">
                <h1>Octroyer du matériel</h1>
                <form action={handleSubmit} id="equipements-affecter">
                    <label htmlFor="nroLot">N° du lot :</label>
                    <input type="text" name="nroLot" id="nroLot" disabled value={selectedLot.nroLot} onChange={handleChange} required/>
                    <Link className="search-link" onClick={openModal}>...rechercher</Link>
                    <label htmlFor="typeEquipement">Type Eqpmt :</label>
                    <input type="text" disabled name="typeEquipement" id="typeEquipement" onChange={handleChange}  value={selectedLot.typeEquipementName}/>
                    <input type="text" name="" id="" value={selectedLot.marque} disabled/>
                    <label htmlFor="modele">Modèle :</label>
                    <input type="text" className="model" disabled name="modele" id="modele" onChange={handleChange} value={selectedLot.modele}/>
                    <label htmlFor="quantite">Quantité :</label>
                    <input type="number" name="quantite" id="quantite" defaultValue={"1"}/>
                    <div></div>
                    <label htmlFor="structure">Structure :</label>
                    <input type="text" disabled name="structure" id="structure" value={selectedRespo.nomStructure} onChange={handleChange}/>
                    <div></div>
                    <label htmlFor="poste">Poste :</label>
                    <input type="text" className="unposte" disabled name="poste" id="poste" value={selectedRespo.nomPoste} onChange={handleChange}/>
                    <label htmlFor="date">Date :</label>
                    <input type="date" name="date" id="date" />
                    <label htmlFor="beneficiaire">Bénéficiaire :</label>
                    <input type="text" className="benef" name="beneficiaire" id="beneficiaire" value={selectedRespo.noms} required onChange={handleChange}/>
                    <Link className="search-link" onClick={openRespoModal}>...rechercher</Link>
                    <label htmlFor="">Document :</label>
                    <input type="file" />
                    <label htmlFor="reference">Référence :</label>
                    <input type="text" name="reference" id="reference" className="reference" />
                    <button disabled={isDisabled}>{messageButton}</button>
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
                            <th>Type d'équipement</th>
                            <th>Modèle/Marque</th>
                            <th>Structure</th>
                            <th>Poste</th>
                            <th>Référence</th>
                            <th>Date d'octroi</th>
                        </tr>
                    </thead>
                    <tbody className='equipement-body'>
                        {octrois && octrois.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                        {octrois && octrois.length > 0 && (
                            octrois.map((octroi, id) => <tr key={octroi.id} className='dynamic-row' onClick={() => handleClick(structure)}>
                                <td>{octroi.typeEquipement}</td>
                                <td>{octroi.marque ? octroi.marque : ""} {octroi.modele}</td>
                                <td>{octroi.structure}</td>
                                <td>{octroi.poste}</td>
                                <td>{octroi.referenceDocument}</td>
                                <td>{octroi.dateOctroi}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>
            {
                showModal &&
                <LotSearchModal  handleCloseModal={handleCloseModal} handleSelectLot={handleSelectLot}/>
            }
            {
                showRespoModal &&
                <RespoSearchModal  handleCloseModal={handleCloseRespoModal} handleSelectRespo={handleSelectRespo}/>
            }
        </>
    )
}