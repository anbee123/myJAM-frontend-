import styled from "styled-components"
import MusicCard from "./MusicItem"

const MusicList = ({musics}) => {
  return (
    <div>
      <h2>This is music list</h2>
      <ListContainer>
        {musics.map(item => (
          <MusicCard key={item.id} musicItem={item} />
        ))}
      </ListContainer>
    </div>
  )
}
export default MusicList

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`