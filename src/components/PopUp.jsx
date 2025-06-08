import './popup.css'
import { Link } from 'react-router-dom'
export default function PopUp() {
    return (
        <section className='popup-container'>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>20</span>
                </div>
                <Link className='show-link'><span className="popup-title">Seuils dépassés</span></Link>
            </div>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>12</span>
                </div>
                <Link className='show-link'><span className="popup-title">Incidents</span></Link>
            </div>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>08</span>
                </div>
                <Link className='show-link'><span className="popup-title">Interventions</span></Link>
            </div>

        </section>
    )
}