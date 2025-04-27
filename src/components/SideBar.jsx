export default function SideBar() {
  return (
    <aside>
      <nav>
        <ul className='menu-list'>
          <li className='active'><a href=""><span><i className="fa-solid fa-file-invoice-dollar fa-sm"></i></span>Factures</a></li>
          <li><a href=""><span><i className="fa-solid fa-building fa-sm"></i></span>Bâtiments</a></li>
          <li><a href=""><span><i className="fa-solid fa-car fa-sm"></i></span>Parc AUTO</a></li>
          <li><a href=""><span><i className="fa-solid fa-motorcycle fa-sm"></i></span>Parc MOTO</a></li>
          <li><a href=""><span><i className="fa-solid fa-computer fa-sm"></i></span>Parc INFO</a></li>
          <li><a href=""><span><i className="fa-solid fa-toolbox fa-sm"></i></span>Autres ...</a></li>
        </ul>
      </nav>
    </aside>
  )
}