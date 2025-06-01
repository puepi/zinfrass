export default function SideBar() {
  return (
    <aside>
      <nav>
        <ul className='menu-list'>
          <li className='active'><a href=""><span><i className="fa-solid fa-file-invoice-dollar fa-sm"></i></span>Factures</a></li>
          <li><a href=""><span><i className="fa-solid fa-building fa-sm"></i></span>Bâtiments</a></li>
          <li><a href=""><span><i className="fa-solid fa-car fa-sm"></i></span>Matériels</a></li>
          <li><a href=""><span><i className="fa-solid fa-computer fa-sm"></i></span>Logiciels</a></li>
          <li><a href=""><span><i className="fa-solid fa-toolbox fa-sm"></i></span>Connectiques</a></li>
        </ul>
      </nav>
    </aside>
  )
}