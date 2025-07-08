

import { Link } from "react-router-dom";
import LargeContainer from '../../../LargeContainer'

export default function ActionsDiverses() {
    return (
        <LargeContainer
            tile={"Infrastructure Matérielle > Actions diverses"}
        >
            <ul className="menu-list">
                <li><Link to="#">Réceptionner</Link></li>
                <li><Link to="#">Stock</Link></li>
                <li><Link to="#">Demandes</Link></li>
                <li><Link to="#">Installer</Link></li>
                <li><Link to="#">Déplacer</Link></li>
                <li><Link to="#">Rechercher</Link></li>
            </ul>
            <div>

            </div>
        </LargeContainer>
    )
}