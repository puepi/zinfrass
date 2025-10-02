

export default function LotShow({ lots, messageLoadingLot, mettreAuMagasin, deleteLot,handleAddEquipements }) {
    return (
        <div className="lot">
            <form action="" id="show-form">
                <label htmlFor="">N° du lot :</label>
                <select name="" id="">
                    <option value="">Faites un choix</option>
                </select>
                <label htmlFor="">Fournisseur</label>
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
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody className='lots-body'>
                    {lots && lots.length === 0 && <tr className='titles'><td>{messageLoadingLot}</td></tr>}
                    {lots && lots.length > 0 && (
                        lots.map((lot, id) => <tr key={id} className='dynamic-row'>
                            <td>{lot?.nroLot}</td>
                            <td>{lot?.typeEquipementName}</td>
                            <td>{lot?.quantiteStock}</td>
                            <td>{lot?.dateReception}</td>
                            <td>{lot?.providerName}</td>
                            <td>{lot?.caracteristiques?.substring(0, 30) + '...'}</td>
                            <td>
                                <button type="button" className="edit-btn">
                                    &#9998;
                                </button>&nbsp;&nbsp;
                                <button type="button" className="delete-btn" onClick={() => deleteLot(lot)}>
                                    &#x1F5D1;
                                </button>&nbsp;&nbsp;
                                <button disabled={lot?.quantiteStock === 0} type="button" className="magasin-btn" onClick={() => mettreAuMagasin(lot)}>
                                    &#128274;
                                </button>&nbsp;&nbsp;
                                <button type="button" className="ajout-btn" onClick={()=>handleAddEquipements(lot)}>
                                    &#10010;
                                </button>
                            </td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
    )
}