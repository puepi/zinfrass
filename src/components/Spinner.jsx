import './spinner.css'
import monSpinnerGif from '../assets/spinner.gif'

export default function Spinner(){
    return(
        <div>
            <div className="overlay">
                <img src={monSpinnerGif} alt="Chargement..." className="spinner" />
            </div>
        </div>
    )
}