import { Link } from "react-router-dom"
import { useAppContext } from "../context"

const MusicCard = ({musicItem}) => {
  const { user } = useAppContext()
  return (
    <Link
      className="flex flex-col w-2/12 min-w-48 border m-2 p-2 rounded-2xl border-solid border-black/20 bg-white/40"
      to={user ? `/item/${musicItem.id}` : ''}
    >
      <img className="mb-2 rounded-2xl" src={musicItem.thumb} alt={musicItem.title} />
      <h5 className="m-0">{musicItem.title}</h5>
    </Link>
  )
}
export default MusicCard
