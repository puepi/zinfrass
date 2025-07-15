import './batiments.css'

export default function BatimentsShow({ batiments }) {

    return (
        <>
            <section className='batiments'>
                <form action="" id="show-form">
                    <label htmlFor="">Type de facture :</label>
                    <select name="" id="">
                        <option value="">Faites un choix</option>
                        <option value="">Eau</option>
                        <option value="">Electrictié</option>
                        <option value="">Téléphone</option>
                        <option value="">Internet</option>
                    </select>
                    <select name="" id="">
                        <option value="">Selectionner une option</option>
                        <option value="">Numéro de facture</option>
                        <option value="">Période</option>
                        <option value="">Bâtiment</option>
                        <option value="">Unité administrative</option>
                        <option value="">Consommation</option>
                        <option value="">Numéro de compteur</option>
                    </select>
                    <div></div><div></div>
                    <button>Valider</button>
                </form>
                <table>
                    <thead>
                        <tr className='show-tab'>
                            <th>N° </th>
                            <th>Subdivision</th>
                            <th>Nom</th>
                            <th>Nature</th>
                            <th>Description</th>
                            <th>Rétrocédé ?</th>
                            <th>Date Rétrocession</th>
                        </tr>
                    </thead>
                    <tbody className='batiments-body'>

                    </tbody>
                </table>
            </section>

        </>
    )
}