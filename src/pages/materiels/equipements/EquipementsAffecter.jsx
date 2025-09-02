import { Link } from "react-router-dom"

import './equipements.css'
import { useState } from "react"
export default function EquipementsAffecter() {
    const [octrois, setOctrois] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [isDisabled, setIsDisabled] = useState(false)
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <section className="lequipement">
                <h1>Octroyer du matériel</h1>
                <form action="" id="equipements-affecter">
                    <label htmlFor="nroLot">N° du lot :</label>
                    <input type="text" name="nroLot" id="nroLot" disabled />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="typeEquipement">Type Eqpmt :</label>
                    <input type="text" disabled name="typeEquipement" id="typeEquipement" />
                    <div></div>
                    <label htmlFor="modele">Modèle :</label>
                    <input type="text" className="model" disabled name="modele" id="modele" />
                    <label htmlFor="quantite">Quantité :</label>
                    <input type="number" name="quantite" id="quantite" />
                    <div></div>
                    <label htmlFor="structure">Structure :</label>
                    <input type="text" disabled name="structure" id="structure" />
                    <div></div>
                    <label htmlFor="poste">Poste :</label>
                    <input type="text" disabled name="poste" id="poste" />
                    <div></div>
                    <label htmlFor="date">Date :</label>
                    <input type="date" name="date" id="date" />
                    <label htmlFor="beneficiaire">Bénéficiaire :</label>
                    <input type="text" className="benef" name="beneficiaire" id="beneficiaire" />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Document :</label>
                    <input type="file" />
                    <label htmlFor="reference">Référence :</label>
                    <input type="text" name="reference" id="reference" className="reference" />
                    <button disabled={isDisabled}>Enregistrer</button>
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
                                <td>{octroi.modele}</td>
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
                <LotSearchModal handleCloseModal={handleCloseModal} handleSelectBatiment={handleSelectBatiment} />
            }
        </>
    )
}