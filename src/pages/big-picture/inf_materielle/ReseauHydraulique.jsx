

import { Link } from "react-router-dom";
import LargeContainer from '../../../LargeContainer'

export default function ReseauHydraulique() {
    return (
        <LargeContainer
            tile={"Infrastructure Matérielle > Réseau hydraulique"}
        >
            <ul className="menu-list">
                <li><Link to="#">Equipements</Link></li>
                <li><Link to="#">Connectiques</Link></li>
                <li><Link to="#">Maintenance</Link></li>
            </ul>
            <div>

            </div>
        </LargeContainer>
    )
}