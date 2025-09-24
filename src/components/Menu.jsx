import { Link } from 'react-router-dom'

import './menu.css'

export default function Menu({ accordionWidth }) {
    return (
        <ul className="accordion" style={{ width: accordionWidth }}>
            <li>
                <input type="radio" name="accordion" id="first" />
                <label htmlFor="first">Bâtiments</label>
                <div className="content">
                    <p><Link className='show-link' to="/materiels/batiments/save">Enregistrer un bâtiment</Link></p>
                    <p><Link className='show-link' to="/materiels/espaces/save">Créer des espaces</Link></p>
                    {/* <p><Link className='show-link' to="/materiels/batiments/loger">Affecter des postes à un bureau</Link></p> */}
                    <p><Link className='show-link' to="/materiels/batiments/receptionner">Affecter des équipements</Link></p>
                    <p><Link className='show-link' to="/connectiques/save">Connectiques</Link></p>

                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fifth" />
                <label htmlFor="fifth">Factures</label>
                <div className="content">
                    <p><Link className="show-link" to="/factures/save">Enregistrer une facture</Link></p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="third" />
                <label htmlFor="third">Structures et Services</label>
                <div className="content">
                    <p><Link className='show-link' to="/administration/unites-admin/save">Subdivisions administratives</Link></p>
                    <p><Link className='show-link' to="/administration/structures/save">Structures et postes de travail</Link></p>
                    <p><Link className='show-link' to="/administration/structures/personnels">Enregistrer un personnel</Link></p>

                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second" />
                <label htmlFor="second">Equipement</label>
                <div className="content">
                    <p><Link className='show-link' to="/materiels/equipements/reception">Réceptionner des équipements</Link></p>
                    <p><Link className='show-link' to="/materiels/equipements/ajouter">Ajouter des équipements au lot</Link></p>
                    <p><Link className='show-link' to="/materiels/equipements/demandes">Demandes de matériel</Link> </p>
                    <p><Link className='show-link' to="/materiels/equipements/affecter">Octroyer un équipement</Link> </p>
                    <p><Link className='show-link' to="/materiels/equipements-affectation/show">Inventaire du stock</Link></p>

                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="fourth" />
                <label htmlFor="fourth">Maintenance</label>
                <div className="content">
                    <p><Link className='show-link' to="maintenance/incidents/save">Déclarer un incident</Link></p>
                    <p><Link className='show-link' to="maintenance/interventions/save">Enregistrer une intervention</Link></p>
                    <p><Link className='show-link' to="maintenance/show/observations">Appréciations des utilisateurs</Link></p>

                </div>
            </li>
        </ul>
    )
}