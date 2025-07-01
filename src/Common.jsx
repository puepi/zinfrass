import logoImage from './assets/second-logo.jpg'
import SideBar from './components/SideBar';
import heroImage from './assets/about-hero.png'
import Menu from './components/Menu'
import { Link } from 'react-router-dom';
import PopUp from './components/PopUp';
import { useState } from 'react';

function Common() {
  const [seuil, setSeuil] = useState(0)
  const [incidents, setIncidents] = useState(0)
  const [interventions, setInterventions] = useState(0)
  const [stock, setStock] = useState(0)
  return (
    <div id="infra-container">
      <header>
        <Link to="/">
          <img src={logoImage} alt="The Infrastructure logo for MINPROFF" className="logo-image" />
        </Link>

        <SideBar />
        <div>
          <h1>Infrastructures du Ministère de la Promotion de la Femme et de la Famille</h1>
          <PopUp
            seuil={seuil}
            incidents={incidents}
            interventions={interventions}
            stock={stock}
          />
        </div>
      </header>
    </div>
  )
}

export default Common;
