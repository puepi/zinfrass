

export default function Equipement(){
    return(
        <fieldset className="equipement">
            <legend>Equipements</legend>
            <div className="entries">
                <label htmlFor="">Fiche descriptive : </label>
                <input type="textarea" />
                <label htmlFor="">Marque : </label>
                <input type="text" />
                <label htmlFor="">Modèle : </label>
                <input type="text" />
                <label htmlFor="">Quantité : </label>
                <input type="text" /><div></div>
                <label htmlFor="">Caractéristiques : </label>
                <input type="textarea" />
                <label htmlFor="">Couleur</label>
                <input type="text" />
                <label htmlFor="">Photos</label>
                <input type="file" name="" id="" />
                <div>1</div><div>2</div><div>3</div><div>4</div>
                <span>Equipement un par un</span>
                <label htmlFor="">Numéro de série : </label>
                <input type="text" />
                <label htmlFor="">Identifiant unique : </label>
                <input type="text" />
                <button>Ajouter</button>
            </div>
            <p><span>( 0 )</span></p>
            <p>
                <button>Précédent</button>
                <button>Ajouter un autre type d'équipement</button>
                <button>Suivant</button>
            </p>
        </fieldset>
    )
}