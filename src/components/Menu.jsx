export default function Men(){
    return(
        <ul className="accordion">
            <li>
                <input type="radio" name="accordion" id="first" defaultChecked/>
                <label htmlFor="first">Bâtiments</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur optio iusto eum! Vel ratione dicta excepturi ipsa, labore culpa totam inventore quisquam odit amet non nihil explicabo. Corporis, voluptatum?</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second" />
                <label htmlFor="second">Matériel/Equipement</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur optio iusto eum! Vel ratione dicta excepturi ipsa, labore culpa totam inventore quisquam odit amet non nihil explicabo. Corporis, voluptatum?</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="third" />
                <label htmlFor="third">Structures et postes de responsabilités</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur optio iusto eum! Vel ratione dicta excepturi ipsa, labore culpa totam inventore quisquam odit amet non nihil explicabo. Corporis, voluptatum?</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fourth" />
                <label htmlFor="fourth">Maintenance</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur optio iusto eum! Vel ratione dicta excepturi ipsa, labore culpa totam inventore quisquam odit amet non nihil explicabo. Corporis, voluptatum?</p>
                </div>
            </li>
        </ul>
    )
}