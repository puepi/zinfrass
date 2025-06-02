import './connectiques.css'

export default function ConnectiquesSave() {
    return (
        <>
            <h1>Enregistrement des connectiques</h1>
            <section className="connectiques">
                <form action="" id="connectiques-save">
                    <label htmlFor="">Nature de la prise :</label>
                    <input type="text" />
                    <label htmlFor="">Quantité :</label>
                    <input type="text" />
                    <button>Ajouter</button>
                    <div className="empty"></div>
                    <button>Poursuivre</button>
                </form>
            </section>
        </>
    )
}