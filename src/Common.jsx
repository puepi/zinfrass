import logoImage from './assets/second-logo.jpg'
import SideBar from './components/SideBar';
import heroImage from './assets/about-hero.png'
import Menu from './components/Menu'
import { Link, Outlet } from 'react-router-dom';
import PopUp from './components/PopUp';
import { Children, useEffect, useState } from 'react';
import { useAppStore } from './store/useAppStore';

function Common({ menu, handleClick, selectedId, children }) {

  // const [seuil, setSeuil] = useState(0)
  const seuils = useAppStore(state => state.seuils)
  const incidents = useAppStore(state => state.incidents)
  const interventions = useAppStore(state => state.interventions)
  const stock = useAppStore(state => state.stock)
  const init = useAppStore((s) => s.init);
  // const [incidents, setIncidents] = useState(0)
  // const [interventions, setInterventions] = useState(0)
  // const [stock, setStock] = useState(0)
  useEffect(() => {
    // call once on mount
    init().catch((err) => {
      // optionally show a UI error or retry
      console.error("Failed to initialize metrics:", err);
    });
  }, []);
  console.log("🧩 Current unresolved incidents count:", incidents);
  return (
    <div id="infra-container">
      <header>
        <Link to="/">
          <img src={logoImage} alt="The Infrastructure logo for MINPROFF" className="logo-image" />
        </Link>

        <SideBar data={menu} handleClick={handleClick} selectedId={selectedId} />
        <div>
          <h1>
            INFRAS-MANAGEMENT<br />
            MINPROFF
          </h1>
          <PopUp
            seuil={seuils}
            incidents={incidents}
            interventions={interventions}
            stock={stock}
          />
        </div>
      </header>
      <div className='outlet'>
        <aside>
          <Menu accordionWidth={"100%"} />
        </aside>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Common;
