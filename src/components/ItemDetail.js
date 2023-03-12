import { useParams } from "react-router-dom"
import { useAppContext } from "../context"

const ItemDetail = () => {
  const { itemId } = useParams()
  console.log({itemId})

  const { musics } = useAppContext()
  const musicItem = musics.find(item => item.id === itemId)
  console.log({musicItem})

  return (
    <div>
      Item detail
    </div>
  )
}
export default ItemDetail