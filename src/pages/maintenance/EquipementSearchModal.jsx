import { useState } from "react"


export default function EquipementSearchModal(){
    const [equipements,setEquipements]=useState([])
    return(
        <Modal>
            <h4>Rechercher un équipement</h4>
            <form className='respos-search' action={handleRechercher}>
                <label htmlFor="categorie">Catégorie :</label>
                <select name="categorie" id="categorie">
                    <option value="">Faites un choix</option>
                </select>
                <label htmlFor="typeEquipement">Type d'équipement :</label>
                <select name="typeEquipement" id="typeEquipement">
                    <option value="">Faites un choix</option>
                </select>
                <label htmlFor="lot">N° du lot :</label>
                <input type="text" name="lot" id="lot" />
                <div></div>
                <div></div>
                <button>Rechercher</button>
                <div></div>
                <div></div>
                <button type="button" onClick={handleCloseModal}>Quitter</button>
            </form>
            <table className="table-respo">
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>Numéro de série</th>
                        <th>Numéro unique</th>
                        <th>Noms et prénoms</th>
                    </tr>
                </thead>
                <tbody>
                    {equipements && equipements.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {equipements && (
                        equipements.map((equipement, id) => <tr key={equipement.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, respo)}>
                            <td>{id + 1}</td>
                            <td>{equipement.numeroSerie}</td>
                            <td>{equipement.numeroUnique}</td>
                            <td>{equipement.noms}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </Modal>
    )
}