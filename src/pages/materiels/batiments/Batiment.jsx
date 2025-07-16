import { Link } from 'react-router-dom'
import './batiments.css'

export default function Batiment({ handleSubmit, isDisabled, messageButton,handleClick }) {
    return (
        <>
            <section className="batiments">
                <form action={handleSubmit} id="batiments-save">
                    <label htmlFor="sub-type">Unité administrative :</label>
                    <select name="sub-type" id="sub-type">
                        <option value="">Selectionner une option</option>
                        <option value="CENTRAUX">Service centraux</option>
                        <option value="REGION">Région</option>
                        <option value="DEPARTEMENT">Département</option>
                        <option value="ARRONDISSEMENT">Arrondissement</option>
                    </select>
                    <Link className="search-link" to="" onClick={handleClick}>...rechercher</Link>
                    <input type="text" disabled name="subdivision-name" />
                    <label htmlFor="batiment">Nom du bâtiment :</label>
                    <input type="text" name="batiment" id="batiment" />
                    <label htmlFor="description">Description :</label>
                    <input type="text" name="description" id="description" />
                    <label htmlFor="retrocede">Rétrocédé à l'Etat :</label>
                    <select name="retrocede" id="retrocede">
                        <option value="">Sélectionenr une option</option>
                        <option value="1">OUI</option>
                        <option value="0">NON</option>
                    </select>
                    <label htmlFor="dateRetrocession">Date de rétrocession :</label>
                    <input type="date" name="dateRetrocession" id="dateRetrocession" />
                    <label htmlFor="nature">Nature du bâtiment :</label>
                    <input type="text" name="nature" id="nature" />
                    <div className='empty2'></div>
                    <button disabled={isDisabled}>{messageButton}</button>
                </form>
            </section>
            
        </>
    )
}