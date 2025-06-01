import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home'

import "./index.css";
import Common from "./Common";

function App() {
    return (
        <BrowserRouter>
            <Common />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <App />
);
