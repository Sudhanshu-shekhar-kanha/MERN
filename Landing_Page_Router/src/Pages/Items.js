import { Link } from "react-router-dom"
import ItemsData from "../Data/DataPage"

function Items () {

    return (
        <>
        <div className="component">
            Items

            <div>
                <ul>
                {ItemsData.map((item) => (
                   <Link to ={`/items/${item.id}`}>
                   <li className="content"> {item.id} </li>  </Link>

                ))

                }
</ul>
            </div>

        </div>
        </>

    )

}


export default Items


