import { useParams } from "react-router-dom"
import   ItemDetail   from "../itemDetail/itemDetail"

function ItemDetailContainer() {

    const { pid } = useParams() // pid

    return (
        <div>
            {pid}
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer