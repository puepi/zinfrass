import { useState } from "react";
import LotShow from "./LotShow";


export default function Lot({handlePrecedent}){
    const [lots,setLots]=useState([])
    return(
        <section className="lot">
            <fieldset>
                <legend>Lot</legend>
                <div className="entries">
                    <label htmlFor="">N° du lot</label>
                    <input type="text" />
                    <label htmlFor="">Date de livraison : </label>
                    <input type="date" /><div></div>
                    <label htmlFor="">Noms des livreurs : </label>
                    <input type="text" />
                    <label htmlFor="">Techniciens MINPROFF : </label>
                    <input type="text" /><div></div>
                    <label htmlFor="" className="label-observations">Observations : </label>
                    <textarea name="" id=""></textarea><div></div><div></div><div></div><div></div>
                    <label htmlFor="">Appreciations : </label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                    </select>
                    <label htmlFor="">Procès verbal: </label>
                    <input type="file" /><div></div>
                    <button onClick={handlePrecedent}>Précédent</button><div></div><div></div>
                    <button>Terminer</button>
                </div>
            </fieldset>
            <LotShow lots={lots}/>
        </section>
        
    )
}