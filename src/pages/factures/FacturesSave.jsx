import { Link } from 'react-router-dom'
import './factures.css'
import { useState } from 'react'
import Modal from '../../Modal'
import Batiment from '../materiels/batiments/Batiment'
import FacturesShow from './FacturesShow'
export default function FacturesSave() {

    const [facture, setFacture] = useState({
        numFacture: "",
        numCompteur: '',
        debut: '',
        fin: '',
        type: 'Electrictié',
        montant: '',
        oldIndex: '',
        newIndex: '',
        consommation: '',
        batiment: ''
    })
    const [showModal, setShowModal] = useState(false)

    const handleLinkClick = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const onShow = () => {

    }
    const handleSubmit = (formData) => {
        const data = Object.fromEntries(formData)

    }
    return (
        <>
            <h1 className='factures-heading'>Enregistrement d'une facture</h1>
            <section className="factures">
                <form action={handleSubmit} id="save-form" >
                    <label htmlFor="numFacture">Numéro de la facture :</label>
                    <input type="text" id="numFacture" name="numFacture" />
                    <div></div>
                    <label htmlFor="numCompteur">Numéro du compteur :</label>
                    <input type="text" id="numCompteur" name="numCompteur" />
                    <label htmlFor="debut">Période du :</label>
                    <input type="date" id="debut" name="debut" />
                    <div></div>
                    <label htmlFor="fin">Au :</label>
                    <input type="date" id="fin" name="fin" />
                    <label htmlFor="type">Type de facture :</label>
                    <select name="type" id="type">
                        <option value="">Sélectionner une option</option>
                        <option value="">Facture d'eau</option>
                        <option value="">Facture d'électricité</option>
                    </select>
                    <div></div>
                    <label htmlFor="montant">Montant :</label>
                    <input type="text" id="montant" name='montant' />
                    <label htmlFor="oldIndex">Ancien index :</label>
                    <input type="text" id="oldIndex" name="oldIndex" />
                    <div></div>
                    <label htmlFor="newIndex">Nouvel index :</label>
                    <input type="text" id="newIndex" name='newIndex' />
                    <label htmlFor="consommation">Consommation :</label>
                    <input type="text" id="consommation" name='consommation' />
                    <div></div>
                    <label htmlFor="">Unités :</label>
                    <label htmlFor="">Mètres cube (m3)</label>
                    <label htmlFor="batiment">Bâtiment :</label>
                    <input type="text" name="batiment" id="batiment" disabled />
                    <Link to="#" className='search-link' onClick={handleLinkClick}>...rechercher</Link>
                    <div></div>
                    <button>Enregistrer</button>
                </form>
            </section>
            <FacturesShow />
            {
                showModal &&
                <Modal>
                    <h4>Rechercher un bâtiment</h4>
                    <div className='batiments-search'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Nom de la subdivision :</label>
                        <input type="text" name="" id="" />
                        <button>Chercher</button>
                        <div></div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Nature de la subdivision</label>
                        <select name="" id="">
                            <option value="">Choisir</option>
                            <option value="">Services centraux</option>
                            <option value="">Région</option>
                            <option value="">Département</option>
                            <option value="">Arrondissement</option>
                            <label htmlFor="">Rattachée à</label>
                        </select>
                        <label htmlFor="">Rattachée à :</label>
                        <select name="" id="">
                            <option value="">Choisir</option>
                        </select>
                        <div></div><div></div>
                        <input type="text" disabled className='result' />
                        <button onClick={handleCloseModal}>Valider ou Quitter</button>
                    </div>
                </Modal>
            }

        </>
    )
}