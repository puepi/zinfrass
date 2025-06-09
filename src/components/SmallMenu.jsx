import './small-menu.css'
import { Link } from 'react-router-dom'


export default function SmallMenu() {
    return (
        <div className='glass-container'>
            <div className="glass">
                <span>1</span>
            </div>
            <p className='glass-title'>Réseau électrique</p>
            <ul className="sub">
                <li><Link to="" className="show-link">Equipements</Link></li>
                <li>Connectiques</li>
                <li>Maintenance</li>
            </ul>
        </div>

    )
}