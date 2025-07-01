import { Link } from 'react-router-dom'

import './equipements.css'
export default function EquipementsDemande() {
    return (
        <>
            <section className='equipements'>
                <h1>Demande de Matériel</h1>
                <form action="" id="equipements-demande">
                    <label htmlFor="">Noms :</label>
                    <input type="text" disabled />
                    <label htmlFor="">Poste de travail :</label>
                    <input type="text" disabled />
                    <Link className="search-link">...rechercher</Link>
                    <label htmlFor="">Service :</label>
                    <input type="text" disabled />
                    <label htmlFor="">Reçue le :</label>
                    <input type="date" />
                    <div></div>
                    <label htmlFor="">Objet :</label>
                    <input type="text" />
                    <label htmlFor="">Photo :</label>
                    <input type="file" />
                    <div></div>
                    <button>Valider</button>
                </form>
            </section>
        </>
    )
}