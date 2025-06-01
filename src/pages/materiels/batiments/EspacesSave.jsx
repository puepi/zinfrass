

export default function EspacesSave() {
    return (
        <>
            <h1>Création d'espaces au sein d'un bâtiments</h1>
            <section className="batiments">
                <form action="" id="espaces-save">
                    <label htmlFor="">Nom du bâtiment :</label>
                    <input type="text" />
                    <label htmlFor="">Nom de l'espace :</label>
                    <input type="text" />
                    <label htmlFor="">Usage :</label>
                    <select name="" id="">
                        <option value="">Etage</option>
                        <option value="">Bureau</option>
                        <option value="">Toilettes/WC</option>
                        <option value="">Salle de réunion</option>
                        <option value="">Bibliothèque</option>
                        <option value="">Parking</option>
                    </select>
                    <label htmlFor="">Dimensions :</label>
                    <input type="date" />
                    <label htmlFor="">Fenêtres :</label>
                    <input type="text" />
                    <label htmlFor="">Portes :</label>
                    <button>Valider et poursuivre</button>
                </form>
            </section>
        </>
    )
}