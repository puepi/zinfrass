export default function SideBar() {
  return (
    <aside>
      <nav>
        <ul className='menu-list'>
          <li className='active'><a href=""><span><i className="fa-solid fa-file-invoice-dollar fa-sm"></i></span>Factures</a></li>
          <li><a href=""><span><i className="fa-solid fa-car fa-sm"></i></span>Infrastructure matérielle</a></li>
          <li><a href=""><span><i className="fa-solid fa-computer fa-sm"></i></span>Infrastructure logicielle</a></li>
          <li><a href=""><span><i className="fa-solid fa-toolbox fa-sm"></i></span>Maintenance</a></li>
          <li><a href=""><span><i className="fa-solid fa-building fa-sm"></i></span>Administration et organigramme</a></li>
        </ul>
      </nav>
    </aside>
  )
}