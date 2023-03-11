import styled from "styled-components"
import Logo from '../assets/logo.jpeg'

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt='JAM Logo' />
      <h1>This is Header</h1>
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
`
const LogoImage = styled.img`
  height: 40px;
`