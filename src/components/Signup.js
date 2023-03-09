import { useState } from 'react'

const Signup = () => {
  const [errorText, setErrorText] = useState()
  const handleLogin = (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    const email = e.target.email.value
    const password = e.target.password.value
    if (!email) {
      setErrorText('Email is required')
      return
    } else if (!password) {
      setErrorText('Password is required')
      return
    }
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input type='email' name="email" placeholder="Input email here" />
        </div>
        <div>
          <label htmlFor="password">Email</label>
          <input type='password' name="password" placeholder="Input password here" />
        </div>
        <div>
          {errorText}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Signup