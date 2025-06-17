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
                                subtitles={["Windows", "Unix/Linux", "Windows Server"]}
                            />
                            <SmallMenu
                                icon="2"
                                title="Suite bureautique"
                                subtitles={["MS Office"]}
                            />
                            <SmallMenu
                                icon="2"
                                title="Applications web"
                                subtitles={["Sites web"]}
                            />
                            <SmallMenu
                                icon="2"
                                title="Logiciels Antivirus"
                                subtitles={["Kaspersky"]}
                            />
                            <SmallMenu
                                icon="2"
                                title="Applications"
                                subtitles={["Eagles", "Probmis", "SIGIPES2"]}
                            />
                            <SmallMenu
                                icon="2"
                                title="Réseaux sociaux"
                                subtitles={["whatsapp", "facebook", "tiktok", "twitter","instagram"]}
                            />
                            <SmallMenu
                                icon="2"
                                title="Autres logiciels"
                                subtitles={[]}
                            />
            
            </div>
        </>
    )
}