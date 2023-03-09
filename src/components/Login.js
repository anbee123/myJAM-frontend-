import { useState } from 'react'
import * as Auth from '../apis/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [errorText, setErrorText] = useState()
  const handleLogin = async (e) => {
    e.preventDefault()
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">User Name</label>
          <input type='text' name="username" placeholder="User Name" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type='password' name="password" placeholder="Password" />
        </div>
        <div>
          {errorText}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login