import SmallMenu from "../../../components/SmallMenu";

import './index.css'
export default function InfrastructureAdministration() {
    return (
        <>
            <h1>Administration, Organigramme et Cartographie</h1>
            <div className="inf-mat-container">
                <SmallMenu
                    icon="5"
                    title="Cartographie des services"
                    link="/large/administration/cartographie"
                    subtitles={["Consulter"]}
                />
                <SmallMenu
                    icon="5"
                    title="Se connecter"
                    link="/large/administration/login"
                    subtitles={["Login"]}
                />
                <SmallMenu
                    icon="5"
                    title="Structures et services"
                    link="/large/administration/services"
                    subtitles={["Créer", "Consulter"]}
                />
                <SmallMenu
                    icon="5"
                    title="Subdivisions administratives"
                    link="/large/administration/subdivisions"
                    subtitles={["Créer", "Consulter"]}
                />
            </div>
        </>
    )
}