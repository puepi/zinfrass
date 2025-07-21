
export default function Fournisseur({ handleClick }) {
    return (
        <fieldset className="fournisseur">
            <legend>Fournisseur</legend>
            <div className="fournisseur-entries">
                <div></div>
                <input type="text" disabled className="show-search" />
                <span>(Sélectionnez une ligne du tableau)</span><div></div>
                <label htmlFor="">Nom : </label>
                <input type="text" />
                <label htmlFor="">Représentant : </label>
                <input type="text" />
                <label htmlFor="">Type : </label>
                <select name="" id="">
                    <option value="">Faites un choix</option></select><div></div>
                <label htmlFor="">Adresse : </label>
                <input type="text" />
                <label htmlFor="">Contact : </label>
                <input type="text" />
                <label htmlFor="">Email : </label>
                <input type="text" /><div></div>
                <label htmlFor="">NIU : </label>
                <input type="text" /><div></div><div></div><div></div><div></div><div></div>
                <button>Enregistrer</button>
            </div>
            <p className="search-place">
                <label htmlFor="">Chercher par nom :  </label>
                <input type="text" />
                <button>Chercher</button>
            </p>
            <table>
                <thead>
                    <tr className='show-tab'>
                        <th>Nom</th>
                        <th>Représentant</th>
                        <th>Type</th>
                        <th>Adresse</th>
                        <th>Email</th>
                        <th>NIU</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
            <p className="nav-buttons">
                <button>{"<"}</button>
                <button>{">"}</button>
            </p>
            <p className="suivant">
                <button className="suivant" onClick={handleClick}>Suivant</button>
            </p>
        </fieldset>
    )
}