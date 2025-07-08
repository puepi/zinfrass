

import { Link } from "react-router-dom";
import LargeContainer from '../../../LargeContainer'

export default function MaterielDidactique() {
    return (
        <LargeContainer
            tile={"Infrastructure Matérielle > Matériel didactique"}
        >
            <ul className="menu-list">
                <li><Link to="#">Enregistrer</Link></li>
                <li><Link to="#">Consulter</Link></li>
            </ul>
            <div>

            </div>
        </LargeContainer>
    )
}