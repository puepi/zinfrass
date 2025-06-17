
import SmallMenu from '../../../components/SmallMenu'
import './index.css'
export default function InfrastructureFactures(){
    return(
        <>
            <h1>Factures</h1>
            <div className="inf-mat-container">
                <SmallMenu
                    icon="3"
                    title="Factures d'eau"
                    subtitles={["Enregistrer", "Modifier", "Supprimer", "Consulter","Seuil"]}
                />
                <SmallMenu
                    icon="3"
                    title="Factures d'électricité"
                    subtitles={["Enregistrer", "Modifier", "Supprimer", "Consulter","Seuil"]}
                />
                <SmallMenu
                    icon="3"
                    title="Factures internet"
                    subtitles={["Enregistrer", "Modifier", "Supprimer", "Consulter","Seuil"]}
                />
                <SmallMenu
                    icon="3"
                    title="Factures de téléphone"
                    subtitles={["Enregistrer", "Modifier", "Supprimer", "Consulter","Seuil"]}
                />
            </div>
        </>
    )
}