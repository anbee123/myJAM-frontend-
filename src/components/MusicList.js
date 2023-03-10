import styled from "styled-components"
import MusicItem from "./MusicItem"

const MusicList = ({musics}) => {
  return (
    <div>
      <h2>This is music list</h2>
      <ListContainer>
        {musics.map(item => (
          <MusicItem musicItem={item} />
        ))}
      </ListContainer>
    </div>
  )
}
export default MusicList

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`