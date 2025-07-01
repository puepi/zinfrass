import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'

import "./index.css";
import Common from "./Common";
import FacturesSave from "./pages/factures/FacturesSave";
import FacturesShow from "./pages/factures/FacturesShow";
import BatimentSave from "./pages/materiels/batiments/BatimentsSave";
import EspacesSave from "./pages/materiels/batiments/EspacesSave";
import ConnectiquesSave from "./pages/materiels/connectiques/ConnectiquesSave";
import EquipementsSave from "./pages/materiels/equipements/EquipementsSave";
import EquipementsShow from "./pages/materiels/equipements/EquipementsShow";
import EquipementsAffecter from "./pages/materiels/equipements/EquipementsAffecter";
import EquipementsInstaller from "./pages/materiels/equipements/EquipementsInstaller";
import BatimentsLoger from "./pages/materiels/batiments/BatimentsLoger";
import EquipementsAffecterShow from "./pages/materiels/equipements/EquipementsAffecterShow";
import StructureSave from "./pages/administration/StructureSave";
import UnitesAdminSave from "./pages/administration/UnitesAdminSave";
import EquipementsReception from "./pages/materiels/equipements/EquipementsReception";
import IncidentsSave from "./pages/maintenance/IncidentsSave";
import InterventionsSave from "./pages/maintenance/InterventionsSave";
import MaintenanceShow from "./pages/maintenance/MaintenanceShow";
import EquipementsDeplacer from "./pages/materiels/equipements/EquipementsDeplacer";
import InfrastructureMaterielle from "./pages/big-picture/inf_materielle/InfrastructureMaterielle";
import InfrastructureLogicielle from "./pages/big-picture/inf_logicielle/InfrastructureLogicielle";
import InfrastructureMaintenance from "./pages/big-picture/int_maintenance/InfrastructureMaintenance";
import InfrastructureAdministration from "./pages/big-picture/administration/InfrastructureAdministration";
import InfrastructureFactures from "./pages/big-picture/factures/InfrastructureFactures";
import EquipementsDemande from "./pages/materiels/equipements/EquipementsDemande";

function App() {
    return (
        <BrowserRouter>
            <Common />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/factures/save" element={<FacturesSave />} />
                <Route path="/factures/show" element={<FacturesShow />} />
                <Route path="/materiels" element={<Home />} />
                <Route path="/materiels/batiments/save" element={<BatimentSave />} />
                <Route path="/materiels/batiments/loger" element={<BatimentsLoger />} />
                <Route path="/materiels/espaces/save" element={<EspacesSave />} />
                <Route path="/materiels/equipements/save" element={<EquipementsSave />} />
                <Route path="/materiels/equipements/show" element={<EquipementsShow />} />
                <Route path="/materiels/equipements/affecter" element={<EquipementsAffecter />} />
                <Route path="/materiels/equipements-affectation/show" element={<EquipementsAffecterShow />} />
                <Route path="/materiels/equipements/installer" element={<EquipementsInstaller />} />
                <Route path="/materiels/equipements/deplacer" element={<EquipementsDeplacer />} />
                <Route path="/materiels/equipements/reception" element={<EquipementsReception />} />
                <Route path="/materiels/equipements/demandes" element={<EquipementsDemande />} />
                <Route path="/connectiques/save" element={<ConnectiquesSave />} />
                <Route path="/administration/unites-admin/save" element={<UnitesAdminSave />} />
                <Route path="/administration/structures/save" element={<StructureSave />} />
                <Route path="/maintenance/incidents/save" element={<IncidentsSave />} />
                <Route path="/maintenance/interventions/save" element={<InterventionsSave />} />
                <Route path="/maintenance/show" element={<MaintenanceShow />} />
                <Route path="/large/materiel" element={<InfrastructureMaterielle />} />
                <Route path="/large/factures" element={<InfrastructureFactures />} />
                <Route path="/large/logiciel" element={<InfrastructureLogicielle />} />
                <Route path="/large/maintenance" element={<InfrastructureMaintenance />} />
                <Route path="/large/administration" element={<InfrastructureAdministration />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
