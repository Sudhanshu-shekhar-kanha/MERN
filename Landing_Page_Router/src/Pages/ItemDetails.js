import { useParams } from "react-router-dom"
import ItemsData from "../Data/DataPage"

function ItemDetails (){

   const {id} = useParams()
   //const items = ItemsData.find( (items)=> items.id === parseInt(id))
   const item = ItemsData.find((item) => item.id === parseInt(id));
   console.log(item)
   console.log(id)
   console.log(ItemsData)
   console.log(item.title)



    return(

        <>
        <div className="component">
            Item Details
            <br/>
            <hr/>
            <h8> {item.title }</h8>
            <h8> {item.description }</h8>




        </div>

        </>
    )

}

export default ItemDetails


