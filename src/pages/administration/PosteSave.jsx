

export default function PosteSave() {
    return (

        <>
            <fieldset className="lastructure">
                <legend>Postes de responsabilité</legend>
                <form action="" className="structure-postes-save">
                    <label htmlFor="">Nom :</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Abréviation :</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Rang</label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                        <option value="Ministre">Ministre</option>
                        <option value="Sectétaire Général">Secrétaire Général</option>
                        <option value="Inspecteur Général">Inspecteur Général</option>
                        <option value="Directeur">Directeur</option>
                        <option value="Directeur Adjoint">Directeur Adjoint</option>
                        <option value="Sous-directeur">Sous-directeur</option>
                        <option value="Chef de service">Chef de Service</option>
                        <option value="Chef de Bureau">Chef de Bureau</option>
                    </select>
                    <button>Enregistrer</button>
                    <button type="button">Suivant</button>
                </form>
            </fieldset>
        </>
    )
}