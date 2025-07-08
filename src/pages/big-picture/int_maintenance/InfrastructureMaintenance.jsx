import SmallMenu from "../../../components/SmallMenu";

import './index.css'


export default function InfrastructureMaintenance() {
    return (
        <>
            <h1>Maintenance, Incidents et Interventions</h1>
            <div className="inf-mat-container">
                <SmallMenu
                    icon="4"
                    title="Sur le bâtiment"
                    link="/large/maintenance/batiment"
                    subtitles={["Incidents", "Interventions", "Rapports"]}
                />
                <SmallMenu
                    icon="4"
                    title="Sur l'équipement"
                    link="/large/maintenance/equipement"
                    subtitles={["Incidents", "Interventions", "Rapports"]}
                />
                <SmallMenu
                    icon="4"
                    title="Sur un logiciel"
                    link="/large/maintenance/logiciel"
                    subtitles={["Incidents", "Interventions", "Rapports"]}
                />
                <SmallMenu
                    icon="4"
                    title="Incidents non résolus"
                    link="/large/maintenance/non-resolus"
                    subtitles={["Consulter"]}
                />
                <SmallMenu
                    icon="4"
                    title="Missions de contrôle"
                    link="/large/maintenance/missions"
                    subtitles={["Consulter"]}
                />
                <SmallMenu
                    icon="4"
                    title="Rapports"
                    link="/large/maintenance/rapports"
                    subtitles={["Consulter"]}
                />
                <SmallMenu
                    icon="4"
                    title="Sur un espace"
                    link="/large/maintenance/espaces"
                    subtitles={["Incidents", "Interventions", "Rapports"]}
                />
                <SmallMenu
                    icon="4"
                    title="Appréciations des utilisateurs"
                    link="/large/maintenance/appréciations"
                    subtitles={["Consulter"]}
                />
            </div>
        </>
    )
}