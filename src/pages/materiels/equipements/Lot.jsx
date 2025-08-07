import { useState } from "react";
import LotShow from "./LotShow";


export default function Lot({ handlePrecedent }) {
    const [lots, setLots] = useState([])
    return (
        <section className="lot">
            <fieldset>
                <legend>Lot</legend>
                <form className="entries">
                    <label htmlFor="numLot">N° du lot</label>
                    <input type="text" name="numLot" />
                    <label htmlFor="">Date livraison : </label>
                    <input type="date" name="dateLivraison" /><div></div>
                    <label htmlFor="livreurs">Livreurs : </label>
                    <input type="text" name="livreurs" />
                    <label htmlFor="technicien">Technicien MINPROFF : </label>
                    <input type="text" name="technicien" /><div></div>
                    <label htmlFor="observations" className="label-observations">Observations : </label>
                    <textarea name="observations" id=""></textarea><div></div><div></div><div></div><div></div>
                    <label htmlFor="">Appreciations : </label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                    </select>
                    <label htmlFor="">Procès verbal: </label>
                    <input type="file" /><div></div>
                    <button onClick={handlePrecedent}>Précédent</button><div></div><div></div>
                    <button>Terminer</button>
                </form>
            </fieldset>
            <LotShow lots={lots} />
        </section>

    )
}