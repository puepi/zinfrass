import { Link } from "react-router-dom"

export default function SideBar() {
  return (
    <aside>
      <nav>
        <ul className='menu-list'>
          <li className='active'><Link to="/factures/save"><span><i className="fa-solid fa-file-invoice-dollar fa-sm"></i></span>Factures</Link></li>
          <li><a href=""><span><i className="fa-solid fa-car fa-sm"></i></span>Infrastructure matérielle</a></li>
          <li><a href=""><span><i className="fa-solid fa-computer fa-sm"></i></span>Infrastructure logicielle</a></li>
          <li><a href=""><span><i className="fa-solid fa-toolbox fa-sm"></i></span>Interventions et Maintenance</a></li>
          <li><a href=""><span><i className="fa-solid fa-building fa-sm"></i></span>Administration, Organigramme et Cartographie</a></li>
        </ul>
      </nav>
    </aside>
  )
}