

export default function LotShow({lots}){
    return(
        <section id="lot">
            <form action="" id="show-form">
                    <label htmlFor="">Fournisseur :</label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                    </select>
                    <label htmlFor="">Type d'équipement</label>
                    <select name="" id="">
                        <option value="">Selectionner une option</option>
                    </select>
                    <button>Rechercher</button>
                </form>
                <table>
                <thead>
                    <tr className='show-tab'>
                        <th>N° du lot</th>
                        <th>Type d'équipement</th>
                        <th>Quantité</th>
                        <th>Date de livraison</th>
                        <th>Fournisseur</th>
                        <th>Caractéristiques</th>
                    </tr>
                </thead>
                <tbody className='lots-body'>
                        {lots && lots.length === 0 && <tr className='titles'><td>Aucun élément trouvé</td></tr>}
                        {lots && lots.length > 0 && (
                            lots.map((lot, id) => <tr key={lot.id} className='dynamic-row'>
                                <td>{lot.numLot}</td>
                                <td>{lot.typeEquipement}</td>
                                <td>{lot.qte}</td>
                                <td>{lot.montant}</td>
                                <td>{lot.dateLivraison}</td>
                                <td>{lot.fournisseur}</td>
                                <td>{lot.caracteristiques}</td>
                            </tr>)
                        )}
                    </tbody>
            </table>
        </section>
    )
}