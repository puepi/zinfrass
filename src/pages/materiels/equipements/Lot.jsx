import { useEffect, useState } from "react";
import LotShow from "./LotShow";
import { getAllLots } from "../../../utils/ApiFunctions";
import { Link } from "react-router-dom";


export default function Lot({ handlePrecedent, handleAddEquipements, mettreAuMagasin, handleSubmitAll, messageSubmit, lots, showAllLots, messageLoadingLot, deleteLot }) {


    useEffect(() => {
        showAllLots()
    }, [])
    return (
        <section className="lot">
            <fieldset>
                <legend>Terminer l'enregistrement du lot</legend>
                <form className="entries" action={handleSubmitAll}>
                    <label htmlFor="numLot">N° du lot</label>
                    <input type="text" name="numLot" id="numLot" disabled />
                    <label htmlFor="dateLivraison">Date livraison : </label>
                    <input type="date" name="dateLivraison" id="dateLivraison" required /><div></div>
                    <label htmlFor="livreurs">Livreurs : </label>
                    <input type="text" name="livreurs" id="livreurs" required />
                    <label htmlFor="technicien">Technicien MINPROFF : </label>
                    <input type="text" name="technicien" id="technicien" required />
                    <Link className="search-link" to="" >...rechercher</Link>
                    <label htmlFor="observations" className="label-observations">Observations : </label>
                    <textarea name="observations" id="observations" required></textarea><div></div><div></div><div></div><div></div>
                    <label htmlFor="appreciations">Appreciations : </label>
                    <select name="appreciations" id="appreciations" required>
                        <option value="">Faites un choix</option>
                        <option value="successful">Successful</option>
                    </select>
                    <label htmlFor="">Procès verbal: </label>
                    <input type="file" /><div></div>
                    <button onClick={handlePrecedent} type="button">Précédent</button>
                    <div></div>
                    <button>{messageSubmit}</button>
                    <div></div>
                    <Link className="create-link">...Mettre en magasin</Link>
                </form>
                <LotShow handleAddEquipements={handleAddEquipements} deleteLot={deleteLot} lots={lots} messageLoadingLot={messageLoadingLot} mettreAuMagasin={mettreAuMagasin} />
            </fieldset>
        </section>

    )
}