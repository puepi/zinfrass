import { useEffect, useState } from "react"
import Modal from "../../../Modal"
import { getAllResponsabilisations } from "../../../utils/ApiFunctions"


export default function RespoSearchModal({handleCloseModal,handleSelectRespo}){
    const [messageButton,setMessageButton]=useState('Rechercher')
    const [messageLoading,setMessageLoading]=useState('Aucun élément trouvé')
    const [respos,setRespos]=useState([])
    async function handleRechercher(){

    }
    async function getRespos(){
        setMessageLoading('...loading...')
        getAllResponsabilisations()
            .then(data=>setRespos(data))
            .catch(error=>{console.log(error);setMessageLoading('Aucun élément trouvé')})
    }
    useEffect(()=>{
        getRespos()
    },[])

    function handleSelectRow(e,respo){
        handleSelectRespo(respo)
        handleCloseModal()
    }
    return(
        <Modal>
            <h4>Rechercher une responsabilisation</h4>
            <form className='respos-search' action={handleRechercher}>
                <label htmlFor="structure">Nom de la structure:</label>
                <input type="text" name="structure" id="structure" required />
                <div></div>
                <div></div>
                <label htmlFor="poste">Poste de responsabilité</label>
                <input type="text" name="poste" id="poste" />
                <div></div>
                <div></div>
                <button>{messageButton}</button>
                <div></div>
                <div></div>
                <button type="button" onClick={handleCloseModal}>Quitter</button>
            </form>
            <table className="table-respo">
                <thead>
                    <tr className="show-tab">
                        <th>N°</th>
                        <th>Structure</th>
                        <th>Poste</th>
                        <th>Noms et prénoms</th>
                    </tr>
                </thead>
                <tbody>
                    {respos && respos.length === 0 && <tr className='titles'><td>{messageLoading}</td></tr>}
                    {respos && (
                        respos.map((respo, id) => <tr key={respo.id} className='dynamic-row' onClick={(e) => handleSelectRow(e, respo)}>
                            <td>{id + 1}</td>
                            <td>{respo.nomStructure}</td>
                            <td>{respo.nomPoste}</td>
                            <td>{respo.noms}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </Modal>
    )
}