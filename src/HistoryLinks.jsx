import { Link } from 'react-router-dom'
import './history.css'


export default function HistoryLinks({ title }) {
    return (
        <Link to="/large/materiel"><h5 className='history'>{title}</h5></Link>
    )
}