import { Link } from 'react-router-dom'
import './batiments.css'
import { useState } from 'react'


export default function Batiment({ handleSubmit, isDisabled, messageButton, handleClick,handleChange }) {
    const [batiment,setBatiment]=useState({
        subdivisionName:'',
        nom:'',
        description:'',
        retrocede:'',
        dateRetrocession:'',
        nature:'',
    })

    // function handleChange(e){
    //     const name=e.target.name
    //     let value=e.target.value
    //     setBatiment(prev=>(
    //         {
    //             ...prev,[name]:value
    //         }
    //     ))
    // }
    return (
        <>
            <section className="batiments">
                <form action={handleSubmit} id="batiments-save">
                    <label htmlFor="sub-type">Unité administrative :</label>
                    <input type="text" disabled name="subdivision-name" value={subdivisionName} />
                    <Link className="search-link" to="" onClick={handleClick}>...rechercher</Link>
                    <div></div>
                    <label htmlFor="nom">Nom du bâtiment :</label>
                    <input type="text" name="nom" id="batiment" value={batiment.nom} onChange={handleChange}/>
                    <label htmlFor="description">Description :</label>
                    <input type="text" name="description" id="description" value={batiment.description} onChange={handleChange}/>
                    <label htmlFor="retrocede">Rétrocédé à l'Etat :</label>
                    <select name="retrocede" id="retrocede" onChange={handleChange}>
                        <option value="">Sélectionner une option</option>
                        <option value="1">OUI</option>
                        <option value="0">NON</option>
                    </select>
                    <label htmlFor="dateRetrocession">Date de rétrocession :</label>
                    <input type="date" name="dateRetrocession" id="dateRetrocession" value={batiment.dateRetrocession} onChange={handleChange} />
                    <label htmlFor="nature">Nature du bâtiment :</label>
                    <input type="text" name="nature" id="nature" value={batiment.nature} onChange={handleChange} />
                    <div className='empty2'></div>
                    <button disabled={isDisabled}>{messageButton}</button>
                </form>
            </section>
            
        </>
    )
}