import SmallMenu from "../../../components/SmallMenu"
import './index.css'

export default function InfrastructureLogicielle() {
    return (
        <>
            <h1>Infrastucture Logicielle</h1>
            <div className="inf-mat-container">
                <SmallMenu
                    icon="2"
                    title="Systèmes d'exploitation"
                    link="/large/logiciel/os"
                    subtitles={["Windows", "Unix/Linux", "Windows Server"]}
                />
                <SmallMenu
                    icon="2"
                    title="Suite bureautique"
                    link="/large/logiciel/bureautique"
                    subtitles={["MS Office"]}
                />
                <SmallMenu
                    icon="2"
                    title="Applications web"
                    link="/large/logiciel/web"
                    subtitles={["Sites web"]}
                />
                <SmallMenu
                    icon="2"
                    title="Logiciels Antivirus"
                    link="/large/logiciel/antivirus"
                    subtitles={["Kaspersky"]}
                />
                <SmallMenu
                    icon="2"
                    title="Applications"
                    link="/large/logiciel/applications"
                    subtitles={["Eagles", "Probmis"]}
                />
                <SmallMenu
                    icon="2"
                    title="Réseaux sociaux"
                    link="/large/logiciel/res-sociaux"
                    subtitles={["whatsapp", "facebook", "tiktok", "twitter", "instagram"]}
                />

            </div>
        </>
    )
}