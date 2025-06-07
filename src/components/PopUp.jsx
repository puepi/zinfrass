import './popup.css'

export default function PopUp() {
    return (
        <section className='popup-container'>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>20</span>
                </div>
                <span className="popup-title">Seuils dépassés</span>
            </div>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>12</span>
                </div>
                <span className="popup-title">Incidents</span>
            </div>
            <div className="popup">
                <div className="symbol">
                    <span className='popup-digit'>08</span>
                </div>
                <span className="popup-title">Interventions</span>
            </div>

        </section>
    )
}