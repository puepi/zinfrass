import { useState } from "react"


export default function AddEquipementsLot({handleQuitter,handleSubmitModal}){
    const [mesEquipements,setMesEquipements]=useState([])
    const [numSerieInput,setNumSerieInput]=useState('')
    const [numUniqueInput,setNumUniqueInput]=useState('')
    const [messageLoading,setMessageLoading]=useState("Aucun élément trouvé")
    function handleAjouter(){
        const alpha = 'abcdefghijklmnopqrstuvwxyz0123456'

        let x = ''
        for (let i = 0; i < 8; i++) {
            const j = Math.floor(Math.random() * alpha.length)
            x += alpha[j]
        }
        setMesEquipements(prev=>([...prev,{
            numeroSerie:numSerieInput.toUpperCase(),
            numeroUnique:x.toUpperCase()
        }]))
        setNumSerieInput('')
    }
    function handleChange(e){
        if(e.target.name==="numSerie"){
           setNumSerieInput(e.target.value)
        }else if(e.target.name==="numUnique"){
           setNumUniqueInput(e.target.value)
        }
    }
    function handleDelete(eq){
        setMesEquipements(prev=>prev.filter(e=>e.numeroSerie!==eq.numeroSerie))
    }
    return(
        <div>
            <div className="overlay">
                <fieldset>
                    <legend className="lalegende">Ajouter des équipements au lot</legend>
                    <form action="">
                        <label htmlFor="numSerie">Numéro de série :</label>
                        <input type="text" name="numSerie" id="numSerie" value={numSerieInput}  onChange={handleChange}/>
                        <label htmlFor="numUnique">Identifiant unique :</label>
                        <input disabled type="text" name="numUnique" id="numUnique" value={numUniqueInput} onChange={handleChange}/>
                        <button type="button" onClick={handleAjouter}>Ajouter</button>
                        <div></div>
                        <div></div><div></div>
                        <button type="button" onClick={()=>handleSubmitModal(mesEquipements)}>Enregistrer</button>
                        <div></div><div></div>
                        <button type="button" onClick={handleQuitter}>Quitter</button>
                    </form>
                    <table>
                        <thead>
                            <tr className='show-tab'>
                                <th>N°</th>
                                <th>Numéro de série</th>
                                <th>Numéro unique</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mesEquipements && mesEquipements.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                            {mesEquipements && mesEquipements.length > 0 && (
                                mesEquipements.map((equipement, id) => <tr key={id} className='dynamic-row'>
                                    <td>{id + 1}</td>
                                    <td>{equipement.numeroSerie}</td>
                                    <td>{equipement.numeroUnique}</td>
                                    <td>
                                        <button className="delete-btn" onClick={()=>handleDelete(equipement)}>
                                            &#x1F5D1;
                                        </button>
                                    </td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </fieldset>
            </div>
        </div>
    )
}