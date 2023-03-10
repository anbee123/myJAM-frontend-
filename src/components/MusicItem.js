import styled from "styled-components"

const MusicItem = ({musicItem}) => {
  return (
    <ItemContainer>
      {musicItem.title}
    </ItemContainer>
  )
}
export default MusicItem

const ItemContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: 0.2rem;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 0.5rem;
`