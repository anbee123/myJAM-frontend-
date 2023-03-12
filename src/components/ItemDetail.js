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
      <ItemImage>
        <Image src={musicItem.thumb} alt={musicItem.title} />
        <ReactAudioPlayer src={musicItem.stream_url} controls />
      </ItemImage>
      <Details>
        <h2>{musicItem.title}</h2>
        <DetailText>
          <p><b>Genre</b> : {musicItem.genre}</p>
          <p><b>Duration</b> : {musicItem.duration}</p>
          <p><b>Release Date</b> : {musicItem.release_date}</p>
        </DetailText>
        <p>{musicItem.description}</p>
      </Details>
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
const ItemImage = styled.div`
  width: 40%;
  min-width: 320px;
  margin-right: 3rem;
  border-radius: 20px;
  border: 2px solid #525252;
  padding: 0.5rem;
  background-color: #d5d5d5;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 0.5rem;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
`
const DetailText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
`