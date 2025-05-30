export default function Men(){
    return(
        <ul className="accordion">
            <li>
                <input type="radio" name="accordion" id="fifth"/>
                <label htmlFor="fifth">Factures</label>
                <div className="content">
                    <p>Enregistrer une facture d'eau</p>
                    <p>Enregistrer une facture d'électricité</p>
                    <p>Enregistrer une facture de téléphone</p>
                    <p>Consulter les factures</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="first"/>
                <label htmlFor="first">Bâtiments</label>
                <div className="content">
                    <p>Enregistrer un nouveau bâtiment</p>
                    <p>Créer des espaces au sein du bâtiment</p>
                    <p>Créer différents usages de ces espaces</p>
                    <p>Consulter les espaces au sein du bâtiment</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second" />
                <label htmlFor="second">Matériel/Equipement</label>
                <div className="content">
                    <p>Enregistrer un nouveau matériel</p>
                    <p>Créer des catégories d'équipements</p>
                    <p>Affecter du matériel à un service, à un individu ou à un poste de travail</p>
                    <p>Procéder à l'installation d'un équipement</p>
                    <p>Consulter les équipements affectés à un espace</p>
                    <p>Rechercher un équipement par nom ou par catégorie</p>
                    <p>Connaître le nombre de matériel restant par catégorie</p>
                    <p>Lister les logiciels installés sur un ordinateur</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="third" />
                <label htmlFor="third">Structures et postes de responsabilités</label>
                <div className="content">
                    <p>Créer des structures et leurs postes de responsabilités</p>
                    <p>Affecter le personnel à un espace</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fourth" />
                <label htmlFor="fourth">Maintenance</label>
                <div className="content">
                    <p>Enregistrer un incident déclaré</p>
                    <p>Enregistrer une intervention</p>
                    <p>Consulter les interventions et les incidents</p>
                </div>
            </li>
        </ul>
    )
}