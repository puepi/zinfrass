

import { Link } from "react-router-dom";
import LargeContainer from '../../../LargeContainer'

export default function MobilierBureau() {
    return (
        <LargeContainer
            tile={"Infrastructure Matérielle > Mobilier de bureau"}
        >
            <ul className="menu-list">
                <li><Link to="#">Catégories</Link></li>
                <li><Link to="#">Bureau</Link></li>
                <li><Link to="#">Maintenance</Link></li>
            </ul>
            <div>

            </div>
        </LargeContainer>
    )
}