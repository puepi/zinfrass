import logoImage from './assets/second-logo.jpg'
import SideBar from './components/SideBar';
import heroImage from './assets/about-hero.png'

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
          <div>
            <section className='toolbar-filter'>
              <ul className='menu'>
                <li className='active'><a href=""><i class="fa-solid fa-faucet-drip"></i>Eau</a>
                  <ul className='toolbar-actions'>
                    <li className='list-actions'><a href="">Enregistrer</a></li>
                    <li className='list-actions'><a href="">Modifier</a></li>
                    <li className='list-actions'><a href="">Supprimer</a></li>
                    <li className='list-actions'><a href="">Rechercher</a></li>
                  </ul>
                </li>
                
                <li><a href=""><i className="fa-solid fa-bolt list-item"></i>Electricité</a></li>
                <li><a href=""><i className="fa-solid fa-phone list-item"></i>Téléphone</a></li>
                <li><a href=""><i className="fa-solid fa-globe list-item"></i>Internet</a></li>
              </ul>
            </section>
            <section className='input-container'>
              <i className="fa-solid fa-magnifying-glass"></i><input className='search' placeholder="Please enter your search here ..." type="text" />
              {/* <label htmlFor="services-centraux">Services centraux <input type="radio" name="services" id="services-centraux" /></label>
              <label htmlFor="services-deconcentres">Services déconcentrés <input type="radio" name="services" id="services-deconcentres" /></label> */}
              <button>Filtrer la recherche</button>
            </section>
            <section>
              <form action="">
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home;
