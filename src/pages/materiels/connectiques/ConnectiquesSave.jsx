import FacturesShow from '../../factures/FacturesShow'
import './connectiques.css'
import { Link } from 'react-router-dom'
import ConnectiquesShow from './ConnectiquesShow'
import { useEffect, useState } from 'react'

export default function ConnectiquesSave() {
    const [connectiques, setConnectiques] = useState([])
    const [messageLoading, setMessageLoading] = useState('Aucun élément trouvé')
    useEffect(()=>{
        document.title='Enregistrer des connectiques'
    })
    return (
        <>
            <h1>Enregistrement des connectiques</h1>
            <section>
                <fieldset className="connectiques">
                    <legend>Enregistrement des connectiques</legend>
                    <form action="" id="connectiques-save">
                        <label htmlFor="">Nature de la connectique :</label>
                        <input type="text" />
                        <label htmlFor="">Quantité :</label>
                        <input type="text" />
                        <label htmlFor="">Type de réseau :</label>
                        <select name="" id="">
                            <option value="">Electrique</option>
                            <option value="">Eau</option>
                            <option value="">Informatique</option>
                            <option value="">Téléphonique</option>
                        </select>
                        <label htmlFor="">Décrire la position :</label>
                        <textarea name="" id=""></textarea>
                        <label htmlFor="">Emplacement:</label>
                        <input type="text" disabled />
                        <Link className="search-link" to="">...rechercher</Link><div></div>
                        <button>Enregistrer</button>
                    </form>
                    <ConnectiquesShow connectiques={connectiques} messageLoading={messageLoading} />
                </fieldset>
            </section>

        </>
    )
}