import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'

import "./index.css";
import Common from "./Common";
import FacturesSave from "./pages/factures/FacturesSave";
import FacturesShow from "./pages/factures/FacturesShow";
import BatimentSave from "./pages/materiels/batiments/BatimentsSave";
import EspacesSave from "./pages/materiels/batiments/EspacesSave";

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
                <Route path="/materiels/espaces/save" element={<EspacesSave />} />
                <Route path="/administration/unites_admin/save" element={<Home />} />
                <Route path="/interventions" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
