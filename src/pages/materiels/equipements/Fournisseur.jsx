import { useEffect, useState } from "react"
import { getAllFournisseurs } from "../../../utils/ApiFunctions"

export default function Fournisseur({ isLoading, loadingMessage, chercherFournisseurs, handleSuivant, handleChange, registerFournisseur, selectedFournisseur, isDisabled, messageButton, fournisseurs, handleSelectRow }) {


    useEffect(() => {
        chercherFournisseurs()
    }, [])

    return (
        <fieldset className="fournisseur">
            <legend>Enregistrer un Fournisseur</legend>
            <form className="fournisseur-entries" action={registerFournisseur}>
                <div></div>
                <input type="text" required disabled className="show-search" name='selectedName' value={selectedFournisseur.nom} onChange={handleChange} />
                <span>(Sélectionnez une ligne du tableau)</span><div></div>
                <label htmlFor="nomFournisseur">Nom : </label>
                <input type="text" name='nom' id='nomFournisseur' required />
                <label htmlFor="representantFournisseur" >Représentant : </label>
                <input type="text" name='representant' id='representantFournisseur' required />
                <label htmlFor="typeSociete" >Type : </label>
                <select name="type" id="typeSociete" required>
                    <option value="">Faites un choix</option>
                    <option value="SARL">SARL</option>
                    <option value="SA">SA</option>
                    <option value="Cooperative">Coopérative</option>
                </select>
                <div></div>
                <label htmlFor="adresse">Adresse : </label>
                <input type="text" name='adresse' id='adresse' required />
                <label htmlFor="contact">Contact : </label>
                <input type="text" name='contact' id='contact' required />
                <label htmlFor="email">Email : </label>
                <input type="text" name='email' id='email' required /><div></div>
                <label htmlFor="niu">NIU : </label>
                <input type="text" name='niu' id='niu' required maxLength={14} minLength={14} />
                <div></div><div></div><div></div><div></div><div></div>
                <button className="mybutton" disabled={isDisabled}>{messageButton}</button>
                <div></div><div></div><div></div><div></div>
                <button type="button" onClick={handleSuivant}>Suivant</button>
            </form>
            <form action="" className="show-form">
                <label htmlFor="">Noms :</label>
                <input type="text" name="" id="" />
                <div></div>
                <button type="button" >Rechercher</button>
            </form>
            <table>
                <thead>
                    <tr className='show-tab'>
                        <th>Nom</th>
                        <th>Représentant</th>
                        <th>Type</th>
                        <th>Adresse</th>
                        <th>Email</th>
                        <th>NIU</th>
                        <th>Contact</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody className='fournisseur-body'>
                    {fournisseurs && fournisseurs.length === 0 && <tr className='titles'><td>{loadingMessage}</td></tr>}
                    {fournisseurs && fournisseurs.length > 0 && (
                        fournisseurs.map((fournisseur, id) => <tr key={fournisseur.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, fournisseur)}>
                            <td>{fournisseur.nom}</td>
                            <td>{fournisseur.representant}</td>
                            <td>{fournisseur.type.toUpperCase()}</td>
                            <td>{fournisseur.adresse.toUpperCase()}</td>
                            <td>{fournisseur.email}</td>
                            <td>{fournisseur.niu}</td>
                            <td>{fournisseur.contact}</td>
                            <td>
                                <button className="edit-btn">
                                    &#9998;
                                </button>&nbsp;&nbsp;
                                <button className="delete-btn">
                                    &#x1F5D1;
                                </button>
                            </td>
                        </tr>)
                    )}
                </tbody>
            </table>
            <p className="nav-buttons">
                <button>{"<"}</button>
                <button>{">"}</button>
            </p>
        </fieldset>
    )
}