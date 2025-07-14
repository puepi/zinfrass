import './popup.css'
import { Link } from 'react-router-dom'
export default function PopUp({ seuil, incidents, interventions, stock }) {
    return (
        <section className='popup-container'>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>{seuil}</span>
                </div>
                <Link className='show-link'><span className="popup-title">Seuils</span></Link>
            </div>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>{incidents}</span>
                </div>
                <Link className='show-link'><span className="popup-title">Incidents</span></Link>
            </div>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>{interventions}</span>
                </div>
                <Link className='show-link'><span className="popup-title">Interventions</span></Link>
            </div>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>{stock}</span>
                </div>
                <Link className='show-link'><span className="popup-title">Stock</span></Link>
            </div>

        </section>
    )
}