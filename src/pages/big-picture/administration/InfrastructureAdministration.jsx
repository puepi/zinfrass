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
                    subtitles={[]}
                />
                <SmallMenu
                    icon="5"
                    title="Se connecter"
                    subtitles={[]}
                />
                <SmallMenu
                    icon="5"
                    title="Structures et services"
                    subtitles={["Créer", "Consulter"]}
                />
                <SmallMenu
                    icon="5"
                    title="Subdivisions administratives"
                    subtitles={["Créer", "Consulter"]}
                />
            </div>
        </>
    )
}