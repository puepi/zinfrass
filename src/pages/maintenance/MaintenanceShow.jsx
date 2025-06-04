

export default function MaintenanceShow(){
    return(
        <>
            <h1>Consulter les incidents et interventions</h1>
            <section className="maintenance">
                <form action="" id="maintenance-show">
                    <label htmlFor="">Consulter les incidents selon :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Numéro du matériel</option>
                        <option value="">Service ou structure ou unité administrative</option>
                        <option value="">Date de survenue</option>
                        <option value="">Déclarant ou utilisateur</option>
                        <option value="">Nature de l'objet de l'incident</option>
                    </select>
                    <button>Rechercher</button>
                    <label htmlFor="">Consulter les interventions selon :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Numéro du matériel</option>
                        <option value="">Service ou structure ou unité administrative</option>
                        <option value="">Date de l'intervention</option>
                        <option value="">Déclarant ou utilisateur</option>
                        <option value="">Nature de l'objet de l'intervention</option>
                        <option value="">Appréciation du résultat</option>
                    </select>
                    <button>Rechercher</button>
                </form>
            </section>
        </>
    )
}