import { Link } from "react-router-dom";
import SmallMenu from "../../../components/SmallMenu";

import './index.css'
export default function InfrastructureMaterielle() {
    return (
        <div className="large-container">
            {/* <div className="side-menu">
                <ul className='menu-list'>
                    <li><Link to="/large/factures">Réseau électrique</Link></li>
                    <li><Link to="/large/materiel">Réseau hydraulique</Link></li>
                    <li><Link to="/large/logiciel">Réseau téléphonique</Link></li>
                    <li><Link to="/large/logiciel">Informatique-Electronique</Link></li>
                    <li><Link to="/large/logiciel">Bâtiments</Link></li>
                    <li><Link to="/large/logiciel">Matériel roulant</Link></li>
                    <li><Link to="/large/logiciel">Mobilier de bureau</Link></li>
                    <li><Link to="/large/logiciel">Matériel didactique</Link></li>
                    <li><Link to="/large/logiciel">Demande de matériels</Link></li>
                </ul>
            </div> */}
            <h1>INFRASTRUCTURE MATERIELLE</h1>
            <div className="inf-mat-container">
                <SmallMenu
                    icon="1"
                    title="Actions diverses"
                    link="/large/materiel/autres"
                    subtitles={["Réception", "Stock", "Demandes", "Installer", "Déplacer", "Rechercher"]}
                />
                <SmallMenu
                    icon="1"
                    title="Réseau électrique"
                    link="/large/materiel/res-electrique"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Réseau hydraulique"
                    link="/large/materiel/res-hydraulique"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Réseau téléphonique"
                    link="/large/materiel/res-telephonique"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Informatique et Electronique"
                    link="/large/materiel/informatique-electronique"
                    subtitles={["Parc", "Connectiques", "Adressage", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Bâtiments"
                    link="/large/materiel/batiments"
                    subtitles={["Equipements", "Espaces", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Matériel roulant"
                    link="/large/materiel/materiel-roulant"
                    subtitles={["Voitures", "Motos", "Bus", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Mobilier de bureau"
                    link="/large/materiel/mobilier-bureau"
                    subtitles={["Categories", "Par bureau", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Matériel didactique"
                    link="/large/materiel/materiel-didactique"
                    subtitles={["Enregistrer", "Consulter"]}
                />

            </div>
        </div>
    )
}