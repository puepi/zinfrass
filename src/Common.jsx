import logoImage from './assets/second-logo.jpg'
import SideBar from './components/SideBar';
import heroImage from './assets/about-hero.png'
import Menu from './components/Menu'
import { Link } from 'react-router-dom';

function Common() {
  return (
    <div id="infra-container">
      <header>
        <Link to="/">
          <img src={logoImage} alt="The Infrastructure logo for MINPROFF" className="logo-image" />
        </Link>
        {/* <span className="logo-name">ZINFRASS</span> */}
        <SideBar />
        <h1>Infrastructures du Ministère de la Promotion de la Femme et de la Famille</h1>
      </header>
      {/* <div className="app-container"> */}
      <main>
        <div>
          {/*  <section className='toolbar-filter'>
              <ul className='menu'>
                <li className='active'><a href=""><i className="fa-solid fa-faucet-drip"></i>Eau</a>
                  <ul className='toolbar-actions'>
                    <li className='list-actions'><a href="">Enregistrer</a></li>
                    <li className='list-actions'><a href="">Modifier</a></li>
                    <li className='list-actions'><a href="">Supprimer</a></li>
                    <li className='list-actions'><a href="">Consulter</a></li>
                  </ul>
                </li>

                <li><a href=""><i className="fa-solid fa-bolt list-item"></i>Electricité</a></li>
                <li><a href=""><i className="fa-solid fa-phone list-item"></i>Téléphone</a></li>
                <li><a href=""><i className="fa-solid fa-globe list-item"></i>Internet</a></li>
              </ul>
            </section> */}
          {/* <section className='input-container'>
              <i className="fa-solid fa-magnifying-glass"></i><input className='search' placeholder="Please enter your search here ..." type="text" /> */}
          {/* <label htmlFor="services-centraux">Services centraux <input type="radio" name="services" id="services-centraux" /></label>
              <label htmlFor="services-deconcentres">Services déconcentrés <input type="radio" name="services" id="services-deconcentres" /></label> */}
          {/* <button>Filtrer la recherche</button>
            </section> */}
          {/* <section>
              <form action="">
              </form>
            </section> */}
        </div>
        <section>
          {/*  <table>
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Compteur n°</th>
                  <th>Ancien index</th>
                  <th>Nouvel index</th>
                  <th>Consommation</th>
                  <th>Montant</th>
                  <th>Période début</th>
                  <th>Période fin</th>
                  <th>Bâtiment</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12</td>
                  <td>2105</td>
                  <td>12458</td>
                  <td>13589</td>
                  <td>254.5</td>
                  <td>254 896</td>
                  <td>02/03/2025</td>
                  <td>10/05/2025</td>
                  <td>Bâtiment principal services centraux</td>
                  <td><i className="fa-solid fa-pen"></i> <i className="fa-solid fa-trash"></i></td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>33512</td>
                  <td>10987</td>
                  <td>13589</td>
                  <td>2987.5</td>
                  <td>512 896</td>
                  <td>02/03/2025</td>
                  <td>10/05/2025</td>
                  <td>Bâtiment annexe services centraux</td>
                  <td><i className="fa-solid fa-pen"></i> <i className="fa-solid fa-trash"></i></td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>33512</td>
                  <td>10987</td>
                  <td>13589</td>
                  <td>2987.5</td>
                  <td>512 896</td>
                  <td>02/03/2025</td>
                  <td>10/05/2025</td>
                  <td>Bâtiment annexe services centraux</td>
                  <td><i className="fa-solid fa-pen"></i> <i className="fa-solid fa-trash"></i></td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>33512</td>
                  <td>10987</td>
                  <td>13589</td>
                  <td>2987.5</td>
                  <td>512 896</td>
                  <td>02/03/2025</td>
                  <td>10/05/2025</td>
                  <td>Bâtiment annexe services centraux</td>
                  <td><i className="fa-solid fa-pen"></i> <i className="fa-solid fa-trash"></i></td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>33512</td>
                  <td>10987</td>
                  <td>13589</td>
                  <td>2987.5</td>
                  <td>512 896</td>
                  <td>02/03/2025</td>
                  <td>10/05/2025</td>
                  <td>Bâtiment annexe services centraux</td>
                  <td><i className="fa-solid fa-pen"></i> <i className="fa-solid fa-trash"></i></td>
                </tr>


              </tbody>
            </table> */}
        </section>
      </main>
      {/* </div> */}
    </div>
  )
}

export default Common;
