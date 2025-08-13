import { Link } from "react-router-dom"
import './structure.css'
import { useEffect, useState } from "react"
import { addStructure, getAllStructures } from "../../utils/ApiFunctions"
import SubdivisionSearchModal from "../materiels/batiments/SuvdivisionSearchModal"
export default function StructureSave() {
    const [structures,setStructures]=useState([])
    const [messageLoading,setMessageLoading]=useState('Aucun élément trouvé')
    const [messageButton,setMessageButton]=useState('Enregistrer')
    const [selectedStructure,setSelectedStructure]=useState({})
    const [selectedSubdivision,setSelectedSubdivision]=useState({})
    const [showModal,setShowModal]=useState(false)
    const [isDisabled,setIsDisabled]=useState(false)
    async function getstructures(){
        setMessageLoading('...is Loading')
        await getAllStructures()
            .then(data=>setStructures(data))
            .catch(error=>console.log(error))
            .finally(()=>setMessageLoading('Aucun élément trouvé'))
    }
    useEffect(()=>{
        getstructures()
    },[])
    async function handleSubmit(formData){
        setIsDisabled(true)
        setMessageButton("...Saving")
        const newStructure = {
            nom: formData.get("nom"),
            type: formData.get("type"),
            abreviation: formData.get("abreviation"),
            subdivisionId: selectedSubdivision.id,
            parentId: selectedStructure.id,
        }
        await addStructure(newStructure)
            .then(response => {
                setStructures(prev => [response, ...prev])
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Rechercher')
            })
    }
    function handleChange(){

    }
    function handleSearchSub(){
        setShowModal(true)
    }
    function handleCloseModal(){
        setShowModal(false)
    }
    function handleSelectSubdivision(subdivision){
        setSelectedSubdivision(subdivision)
    }
    return (
        <>
            <h1>Créer une structure avec ses postes de responsabilité</h1>
            <section className="structures">
                <form action={handleSubmit} id="structures-save">
                    <label htmlFor="">Structure : </label>
                    <input type="text" name="" id="" disabled value={selectedStructure.nom} onChange={handleChange}/><div></div><div></div>
                    <label htmlFor="">Type de subdivision :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Services centraux</option>
                        <option value="">Région</option>
                        <option value="">Département</option>
                        <option value="">Arrondissement</option>
                    </select>
                    <Link className="search-link" to="" onClick={handleSearchSub}>...rechercher</Link>
                    <input type="text" disabled value={selectedSubdivision.nom} onChange={handleChange}/>
                    <div className="empty2"></div>
                    <label htmlFor="nom">Nom de la structure :</label>
                    <input type="text" name="nom" id="nom"/>
                    <label htmlFor="parent">Rattachée à  :</label>
                    <input type="text" name="parent" id="parent" disabled/>
                    <Link className="search-link" to="/administration/structures/show">...rechercher</Link>
                    <label htmlFor="abreviation">Abréviation :</label>
                    <input type="text" name='abreviation' id='abreviation'/>
                    <label htmlFor="type">Type de structure  :</label>
                    <select id="type" name='type'>
                        <option value="">Sélectionner une option</option>
                        <option value="">Cabinet du Ministre</option>
                        <option value="">Secrétariat Général</option>
                        <option value="">Direction</option>
                        <option value="">Division</option>
                        <option value="">Cellule</option>
                        <option value="">Service</option>
                        <option value="">Bureau</option>
                    </select><div></div>
                    <button disabled={isDisabled}>{messageButton}</button>
                </form>
                <form action="" id="show-form">
                    <label htmlFor="">Type de structure :</label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                    </select>
                    <select name="" id="">
                        <option value="">Selectionner une option</option>
                    </select>
                    <div></div><div></div>
                    <button type="button">Rechercher</button>
                </form>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>N° </th>
                            <th>Nom</th>
                            <th>Subdivision</th>
                            <th>Abréviation</th>
                        </tr>
                    </thead>
                    <tbody className='structures-body'>
                        {structures && structures.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                        {structures && structures.length > 0 && (
                            structures.map((structure, id) => <tr key={structure.id} className='dynamic-row'>
                                <td>{id + 1}</td>
                                <td>{structure.nom}</td>
                                <td>{structure.subdivision.nom}</td>
                                <td>{structure.abreviation}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>
            {
                showModal &&
                <SubdivisionSearchModal handleCloseModal={handleCloseModal} handleSelectSubdivision={handleSelectSubdivision} />
            }
        </>
    )
}