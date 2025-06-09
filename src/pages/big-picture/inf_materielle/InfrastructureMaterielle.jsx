import SmallMenu from "../../../components/SmallMenu";

import './test.css'


export default function InfrastructureMaterielle() {
    return (
        <>
            <h1>INFRASTRUCTURE MATERIELLE</h1>
            <SmallMenu />

            <ul class="menu">
                <li><a href="#">Accueil</a></li>
                <li>
                    <a href="#">Services</a>
                    <ul class="submenu">
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Développement</a></li>
                        <li><a href="#">SEO</a></li>
                    </ul>
                </li>
                <li><a href="#">Contact</a></li>
            </ul>
        </>
    )
}