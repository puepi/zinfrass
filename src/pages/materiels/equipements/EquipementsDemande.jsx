import { Link } from 'react-router-dom'
import './equipements.css'
import { useEffect, useState } from 'react'
export default function EquipementsDemande() {
    const [typesEquipement,setTypesEquipement]=useState([])
    const [categories,setCategories]=useState([])
    const [demandes,setDemandes]=useState([])
    const [messageLoading,setMessageLoading]=useState('Aucun élément trouvé')
    useEffect(()=>{

    },[])
    return (
        <>
            <h1>Demande de Matériel</h1>
            <section className='equipements'>
                <fieldset className='lepersonnel'>
                    <legend>Personnel</legend>
                    <form action="" id="equipements-demande">
                        <label htmlFor="">Noms :</label>
                        <input type="text"  />
                        <label htmlFor="">Poste de travail :</label>
                        <input type="text"  />
                        <Link className="search-link">...rechercher</Link>
                        <label htmlFor="">Service :</label>
                        <input type="text"  />
                        <label htmlFor="">Reçue le :</label>
                        <input type="date" />
                        <div></div>
                        <label htmlFor="">Objet :</label>
                        <input type="text" />
                        <label htmlFor="">Photo :</label>
                        <input type="file" />
                        <div></div>
                        <label htmlFor="">Type d'équipement :</label>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                        </select>
                        <label htmlFor="">Catégorie :</label>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                        </select>
                        <div></div>
                        <button>Enregistrer</button>
                    </form>
                    <form action="" className="show-form">
                        <label htmlFor="">Noms du requérant :</label>
                        <input type="text" name="" id="" />
                        <select name="" id="">
                            <option value="">Selectionner la structure</option>
                        </select>
                        <button type="button" >Rechercher</button>
                    </form>
                    <table>
                        <thead>
                            <tr className='show-tab'>
                                <th>N° </th>
                                <th>Noms et prénoms</th>
                                <th>Service</th>
                                <th>Date réception</th>
                                <th>Type d'équipement</th>
                                <th>Categorie</th>
                            </tr>
                        </thead>
                        <tbody className='lastructure-body'>
                            {demandes && demandes.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                            {demandes && demandes.length > 0 && (
                                demandes.map((demande, id) => <tr key={demande.id} className='dynamic-row' onClick={() => handleClick(structure)}>
                                    <td>{id + 1}</td>
                                    <td>{demande.noms}</td>
                                    <td>{demande.service}</td>
                                    <td>{demande.reception}</td>
                                    <td>{demande.typeEquipement}</td>
                                    <td>{demande.categorie}</td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </fieldset>
            </section>
        </>
    )
}