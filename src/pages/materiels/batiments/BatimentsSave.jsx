import { useState } from "react";
import Batiment from "./Batiment";

import './batiments.css'
import BatimentsShow from "./BatimentsShow";
import SubdivisionSearchModal from "./SuvdivisionSearchModal";
import { addBatiment } from "../../../utils/ApiFunctions";
export default function BatimentSave() {
    const [isDisabled, setIsDisabled] = useState(false)
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [subdivision, setSubdivision] = useState({
        id:'',
        nom:'',
        parent:'',
        type:'',
        subdivisions:[]
    })
    const [batiments, setBatiments] = useState([])
    const [batiment, setBatiment] = useState({
        nom:'',
        nature:'',
        description:'',
        retrocede:'',
        dateRetrocession:'',
        subdivisionId:''
    })
    const [showModal,setShowModal]=useState(false)

    function handleClick(){
        setShowModal(true)
    }

    function handleCloseModal(){
        setShowModal(false)
    }
    
    function handleSelectSubdivision(subdivision){
        setSubdivision(subdivision)
        console.log(subdivision)
    }
    function handleChange(e){
        const name=e.target.name
        let value=e.target.value
        setBatiment(prev=>(
            {
                ...prev,[name]:value
            }
        ))
    }
    const handleSubmit = async (formData) => {
        setIsDisabled(true)
        setMessageButton("...Loading")
        const newBatiment = {
            nom: formData.get("nom"),
            nature: formData.get("nature"),
            description: formData.get("description"),
            retrocede: formData.get("retrocede"),
            dateRetrocession: formData.get("dateRetrocession"),
            subdivisionId: subdivision.id
        }
        setBatiment(newBatiment)
        await addBatiment(newBatiment)
            .then(response => {
                setBatiments(prev => [response, ...prev])
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Rechercher')
            })
    }
    return (
        <>
            <h1>Enregistrement d'un nouveau bâtiment</h1>
            <Batiment 
                subdivision={subdivision}
                handleChange={handleChange}
                handleClick={handleClick} 
                handleSubmit={handleSubmit} 
                isDisabled={isDisabled} messageButton={messageButton} 
            />
            
            {
                showModal &&
                <SubdivisionSearchModal handleCloseModal={handleCloseModal} handleSelectSubdivision={handleSelectSubdivision} />
            }
            <BatimentsShow />
        </>
    )
}

