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
                    subtitles={["Incidents", "Interventions", "Rapports"]}
                />
                <SmallMenu
                    icon="4"
                    title="Sur l'équipement"
                    subtitles={["Incidents", "Interventions", "Rapports"]}
                />
                <SmallMenu
                    icon="4"
                    title="Sur un logiciel"
                    subtitles={["Incidents", "Interventions", "Rapports"]}
                />
                <SmallMenu
                    icon="4"
                    title="Incidents non résolus"
                    subtitles={[]}
                />
                <SmallMenu
                    icon="4"
                    title="Missions de contrôle"
                    subtitles={[]}
                />
                <SmallMenu
                    icon="4"
                    title="Rapports"
                    subtitles={[]}
                />
                <SmallMenu
                    icon="4"
                    title="Sur un espace"
                    subtitles={["Incidents", "Interventions", "Rapports"]}
                />
                <SmallMenu
                    icon="4"
                    title="Appréciations des utilisateurs"
                    subtitles={[]}
                />
            </div>
        </>
    )
}