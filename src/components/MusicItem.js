import styled from "styled-components"

const MusicCard = ({musicItem}) => {
  return (
    <CardContainer>
      {/* <img src={musicItem.thumb} alt={musicItem.title} /> */}
      {musicItem.title}
    </CardContainer>
  )
}
export default MusicCard

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 19%;
  min-width: 200px;
  padding: 0.5rem;
  margin: 0.2rem;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 0.5rem;
`