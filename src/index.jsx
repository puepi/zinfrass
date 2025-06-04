import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'

import "./index.css";
import Common from "./Common";
import FacturesSave from "./pages/factures/FacturesSave";
import FacturesShow from "./pages/factures/FacturesShow";
import BatimentSave from "./pages/materiels/batiments/BatimentsSave";
import EspacesSave from "./pages/materiels/batiments/EspacesSave";
import ConnectiquesSave from "./pages/materiels/connectiques/connectiquesSave";
import EquipementsSave from "./pages/materiels/equipements/EquipementsSave";
import EquipementsShow from "./pages/materiels/equipements/EquipementsShow";
import EquipementsAffecter from "./pages/materiels/equipements/EquipementsAffecter";
import EquipementsInstaller from "./pages/materiels/equipements/EquipementsInstaller";
import BatimentsLoger from "./pages/materiels/batiments/BatimentsLoger";
import EquipementsAffecterShow from "./pages/materiels/equipements/EquipementsAffecterShow";
import StructureSave from "./pages/administration/StructureSave";
import UnitesAdminSave from "./pages/administration/UnitesAdminSave";

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
                <Route path="/connectiques/save" element={<ConnectiquesSave />} />
                <Route path="/administration/unites-admin/save" element={<UnitesAdminSave />} />
                <Route path="/administration/structures/save" element={<StructureSave />} />
                <Route path="/interventions" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
