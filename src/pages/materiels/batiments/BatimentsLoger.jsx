import { Link } from "react-router-dom"

export default function BatimentsLoger() {
    return (
        <>
            <h1>Affecter du personnel à un espace</h1>
            <section className="batiments">
                <form action="" id="batiments-loger">
                    <label htmlFor="">Identification de l'espace :</label>
                    <input type="text" />
                    <Link className="search-link" to="/materiels/batiments/show">...rechercher</Link>
                    <div className='empty'></div>
                    <label htmlFor="">Noms et prénoms :</label>
                    <input type="text" />
                    <label htmlFor="">Poste de travail :</label>
                    <input type="text" />
                    <label htmlFor="">Date de prise d'effet :</label>
                    <input type="date" />
                    <div className='empty'></div>
                    <button>Ajouter</button>
                    <div className="empty2"></div>
                    <button>Valider et quitter</button>
                </form>
            </section>
        </>
    )
}