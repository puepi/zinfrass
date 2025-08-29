import { useEffect, useState } from "react"
import { getAllResponsabilisations } from "../../utils/ApiFunctions"
import { Link } from "react-router-dom"


export default function RespoSave({ handlePrecedent, handleSubmitNow, isDisabled, messageButton, respos, getRespos, messageLoadingRespo }) {
    const [isChecked, setIsChecked] = useState(false)
    function handleCheck(e) {
        setIsChecked(e.target.checked)
    }

    function handleSubmit(formData) {
        const newRespo = {
            debut: formData.get('debut'),
            fin: formData.get('fin'),
            noms: formData.get('noms'),
            actif: formData.get('actif') === 'on' ? true : false
        }
        handleSubmitNow(newRespo)
    }



    useEffect(() => {
        getRespos()
    }, [])
    return (
        <fieldset className="larespo">
            <legend>Responsabilisations</legend>
            <form action={handleSubmit} className="respos-save">
                <label htmlFor="debut">Date de début :</label>
                <input type="date" name="debut" id="debut" required />
                <span></span>
                <label htmlFor="fin">Date de fin :</label>
                <input type="date" name="fin" id="fin" />
                <label htmlFor="noms">Noms et prénoms :</label>
                <input type="text" name="noms" id="noms" className="theinput" required />
                <Link className="search-link">...rechercher</Link>
                <label htmlFor="actif">
                    <input type="checkbox" name="actif" id="actif" checked={isChecked} onChange={handleCheck} />
                    Actif
                </label>
                <button type="button" onClick={handlePrecedent}>Précédent</button>
                <span></span>
                <div></div><div></div>
                <button disabled={isDisabled}>{messageButton}</button>
            </form>
            <form action="" className="show-form">
                <label htmlFor="">Selon le rang :</label>
                <select name="" id="">
                    <option value="">Faites un choix</option>
                </select>
                <select name="" id="">
                    <option value="">Selectionner une option</option>
                </select>
                <button type="button" >Rechercher</button>
            </form>
            <table>
                <thead>
                    <tr className='show-tab'>
                        <th>Structure</th>
                        <th>Poste</th>
                        <th>Noms et prénoms</th>
                        <th>Debut</th>
                    </tr>
                </thead>
                <tbody className='lastructure-body'>
                    {respos && respos.length === 0 && <tr className='titles'><td>{messageLoadingRespo}</td></tr>}
                    {respos && respos.length > 0 && (
                        respos.map((respo, id) => <tr key={respo.id} className='dynamic-row' >
                            <td>{respo.nomStructure}</td>
                            <td>{respo.nomPoste}</td>
                            <td>{respo.noms}</td>
                            <td>{respo.debut}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </fieldset>
    )
}