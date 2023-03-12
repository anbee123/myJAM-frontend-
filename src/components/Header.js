import { useNavigate, NavLink } from "react-router-dom"
import styled from "styled-components"
import Logo from '../assets/logo.jpeg'
import * as Auth from '../apis/auth'

const Header = ({searchKey, setSearchKey}) => {
  const currentLogin = Auth.getCurrentUser()
  const navigate = useNavigate()
  const handleClick = () => {
    console.log({searchKey})
  }
  const handleLogin = () => {
    navigate('/login')
  }
  const handleLogout = () => {
    Auth.logout()
    navigate('/')
  }
  const handleSignup = () => {
    navigate('/signup')
  }
  return (
    <HeaderContainer>
      <NavLink to={'/'}><LogoImage src={Logo} alt='JAM Logo' /></NavLink>
      <SearchBar>
        <SearchInput
          type='text'
          value={searchKey} 
          onChange={e => {
            setSearchKey(e.target.value)
          }}
          placeholder='Search Musics'
        />
        <SearchButton onClick={handleClick} src="https://www.transparentpng.com/thumb/search-button/XwzcnM-search-icon-square-find-button-hd-image.png" alt="Search" />
      </SearchBar>
      <ButtonContainer>
        {currentLogin ?
          <AuthButton onClick={handleLogout}>Logout</AuthButton>
          :
          <>
            <AuthButton onClick={handleLogin}>Login</AuthButton>
            <AuthButton onClick={handleSignup}>Signup</AuthButton>
          </>
        }
      </ButtonContainer>
    </HeaderContainer>
  )
}
export default Header

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #cdcdcd;
  padding: 1rem;
`
const LogoImage = styled.img`
  height: 40px;
`
const SearchBar = styled.div`
  display: flex;
  width: 50%;
  border: cdcdcd;
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  padding: 4px 8px;
`
const SearchInput = styled.input`
  width: 100%;
  min-width: 100px;
  border: none;
  outline: none;
  font-size: 16px;
`
const SearchButton = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 8px;
`
const ButtonContainer = styled.div`
  display: flex;
`
const AuthButton = styled.div`
  background-color: initial;
  border: none;
  font-size: 20px;
  margin: 0.5rem;
  cursor: pointer;
`