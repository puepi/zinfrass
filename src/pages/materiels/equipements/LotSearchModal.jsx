

export default function LotSearchModal() {
    return (
        <Modal>
            <h4>Rechercher un Lot</h4>
            <div className='batiments-search'>
                <input type="checkbox" checked={isChecked} onChange={handleChange} id="subdivisionName" />
                <label htmlFor="subdivisionName">Nom de la subdivision :</label>
                <input type="text" name="subdivisionName" id="subdivisionName" disabled={isDisabled} value={subdivisionName} onChange={handleChange3} />
                <div></div>
                <div></div>
                <input type="checkbox" name="subdivision-nature" id="subdivision-nature" onChange={handleChange2} />
                <label htmlFor="subdivision-nature">Nature de la subdivision</label>
                <select name="" id="" disabled={isDisabled2}>
                    <option value="">Choisir</option>
                    <option value="">Services centraux</option>
                    <option value="">Région</option>
                    <option value="">Département</option>
                    <option value="">Arrondissement</option>
                </select>
                <label htmlFor="">Rattachée à :</label>
                <select name="" id="" disabled={isDisabled2}>
                    <option value="">Choisir</option>
                </select>
                <div></div>
                <button disabled={isDisabled3} onClick={handleRechercher}>{messageButton}</button>
                <div></div>
                <div></div>
                <button onClick={handleCloseModal}>Quitter</button>
            </div>
            <BatimentSearchResult batiments={batiments} handleSelectRow={handleSelectRow} />
        </Modal>
    )
}