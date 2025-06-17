import { Link } from "react-router-dom"

export default function SideBar() {
  return (
    <aside>
      <nav>
        <ul className='menu-list'>
          <li className='active'><Link to="/large/factures"><span><i className="fa-solid fa-file-invoice-dollar fa-sm"></i></span>Factures</Link></li>
          <li><Link to="/large/materiel"><span><i className="fa-solid fa-car fa-sm"></i></span>Infrastructure matérielle</Link></li>
          <li><Link to="/large/logiciel"><span><i className="fa-solid fa-computer fa-sm"></i></span>Infrastructure logicielle</Link></li>
          <li><Link to="/large/maintenance"><span><i className="fa-solid fa-toolbox fa-sm"></i></span>Interventions et Maintenance</Link></li>
          <li><Link to="/large/administration"><span><i className="fa-solid fa-building fa-sm"></i></span>Organigramme et Administration</Link></li>
        </ul>
      </nav>
    </aside>
  )
}