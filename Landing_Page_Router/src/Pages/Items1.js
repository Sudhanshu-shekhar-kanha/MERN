import { Link } from "react-router-dom"

function Items () {

    return (
        <>

        <div className="component">
            Items
            <ul>
            <Link to='/items/item1'> <li>Item 1</li></Link>
            <Link to='/items/item2'> <li>Item 2</li></Link>
            </ul>

        </div>
        </>

    )

}


export default Items