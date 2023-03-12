import styled from "styled-components"
import MusicCard from "./MusicItem"

const MusicList = ({musics}) => {
  return (
    <div>
      <ListContainer>
        {musics && musics.map((item, index) => (
          item && <MusicCard key={index} musicItem={item} />
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