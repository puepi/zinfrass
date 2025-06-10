import SmallMenu from "../../../components/SmallMenu";

import './index.css'
export default function InfrastructureMaterielle() {
    return (
        <>
            <h1>INFRASTRUCTURE MATERIELLE</h1>
            <div className="inf-mat-container">
                <SmallMenu
                    icon="1"
                    title="Réseau électrique"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Réseau hydraulique"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Réseau téléphonique"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Réseau informatique"
                    subtitles={["Parc", "Connectiques", "Adressage", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Bâtiments"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Matériel roulant"
                    subtitles={["Voitures", "Motos", "Bus", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Mobilier de bureau"
                    subtitles={["Categories", "Par bureau", "Maintenance"]}
                />
                <SmallMenu
                    icon="1"
                    title="Matériel didactique"
                    subtitles={[]}
                />
                <SmallMenu
                    icon="1"
                    title="Sanitaires"
                    subtitles={["Equipements", "Connectiques", "Maintenance"]}
                />

            </div>
        </>
    )
}