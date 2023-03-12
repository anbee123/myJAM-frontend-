import { useState } from 'react'
import * as Auth from '../apis/auth'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const Login = () => {
  const navigate = useNavigate()

  const [errorText, setErrorText] = useState()
  const handleLogin = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e.target.username.value)
    console.log(e.target.password.value)
    const username = e.target.username.value
    const password = e.target.password.value
    if (!username) {
      setErrorText('User Name is required')
      return
    } else if (!password) {
      setErrorText('Password is required')
      return
    }

    try {
      const user = await Auth.login({username, password})
      console.log({user})
      navigate('/')
    } catch (err) {
      return
    }
  }
  return (
    <AuthContainer>
      <h1>Login</h1>
      <InputGroupContainer onSubmit={handleLogin}>
        <InputGroup>
          <label htmlFor="username">User Name</label>
          <InputField type='text' name="username" placeholder="User Name" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="password">Password</label>
          <InputField type='password' name="password" placeholder="Password" />
        </InputGroup>
        <div>
          {errorText}
        </div>
        <SubmitButton type="submit">Login</SubmitButton>
      </InputGroupContainer>
    </AuthContainer>
  )
}
export default Login

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 3rem auto auto;
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;
  font-size: 20px;
  input {
    font-size: 20px;
  }
  label {
    margin: 0 0 1rem 0;
  }
`
const InputField = styled.input`
  border: 1px solid rgb(17 17 17 / 30%);
  outline: none;
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 20px;
}
`
const InputGroupContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start
`
const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  border: none;
  background-color: #222;
  color: #fff;
  justify-content: center;
  margin-top: 1rem;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border-radius: 50px;
  width: 100%;
`