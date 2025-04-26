

import logoImage from './assets/second-logo.jpg'

function App() {

  return (
    <div id="infra-container">
      <header>
        <img src={logoImage} alt="The Infrastructure logo for MINPROFF" className="logo-image" />
        <span className="logo-name">ZINFRASS</span>
        <h1>Infrastructures du Ministère de la Promotion de la Femme et de la Famille</h1>
      </header>
      <div className="app-container">
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
        <main>
          <section className='input-container'>
            <i className="fa-solid fa-magnifying-glass"></i><input className='search' placeholder="Please enter your search here ..." type="text" />
          </section>
          <section className='toolbar-filter'>
            <i className="fa-solid fa-rotate-right"></i>Eau
            <i className="fa-solid fa-filter"></i>
            <i className="fa-solid fa-signal"></i>Electricité
            <i className="fa-solid fa-circle-chevron-down"></i>
            <i className="fa-solid fa-location-dot"></i>Téléphone
            <i className="fa-solid fa-layer-group"></i>
            <i className="fa-solid fa-image"></i>Internet
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
