import styled from "styled-components"
import * as Auth from '../apis/auth'
import Image1 from '../assets/images/m1.png'
import Image2 from '../assets/images/m2.png'
import Image3 from '../assets/images/m3.png'
import Image4 from '../assets/images/m4.png'
import Image5 from '../assets/images/m5.png'
import Image6 from '../assets/images/m6.png'
import Image7 from '../assets/images/m7.png'
import Image8 from '../assets/images/m8.png'
import Image9 from '../assets/images/m9.png'

export const genreListData = [
  {key: 'acoustic', title: 'Acoustic', image: Image1},
  {key: 'ambient', title: 'Ambient', image: Image2},
  {key: 'blues', title: 'Blues', image: Image2},
  {key: 'classical', title: 'Classical', image: Image3},
  {key: 'breakbeat', title: 'Breakbeat', image: Image4},
  {key: 'chillout', title: 'Chillout', image: Image5},
  {key: 'disco', title: 'Disco', image: Image6},
  {key: 'drumandbass', title: 'Drum & bass', image: Image7},
  {key: 'downtempo', title: 'Downtempo', image: Image8},
  {key: 'other', title: 'Other', image: Image9},
]

const CategoryList = ({setGenre}) => {
  const currentUser = Auth.getCurrentUser()
  console.log({genreListData})
  return (
    <CategoryContainer>
      <TitleBar> <h2>{currentUser ? 'Welcome to JAM' : 'Login for more Genres!'}</h2> </TitleBar>
      <GenreList>
        {genreListData.map(item => (
          <GenreItem key={item.key} onClick={() => setGenre(item.key)}>
            <img src={item.image} alt={item.title}/>
            {item.title}
          </GenreItem>
        ))}
      </GenreList>
    </CategoryContainer>
  )
}

export default CategoryList

const CategoryContainer = styled.div`
`
const TitleBar = styled.div`
  background-color: bisque;
  height: 150px;
  h2 {
    margin: 0;
    padding: 1rem 0;
  }
`
const GenreList = styled.div`
  position: relative;
  bottom: 35px;
  display: flex;
  margin: 0 3rem;
  justify-content: space-around;
`
const GenreItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  width: 70px;
  overflow-wrap: break-word;
  align-items: center;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`