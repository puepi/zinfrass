import { Link } from 'react-router-dom'
import './batiments.css'
import { useState } from 'react'


export default function Batiment({ handleSubmit, isDisabled, messageButton, handleClick, subdivision, handleChange }) {


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
                <fieldset className='lebatiment'>
                    <legend>
                        Enregistrement d'un nouveau bâtiment
                    </legend>
                    <form action={handleSubmit} id="batiments-save">
                        <label htmlFor="sub-type">Unité administrative :</label>
                        <input type="text" disabled name="subdivision-name" value={subdivision.nom} onChange={handleChange} />
                        <Link className="search-link" to="" onClick={handleClick}>...rechercher</Link>
                        <div></div>
                        <label htmlFor="nom">Nom du bâtiment :</label>
                        <input type="text" name="nom" />
                        <label htmlFor="description">Description :</label>
                        <input type="text" name="description" id="description" />
                        <label htmlFor="retrocede">Rétrocédé à l'Etat :</label>
                        <select name="retrocede" id="retrocede">
                            <option value="">Sélectionner une option</option>
                            <option value="true">OUI</option>
                            <option value="false">NON</option>
                        </select>
                        <label htmlFor="dateRetrocession">Date de rétrocession :</label>
                        <input type="date" name="dateRetrocession" id="dateRetrocession" />
                        <label htmlFor="nature">Nature du bâtiment :</label>
                        <input type="text" name="nature" />
                        <div className='empty2'></div>
                        <button disabled={isDisabled}>{messageButton}</button>
                    </form>
                </fieldset>
            </section>

        </>
    )
}