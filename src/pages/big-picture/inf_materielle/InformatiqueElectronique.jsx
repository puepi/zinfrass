

import { Link } from "react-router-dom";
import LargeContainer from '../../../LargeContainer'

export default function InformatiqueElectronique() {
    return (
        <LargeContainer
            tile={"Infrastructure Matérielle > Informatique ou Electronique"}
        >
            <ul className="menu-list">
                <li><Link to="#">Parc</Link></li>
                <li><Link to="#">Connectiques</Link></li>
                <li><Link to="#">Adressage</Link></li>
                <li><Link to="#">Maintenance</Link></li>
            </ul>
            <div>

            </div>
        </LargeContainer>
    )
}