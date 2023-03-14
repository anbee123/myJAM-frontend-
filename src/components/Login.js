import { useState } from 'react'
import * as Auth from '../apis/auth'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context'

const Login = () => {
  const navigate = useNavigate()
  const { setUser } = useAppContext()

  const [errorText, setErrorText] = useState()
  const handleLogin = async (e) => {
    e.preventDefault()
    e.stopPropagation()
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
      if (!user) return
      console.log({user})
      setUser(user)
      navigate('/')
    } catch (err) {
      return
    }
  }
  return (
    <div className='flex flex-col max-w-[350px] bg-neutral-200 border drop-shadow-2xl mt-12 mb-auto mx-auto pt-5 pb-7 px-6 rounded-sm border-solid border-black/20'>
      <h1>Login</h1>
      <form className='flex flex-col items-start' onSubmit={handleLogin}>
        <div className='flex flex-col w-full text-left text-xl mb-4'>
          <label className='mt-0 mb-4 mx-0' htmlFor="username">
            User Name
          </label>
          <input
            className='border text-xl p-2 rounded-md border-solid border-black/25 outline-none'
            type='text'
            name="username"
            placeholder="User Name"
          />
        </div>
        <div className='flex flex-col w-full text-left text-xl mb-4'>
          <label className='mt-0 mb-4 mx-0' htmlFor="password">
            Password
          </label>
          <input
            className='border text-xl p-2 rounded-md border-solid border-black/25 outline-none'
            type='password'
            name="password"
            placeholder="Password"
          />
        </div>
        <div className='flex flex-col w-full text-left text-xl mb-4'>
          {errorText}
        </div>
        <button
          className='flex flex-row bg-neutral-800 text-white justify-center text-base font-semibold cursor-pointer box-border text-center w-full mt-4 px-5 py-3 rounded-3xl border-none'
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}
export default Login
