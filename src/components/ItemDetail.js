import { useParams } from "react-router-dom"

const ItemDetail = () => {
  const { itemId } = useParams()
  console.log({itemId})
  return (
    <div>
      Item detail
    </div>
  )
}
export default ItemDetail