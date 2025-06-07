import logoImage from './assets/second-logo.jpg'
import SideBar from './components/SideBar';
import heroImage from './assets/about-hero.png'
import Menu from './components/Menu'
import { Link } from 'react-router-dom';
import PopUp from './components/PopUp';

function Common() {
  return (
    <div id="infra-container">
      <header>
        <Link to="/">
          <img src={logoImage} alt="The Infrastructure logo for MINPROFF" className="logo-image" />
        </Link>

        <SideBar />
        <div>
          <h1>Infrastructures du Ministère de la Promotion de la Femme et de la Famille</h1>
          <PopUp />
        </div>
      </header>
    </div>
  )
}

export default Common;
