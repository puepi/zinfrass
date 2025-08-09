import { Link } from "react-router-dom"

export default function BatimentsLoger() {
    return (
        <>
            <h1>Affecter du personnel à un espace</h1>
            <section className="batiments-new">
                <form action="" id="batiments-loger">
                    <label htmlFor="">Identification de l'espace :</label>
                    <input type="text" disabled />
                    <Link className="search-link" to="/materiels/batiments/show">...rechercher</Link>
                    <div className='empty'></div>
                    <div></div><div></div><div></div>
                    <Link className="search-link" to="/materiels/batiments/show">...rechercher la personne</Link>
                    <label htmlFor="">Noms et prénoms :</label>
                    <input type="text" disabled />
                    <label htmlFor="">Poste de travail :</label>
                    <input type="text" disabled />
                    <label htmlFor="">Date de prise d'effet :</label>
                    <input type="date" />
                    <Link className="search-link" to="/materiels/batiments/show">...rechercher la structure</Link>
                    <input type="text" disabled />
                    <button>Ajouter</button>
                    <div className="empty2"></div>
                    <button>Valider et quitter</button>
                </form>
            </section>
        </>
    )
}