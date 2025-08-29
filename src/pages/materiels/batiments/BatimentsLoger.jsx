import { useState } from "react"
import { Link } from "react-router-dom"

export default function BatimentsLoger() {
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    const [messageButton, setMessageButton] = useState('Enregistrer')
    const [personnels,setPersonnels]=useState([])
    return (
        <>
            <h1>Enregistrer le personnel</h1>
            <section className="personnel">
                <form action="" id="personnel-save">
                    <label htmlFor="noms">Noms :</label>
                    <input type="text" name="noms" id='noms'/>
                    <label htmlFor="prenoms">Prénoms :</label>
                    <input type="text"  name="prenoms" id='prenoms'/>
                    <label htmlFor="">Matricule :</label>
                    <input type="text"  />
                    <div></div><div></div><div></div><div></div>
                    <button>{messageButton}</button>
                </form>
                <form action="" className="show-form">
                    <label htmlFor="">Noms, prénoms ou matricule :</label>
                   <input type="text" name="" id="" />
                   <div></div>
                    <button type="button" >Rechercher</button>
                </form>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>N° </th>
                            <th>Noms</th>
                            <th>Prénoms</th>
                            <th>Matricule</th>
                        </tr>
                    </thead>
                    <tbody className='lepersonnel-body'>
                        {personnels && personnels.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                        {personnels && personnels.length > 0 && (
                            personnels.map((personnel, id) => <tr key={personnel.id} className='dynamic-row' onClick={() => handleClick(structure)}>
                                <td>{id + 1}</td>
                                <td>{personnel.noms}</td>
                                <td>{personnel.prenoms}</td>
                                <td>{personnel.matricule}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>
        </>
    )
}