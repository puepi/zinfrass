import { Link } from 'react-router-dom'

import './menu.css'

export default function Menu() {
    return (
        <ul className="accordion">
            <li>
                <input type="radio" name="accordion" id="fifth" />
                <label htmlFor="fifth">Factures</label>
                <div className="content">
                    <p><Link className="show-link" to="/factures/save">Enregistrer une facture d'eau</Link></p>
                    <p>Enregistrer une facture d'électricité</p>
                    <p>Enregistrer une facture de téléphone</p>
                    <p><Link className='show-link' to="/factures/show">Consulter les factures</Link></p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="first" />
                <label htmlFor="first">Bâtiments</label>
                <div className="content">
                    <p><Link className='show-link' to="/materiels/batiments/save">Enregistrer un nouveau bâtiment</Link></p>
                    <p><Link className='show-link' to="/materiels/espaces/save">Créer des espaces au sein du bâtiment</Link></p>
                    <p>Créer différents usages de ces espaces</p>
                    <p><Link className='show-link' to="/connectiques/save">Connectiques</Link></p>
                    <p className="suivant"><a href="#">Autres actions</a></p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second" />
                <label htmlFor="second">Matériel/Equipement</label>
                <div className="content">
                    <p><Link className='show-link' to="materiels/equipements/save">Enregistrer un nouveau matériel</Link></p>
                    <p>Créer des catégories d'équipements</p>
                    <p><Link className='show-link' to="/materiels/equipements/affecter">Affecter du matériel</Link> </p>
                    <p><Link className='show-link' to="/materiels/equipements/installer">Procéder à l'installation d'un équipement</Link></p>
                    <p>Rechercher un équipement</p>
                    <p className="suivant"><Link to="">Autres actions</Link></p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="third" />
                <label htmlFor="third">Structures et postes de responsabilités</label>
                <div className="content">
                    <p>Créer des structures et leurs postes de responsabilités</p>
                    <p><Link className='show-link' to="/batiments/loger">Affecter le personnel à un espace</Link></p>
                    <p className="suivant"><a href="#">Autres actions</a></p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fourth" />
                <label htmlFor="fourth">Interventions et Maintenance</label>
                <div className="content">
                    <p>Enregistrer un incident déclaré</p>
                    <p>Enregistrer une intervention</p>
                    <p>Consulter les interventions et les incidents</p>
                    <p className="suivant"><a href="#">Autres actions</a></p>
                </div>
            </li>
        </ul>
    )
}