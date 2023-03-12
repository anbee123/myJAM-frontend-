import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useAppContext } from "../context"
import ReactAudioPlayer from 'react-audio-player'

const ItemDetail = () => {
  const { itemId } = useParams()
  console.log({itemId})

  const { musics } = useAppContext()
  const musicItem = musics.find(item => item.id === itemId)
  console.log({musicItem})

  if (!musicItem) return null

  return (
    <ItemDetailContainer>
      {musicItem.title}
      <ReactAudioPlayer src={musicItem.stream_url} autoPlay controls />
    </ItemDetailContainer>
  )
}
export default ItemDetail

const ItemDetailContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  margin-top: 2rem;
`