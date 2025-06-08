import './small-menu.css'


export default function SmallMenu() {
    return (
        <div className='glass-container'>
            <div className="glass">
                <span>1</span>
            </div>
            <p className='glass-title'>Réseau électrique</p>
            <ul className="submenu">
                <li>Equipements</li>
                <li>Connectiques</li>
                <li>Maintenance</li>
            </ul>
        </div>
    )
}