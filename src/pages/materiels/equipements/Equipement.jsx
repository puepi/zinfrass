

export default function Equipement({handleSuivant}){
    return(
        <fieldset className="equipement">
            <legend>Equipements</legend>
            <div className="entries">
                <label htmlFor="">Fiche descriptive : </label>
                <textarea name="" id="" placeholder="Describe how this new product will help employee perform fast and better"></textarea><div></div><div></div><div></div><div></div><div><div></div></div>
                <label htmlFor="">Marque : </label>
                <input type="text" />
                <label htmlFor="">Modèle : </label>
                <input type="text" />
                <label htmlFor="">Quantité : </label>
                <input type="text" /><div></div>
                <label htmlFor="" className="caracteres">Caractéristiques : </label>
                <textarea className="caracteristiques" name="" id="" placeholder="Enter the detail for each caracteristics after each colon"></textarea>
                <label htmlFor="" className="photos">Photos</label>
                <input type="file" name="" id="" />
                <div>1</div><div>2</div><div>3</div><div>4</div><div></div>
                <label htmlFor="">Couleur</label>
                <input type="text" />
                <span>( Equipement un par un )</span>
                <label htmlFor="">Numéro de série : </label>
                <input type="text" />
                <label htmlFor="">Identifiant unique : </label>
                <input type="text" disabled/>
                <button>Ajouter</button>
            </div>
            <p className="count"><span>( 0 )</span></p>
            <p className="navs">
                <button>Précédent</button>
                <button>Ajouter un autre type d'équipement</button>
                <button onClick={handleSuivant}>Suivant</button>
            </p>
        </fieldset>
    )
}