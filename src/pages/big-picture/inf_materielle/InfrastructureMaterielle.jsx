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
                    title="Réseau électrique"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Réseau hydraulique"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Réseau téléphonique"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Informatique et Electronique"
                    subtitles={["Parc", "Connectiques", "Adressage", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Bâtiments"
                    subtitles={["Equipements", "Espaces", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Matériel roulant"
                    subtitles={["Voitures", "Motos", "Bus", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Mobilier de bureau"
                    subtitles={["Categories", "Par bureau", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Matériel didactique"
                    subtitles={[]}
                />
                <SmallMenu
                    icon="1"
                    title="Demandes de matériels"
                    subtitles={[]}
                />

            </div>
        </div>
    )
}