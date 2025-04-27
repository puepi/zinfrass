import logoImage from './assets/second-logo.jpg'
import SideBar from './components/SideBar';

function Home() {
  return (
    <div id="infra-container">
      <header>
        <img src={logoImage} alt="The Infrastructure logo for MINPROFF" className="logo-image" />
        <span className="logo-name">ZINFRASS</span>
        <h1>Infrastructures du Ministère de la Promotion de la Femme et de la Famille</h1>
      </header>
      <div className="app-container">
        <SideBar />
        <main>
          <section className='input-container'>
            <i className="fa-solid fa-magnifying-glass"></i><input className='search' placeholder="Please enter your search here ..." type="text" />
            {/* <label htmlFor="services-centraux">Services centraux <input type="radio" name="services" id="services-centraux" /></label>
            <label htmlFor="services-deconcentres">Services déconcentrés <input type="radio" name="services" id="services-deconcentres" /></label> */}
            <button>Filtrer la recherche</button>
          </section>
          <section className='toolbar-filter'>
            <ul>
              <li className='active'><a href=""><i className="fa-solid fa-rotate-right fa-small"></i>Eau</a></li>
              <li><a href=""><i className="fa-solid fa-signal"></i>Electricité</a></li>
              <li><a href=""><i className="fa-solid fa-location-dot"></i>Téléphone</a></li>
              <li><a href=""><i className="fa-solid fa-image"></i>Internet</a></li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home;
