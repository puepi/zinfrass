import { useState } from "react";
import LotShow from "./LotShow";


export default function Lot({ handlePrecedent, handleSubmitAll }) {
    const [lots, setLots] = useState([])
    return (
        <section className="lot">
            <fieldset>
                <legend>Lot</legend>
                <form className="entries" action={handleSubmitAll}>
                    <label htmlFor="numLot">N° du lot</label>
                    <input type="text" name="numLot" id="numLot" required />
                    <label htmlFor="dateLivraison">Date livraison : </label>
                    <input type="date" name="dateLivraison" id="dateLivraison" required /><div></div>
                    <label htmlFor="livreurs">Livreurs : </label>
                    <input type="text" name="livreurs" id="livreurs" required />
                    <label htmlFor="technicien">Technicien MINPROFF : </label>
                    <input type="text" name="technicien" id="technicien" required /><div></div>
                    <label htmlFor="observations" className="label-observations">Observations : </label>
                    <textarea name="observations" id="observations" required></textarea><div></div><div></div><div></div><div></div>
                    <label htmlFor="appreciations">Appreciations : </label>
                    <select name="appreciations" id="appreciations" required>
                        <option value="">Faites un choix</option>
                        <option value="successful">Successful</option>
                    </select>
                    <label htmlFor="">Procès verbal: </label>
                    <input type="file" /><div></div>
                    <button onClick={handlePrecedent} type="button">Précédent</button><div></div><div></div>
                    <button>Terminer</button>
                </form>
            </fieldset>
            <LotShow lots={lots} />
        </section>

    )
}