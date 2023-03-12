import styled from "styled-components"
import * as Auth from '../apis/auth'

const CategoryList = () => {
  const currentUser = Auth.getCurrentUser()
  return (
    <CategoryContainer>
      <TitleBar> <h2>{currentUser ? 'Welcome to JAM' : 'Login for more Genres!'}</h2> </TitleBar>
      <GenreList>This is Genre List</GenreList>
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
  bottom: 50px;
`