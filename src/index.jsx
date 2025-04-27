import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />} />
        </Routes>
    </BrowserRouter>
);
