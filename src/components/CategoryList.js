import styled from "styled-components"
import Image1 from '../assets/images/m1.png'
import Image2 from '../assets/images/m2.png'
import Image3 from '../assets/images/m3.png'
import Image4 from '../assets/images/m4.png'
import Image5 from '../assets/images/m5.png'
import Image6 from '../assets/images/m6.png'
import Image7 from '../assets/images/m7.png'
import Image8 from '../assets/images/m8.png'
import Image9 from '../assets/images/m9.png'
import Image10 from '../assets/images/m10.png'
import { useAppContext } from "../context"

export const genreListData = [
  {key: 'acoustic', title: 'Acoustic', image: Image1},
  {key: 'ambient', title: 'Ambient', image: Image2},
  {key: 'blues', title: 'Blues', image: Image3},
  {key: 'classical', title: 'Classical', image: Image4},
  {key: 'pop', title: 'Pop', image: Image5},
  {key: 'chillout', title: 'Chillout', image: Image6},
  {key: 'disco', title: 'Disco', image: Image7},
  {key: 'drumandbass', title: 'Drum & bass', image: Image8},
  {key: 'downtempo', title: 'Downtempo', image: Image9},
  {key: 'other', title: 'Other', image: Image10},
]

const CategoryList = ({setGenre}) => {
  const { user } = useAppContext()
  return (
    <CategoryContainer>
      <TitleBar> <h2>{user ? 'Welcome to myJAM' : 'Login for more Genres!'}</h2> </TitleBar>
      <GenreList>
        {(user ? genreListData : genreListData.slice(0, 5)).map(item => (
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
  background-color: rgba(250, 250, 250, 0.3);
  height: 135px;
  h2 {
    margin: 0;
    padding: 1rem 0;
    font-size: 60px;
    font-weight: 600;
    color: transparent;
    background-image: linear-gradient(to right ,#553c9a, #ee4b2b, #00c2cb, #ff7f50, #553c9a);
    -webkit-background-clip: text;
    background-clip: text;    
    background-size: 200%;
    background-position: -200%;
    animation: animated-gradient 3s infinite alternate-reverse;
  }
  &:after {
    content: 'qwq'
    box-shadow: inset (-40px) (-40px) 40px (-40px);
  }
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