import { Link } from 'react-router-dom'
import './batiments.css'

export default function BatimentSave() {
    return (
        <>
            <h1>Enregistrement d'un nouveau bâtiment</h1>
            <section className="batiments">
                <form action="" id="batiments-save">
                    <label htmlFor="">Unité administrative :</label>
                    <select name="" id="">
                        <option value="">Selectionner une option</option>
                        <option value="">Service centraux</option>
                        <option value="">Région</option>
                        <option value="">Département</option>
                    </select>
                    <Link className="create-link" to="/administration/unite_admin/save">...Créer</Link>
                    <div className='empty'></div>
                    <label htmlFor="">Nom du bâtiment :</label>
                    <input type="text" />
                    <label htmlFor="">Description :</label>
                    <input type="text" />
                    <label htmlFor="">Rétrocédé à l'Etat :</label>
                    <select name="" id="">
                        <option value="">Sélectionenr une option</option>
                        <option value="">OUI</option>
                        <option value="">NOON</option>
                    </select>
                    <label htmlFor="">Date de rétrocession :</label>
                    <input type="date" />
                    <label htmlFor="">Nature du bâtiment :</label>
                    <input type="text" />
                    <div className='empty2'></div>
                    <button>Valider et poursuivre</button>
                </form>
                <Link className='show-link' to="/materiels/batiments/show">Consulter</Link>
            </section>
        </>
    )
}