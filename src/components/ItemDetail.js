import { useParams } from "react-router-dom"
import { useAppContext } from "../context"
import ReactAudioPlayer from 'react-audio-player'


const ItemDetail = () => {
  const { itemId } = useParams()
  console.log({itemId})

  const { musics } = useAppContext()
  const musicItem = musics.find(item => item.id === itemId)
  console.log({musicItem})

  if (!musicItem) return null

  const formateTime = (sec) => {
    const date = new Date(0)
    date.setSeconds(sec)
    return date.toISOString().substring(11, 19)
  }
  return (
    <div className="w-4/5 flex m-auto p-8">
      <div className="w-2/5 h-fit min-w-[320px] border-neutral-600 bg-slate-300 flex flex-col items-center mr-12 p-2 rounded-3xl border-2 border-solid">
        <img className="w-full mb-2 rounded-3xl" src={musicItem.thumb} alt={musicItem.title} />
        <ReactAudioPlayer src={musicItem.stream_url} controls />
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold my-7">{musicItem.title}</h2>
        <div className="flex justify-between flex-wrap text-left">
          <p className="my-2"><b>Genre</b> : {musicItem.genre}</p>
          <p className="my-2"><b>Duration</b> : {formateTime(musicItem.duration)}</p>
          <p className="my-2"><b>Release Date</b> : {musicItem.release_date}</p>
        </div>
        <p>{musicItem.description}</p>
      </div>
    </div>
  )
}
export default ItemDetail
