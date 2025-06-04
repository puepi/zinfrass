
export default function InterventionsSave(){
    return(
        <>
            <h1>Enregistrement des interventions</h1>
            <section className="maintenance">
                <form action="" id="interventions-save">
                    <label htmlFor="">Origine :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Incident</option>
                        <option value="">Spontanée</option>
                        <option value="">Maintenance</option>
                        <option value="">Installation</option>
                        <option value="">Déplacement</option>
                        <option value="">Réception de matériel</option>
                        <option value="">Mission</option>
                    </select>
                    <label htmlFor="">Numéro incident :</label>
                    <input type="text" />
                    <Link className="search-link" to="administration/structures/show">...rechercher</Link>
                    <label htmlFor="">Noms de l'intervenant :</label>
                    <input type="text" />
                    <label htmlFor="">Poste :</label>
                    <input type="text" />
                    <label htmlFor="">Nature de l'intervention :</label>
                    <select name="" id="">
                        <option value="">Sélectionner une option</option>
                        <option value="">Matériel</option>
                        <option value="">Logiciel</option>
                        <option value="">Batiments</option>
                        <option value="">Espaces</option>
                    </select>
                    <label htmlFor="">Nature de l'incident :</label>
                    <input type="text" />
                    <Link className="search-link" to="materiels/show">...rechercher</Link>
                    <input type="text" disabled/>
                    <label htmlFor="">Image ou vidéo :</label>
                    <input type="text" /><div></div>
                    <button>Enregistrer</button>
                </form>
            </section>
        </>
    )
}