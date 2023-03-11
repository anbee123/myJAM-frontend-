import { useState } from "react"
import styled from "styled-components"
import Logo from '../assets/logo.jpeg'

const Header = () => {
  const [searchKey, setSearchKey] = useState('')
  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt='JAM Logo' />
      <SearchBar>
        <SearchInput
          type='text'
          value={searchKey} 
          onChange={e => {
            setSearchKey(e.target.value)
          }}
        />
      </SearchBar>
      <div>
        <button>Login</button>
      </div>
    </HeaderContainer>
  )
}
export default Header

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #cdcdcd;
`
const LogoImage = styled.img`
  height: 40px;
`
const SearchBar = styled.div`
  width: 50%;
  border: cdcdcd;
  border-radius: 25%;
`
const SearchInput = styled.input`
  width: 100%;
`