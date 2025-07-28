import { useEffect, useState } from "react"
import { getAllFournisseurs } from "../../../utils/ApiFunctions"

export default function Fournisseur({ handleSuivant, handleChange, registerFournisseur, selectedFournisseur, isDisabled, messageButton, lesFournisseurs, handleSelectRow }) {
    const [fournisseurs, setFournisseurs] = useState(lesFournisseurs)
    const [isLoading, setIsLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('...data is loading')
    useEffect(() => {
        chercherFournisseurs()
    }, [])
    function chercherFournisseurs() {
        setIsLoading(true)
        getAllFournisseurs()
            .then(data => setFournisseurs(data))
            .catch(error => console.log(error))
            .finally(() => { setLoadingMessage('Aucun élément trouvé'); setIsLoading(false) })
    }
    return (
        <fieldset className="fournisseur">
            <legend>Fournisseur</legend>
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
                    <option value="sarl">SARL</option>
                    <option value="sa">SA</option>
                    <option value="cooperative">Coopérative</option>
                </select>
                <div></div>
                <label htmlFor="adresse">Adresse : </label>
                <input type="text" name='adresse' id='adresse' required />
                <label htmlFor="contact">Contact : </label>
                <input type="text" name='contact' id='contact' required />
                <label htmlFor="email">Email : </label>
                <input type="text" name='email' id='email' required /><div></div>
                <label htmlFor="niu">NIU : </label>
                <input type="text" name='niu' id='niu' required /><div></div><div></div><div></div><div></div><div></div>
                <button disabled={isDisabled}>{messageButton}</button>
            </form>
            <p className="search-place">
                <label htmlFor="">Chercher par nom :  </label>
                <input type="text" />
                <button onClick={chercherFournisseurs} disabled={isLoading}>Chercher</button>
            </p>
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
                    </tr>
                </thead>
                <tbody className='fournisseur-body'>
                    {fournisseurs && fournisseurs.length === 0 && <tr className='titles'><td>{loadingMessage}</td></tr>}
                    {fournisseurs && fournisseurs.length > 0 && (
                        fournisseurs.map((fournisseur, id) => <tr key={fournisseur.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, fournisseur)}>
                            <td>{fournisseur.nom}</td>
                            <td>{fournisseur.representant}</td>
                            <td>{fournisseur.type}</td>
                            <td>{fournisseur.adresse}</td>
                            <td>{fournisseur.email}</td>
                            <td>{fournisseur.niu}</td>
                            <td>{fournisseur.contact}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
            <p className="nav-buttons">
                <button>{"<"}</button>
                <button>{">"}</button>
            </p>
            <p className="suivant">
                <button className="suivant" onClick={handleSuivant}>Suivant</button>
            </p>
        </fieldset>
    )
}