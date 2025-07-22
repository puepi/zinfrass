

export default function Lot(){
    return(
        <fieldset className="lot">
        <legend>Lot</legend>
        <div className="entries">
            <label htmlFor="">N° du lot</label>
            <input type="text" />
            <label htmlFor="">Date de livraison : </label>
            <input type="date" />
            <label htmlFor="">Noms des livreurs : </label>
            <input type="text" />
            <label htmlFor="">Techniciens MINPROFF : </label>
            <input type="text" />
            <label htmlFor="">Observations : </label>
            <textarea name="" id=""></textarea>
            <label htmlFor="">Appreciations : </label>
            <label htmlFor="">Procès verbal: </label>
            <input type="file" />
            <input type="text" />
            <button>Terminer</button>
        </div>
            
        <table>
            <thead>
                <tr className='show-tab'>
                    <th>N° du lot</th>
                    <th>Type d'équipement</th>
                    <th>Quantité</th>
                    <th>Date de livraison</th>
                    <th>Fournisseur</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </table>
    </fieldset>
    )
}