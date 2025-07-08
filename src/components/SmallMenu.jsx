import './small-menu.css'
import { Link } from 'react-router-dom'


export default function SmallMenu({ icon, title, subtitles, link }) {

    return (
        <div className='glass-container'>
            <div className="glass">
                <span>{icon}</span>
                <ul className="sub">
                    {
                        subtitles.map(
                            tile => <li><Link to={link + `?r=${tile}`.toLowerCase()} className="show-link">{tile}</Link></li>
                        )
                    }
                </ul>
            </div>
            <p className='glass-title'>{title}</p>

        </div>

    )
}