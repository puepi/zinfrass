import { useEffect, useState } from "react"
import { SpinnerRow } from "../administration/StructureSave"
import { getInventoryEquipement } from "../../utils/ApiFunctions"


export default function Inventaire() {
    const [inventaires, setInventaires] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [isLoading, setIsLoading] = useState()

    useEffect(() => {
        document.title = 'Inventorier les équipements'
    }, [])

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true)
                const data = await getInventoryEquipement()
                setInventaires(data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [])
    let elt
    if (!inventaires || inventaires.length === 0) {
        elt = <tr className='titles'><td>{messageLoading}</td></tr>
    } else {
        elt = inventaires && inventaires.length > 0 && (
            inventaires.map((inventaire, id) => <tr key={inventaire.id} className='dynamic-row'>
                <td>{inventaire.typeEquipement}</td>
                <td>{inventaire.marque + "/" + inventaire.modele}</td>
                <td>{inventaire.numeroSerie + "/" + inventaire.numeroUnique}</td>
                <td>{inventaire.lieu}</td>
                <td>{inventaire.poste}</td>
                <td>{inventaire.currentPosition}</td>
                <td>{inventaire.dateReception}</td>
                <td>
                    <button className="edit-btn">
                        &#9998;
                    </button>&nbsp;&nbsp;
                    <button className="delete-btn" onClick={() => handleDelete(inventaire)}>
                        &#x1F5D1;
                    </button>&nbsp;&nbsp;
                    <button type="button" className="ajout-btn">
                        &#128083;
                    </button>
                </td>
            </tr>)
        )
    }
    return (
        <>
            <section className="inventaire">
                <fieldset>
                    <legend>Inventaire des équipements</legend>
                    <form action="" className="show-form">
                        <label htmlFor="choix">Trier par :</label>
                        <select name="choix" id="choix">
                            <option value="">Faites un choix</option>
                            <option value="type">Type d'équipement</option>
                            <option value="position">Position</option>
                            <option value="lieu">Lieu</option>
                            <option value="dateReception">Date de réception</option>
                        </select>
                        <div></div>
                        <div></div><div></div>
                        <button type="button" >Rechercher</button>
                    </form>
                    <table>
                        <thead>
                            <tr className='show-tab'>
                                <th>Type d'équipement</th>
                                <th>Marque/Modèle</th>
                                <th>N° série/N° unique</th>
                                <th>Lieu</th>
                                <th>Photos</th>
                                <th>Position</th>
                                <th>Date de réception</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody className='inventaire-body'>
                            {
                                isLoading ? <SpinnerRow /> : elt
                            }
                        </tbody>
                    </table>
                </fieldset>
            </section>
        </>
    )
}