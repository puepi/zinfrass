export default function SideBar() {
  return (
    <aside>
      <nav>
        <ul className='menu-list'>
          <li><a href=""><span><i className="fa-solid fa-building fa-sm"></i></span>ORGANIGRAMME</a></li>
          <li className='active'><a href=""><span><i className="fa-solid fa-file-invoice-dollar fa-sm"></i></span>Factures</a></li>
          <li><a href=""><span><i className="fa-solid fa-building fa-sm"></i></span>Bâtiments</a></li>
          <li><a href=""><span><i className="fa-solid fa-car fa-sm"></i></span>Parc AUTOMOBILE</a></li>
          <li><a href=""><span><i className="fa-solid fa-motorcycle fa-sm"></i></span>Parc MOTO</a></li>
          <li><a href=""><span><i className="fa-solid fa-computer fa-sm"></i></span>Parc INFORMATIQUE</a></li>
          <li><a href=""><span><i className="fa-solid fa-toolbox fa-sm"></i></span>materiel divers</a></li>
        </ul>
      </nav>
    </aside>
  )
}