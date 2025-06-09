import './small-menu.css'
import { Link } from 'react-router-dom'


export default function SmallMenu() {
    return (
        <div className='glass-container'>
            <div className="glass">
                <span>1</span>
                <ul className="sub">
                    <li><Link to="/materiels/equipements" className="show-link">Equipements</Link></li>
                    <li><Link to="/materiels/connectiques" className='show-link'>Connectiques</Link></li>
                    <li><Link to="/administration/maintenance" className='show-link'>Maintenance</Link></li>
                </ul>
            </div>
            <p className='glass-title'>Réseau électrique</p>
            
        </div>

    )
}