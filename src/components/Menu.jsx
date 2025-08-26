import { Link } from 'react-router-dom'

import './menu.css'

export default function Menu() {
    return (
        <ul className="accordion">
            <li>
                <input type="radio" name="accordion" id="first" />
                <label htmlFor="first">Bâtiments</label>
                <div className="content">
                    <p><Link className='show-link' to="/materiels/batiments/save">Enregistrer un nouveau bâtiment</Link></p>
                    <p><Link className='show-link' to="/materiels/espaces/save">Créer des espaces au sein du bâtiment</Link></p>
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
                <label htmlFor="third">Structures et postes de responsabilités</label>
                <div className="content">
                    <p><Link className='show-link' to="/administration/unites-admin/save">Définir les subdivisions administratives</Link></p>
                    <p><Link className='show-link' to="/administration/structures/save">Créer des structures et leurs postes de responsabilités</Link></p>
                    <p><Link className='show-link' to="/materiels/batiments/loger">Gestion du personnel</Link></p>

                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second" />
                <label htmlFor="second">Equipement</label>
                <div className="content">
                    <p><Link className='show-link' to="/materiels/equipements/reception">Réceptionner un lot d'équipements</Link></p>
                    <p><Link className='show-link' to="/materiels/equipements/demandes">Demandes de matériel</Link> </p>
                    <p><Link className='show-link' to="materiels/equipements/installer">Installer un logiciel</Link></p>
                    <p><Link className='show-link' to="/materiels/equipements/affecter">Octroyer du matériel</Link> </p>
                    <p><Link className='show-link' to="/materiels/equipements-affectation/show">Rechercher un équipement</Link></p>

                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="fourth" />
                <label htmlFor="fourth">Interventions et Maintenance</label>
                <div className="content">
                    <p><Link className='show-link' to="maintenance/incidents/save">Déclarer un incident</Link></p>
                    <p><Link className='show-link' to="maintenance/interventions/save">Enregistrer une intervention</Link></p>
                    <p><Link className='show-link' to="maintenance/show">Voir les interventions et les incidents</Link></p>
                    <p><Link className='show-link' to="maintenance/show/observations">Voir les observations des utilisateurs</Link></p>

                </div>
            </li>
        </ul>
    )
}