import { useState } from "react"
import styled from "styled-components"
import Logo from '../assets/logo.jpeg'

const Header = ({searchKey, setSearchKey}) => {
  const handleClick = () => {
    console.log({searchKey})
  }
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
        <SearchButton onClick={handleClick} src="https://www.transparentpng.com/thumb/search-button/XwzcnM-search-icon-square-find-button-hd-image.png" alt="Search" />
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
  &:focus-visible {
    border: none;
  }
`
const SearchButton = styled.img`
  width: 30px;
  margin-left: 8px;
`