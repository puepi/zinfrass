

import { Link } from "react-router-dom";
import LargeContainer from '../../../LargeContainer'

export default function MaterielRoulant() {
    return (
        <LargeContainer
            tile={"Infrastructure Matérielle > Matériel roulant"}
        >
            <ul className="menu-list">
                <li><Link to="#">Voitures</Link></li>
                <li><Link to="#">Motos</Link></li>
                <li><Link to="#">Bus</Link></li>
                <li><Link to="#">Maintenance</Link></li>
            </ul>
            <div>

            </div>
        </LargeContainer>
    )
}