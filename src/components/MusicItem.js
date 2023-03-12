import styled from "styled-components"
import { Link } from "react-router-dom"
import { useAppContext } from "../context"

const MusicCard = ({musicItem}) => {
  const { user } = useAppContext()
  return (
    <CardContainer to={user ? `/item/${musicItem.id}` : ''}>
      <ItemImage src={musicItem.thumb} alt={musicItem.title} />
      <h5>{musicItem.title}</h5>
    </CardContainer>
  )
}
export default MusicCard

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 19%;
  min-width: 200px;
  padding: 0.5rem;
  margin: 0.2rem;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 0.5rem;
  h5 {
    margin: 0;
  }
`
const ItemImage = styled.img`
  margin-bottom: 0.5rem;
`