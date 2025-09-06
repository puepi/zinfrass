import { Link } from 'react-router-dom'
import './equipements.css'
import { useEffect, useState } from 'react'
import { addDemande, getAllDemandes } from '../../../utils/ApiFunctions'
export default function EquipementsDemande() {
    const [typesEquipement,setTypesEquipement]=useState([])
    const [categories,setCategories]=useState([])
    const [messageButton,setMessageButton]=useState('Enregistrer')
    const [isDisabled,setIsDisabled]=useState(false)
    const [demandes,setDemandes]=useState([])
    const [messageLoading,setMessageLoading]=useState('Aucun élément trouvé')
    async function getDemandes(){
        setMessageLoading('...is Loading')
            await getAllDemandes()
                .then(data => setDemandes(data))
                .catch(error => console.log(error))
                .finally(() => setMessageLoading('Aucun élément trouvé'))
    }
    useEffect(()=>{
        document.title='Demandes de matériel'
        getDemandes()
    },[])
    async function handleSubmit(formData){
        setIsDisabled(true)
        setMessageButton("...Saving")
        const newDemande = {
            noms: formData.get("noms"),
            objet: formData.get("objet"),
            service: formData.get("service"),
            poste: formData.get("poste"),
            dateReception: formData.get("dateReception"),
            typeEquipement: formData.get("typeEquipement"),
            categorieEquipement: formData.get("categorieEquipement"),
        }
        await addDemande(newDemande)
            .then(response => {
                setDemandes(prev => ([response,...prev]))
                console.log(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsDisabled(false)
                setMessageButton('Enregistrer')
            })
    }
    return (
        <>
            <h1>Demande de Matériel</h1>
            <section className='equipements'>
                <fieldset className='lepersonnel'>
                    <legend>Formulaire</legend>
                    <form action={handleSubmit} id="equipements-demande">
                        <label htmlFor="noms" >Noms :</label>
                        <input type="text"  name="noms" id="noms" required/>
                        <label htmlFor="poste">Poste de travail :</label>
                        <input type="text"  name="poste" id="poste" required/>
                        <Link className="search-link">...rechercher</Link>
                        <label htmlFor="service">Service :</label>
                        <input type="text" name="service" id="service"  required/>
                        <label htmlFor="dateReception">Reçue le :</label>
                        <input type="date" name="dateReception" id="dateReception" required/>
                        <div></div>
                        <label htmlFor="objet">Objet :</label>
                        <input type="text" name="objet" id="objet" required/>
                        <label htmlFor="">Photo :</label>
                        <input type="file" />
                        <div></div>
                        <label htmlFor="categorieEquipement">Catégorie :</label>
                        <select name="categorieEquipement" id="categorieEquipement" >
                            <option value="">Choose an option</option>
                        </select>
                        <label htmlFor="typeEquipement">Type d'équipement :</label>
                        <select name="typeEquipement" id="typeEquipement" >
                            <option value="">Choose an option</option>
                        </select>
                        <div></div>
                        <button disabled={isDisabled}>{messageButton}</button>
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
                                <th>Poste</th>
                            </tr>
                        </thead>
                        <tbody className='lepersonnel-body'>
                            {demandes && demandes.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                            {demandes && demandes.length > 0 && (
                                demandes.map((demande, id) => <tr key={demande.id} className='dynamic-row' onClick={() => handleClick(structure)}>
                                    <td>{id + 1}</td>
                                    <td>{demande.noms}</td>
                                    <td>{demande.service}</td>
                                    <td>{demande.dateReception}</td>
                                    <td>{demande.typeEquipement}</td>
                                    <td>{demande.categorieEquipement}</td>
                                    <td>{demande.poste}</td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </fieldset>
            </section>
        </>
    )
}