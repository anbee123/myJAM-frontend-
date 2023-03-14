import { useState } from 'react'
import * as Auth from '../apis/auth'
import { useNavigate } from "react-router-dom"
import { useAppContext } from '../context'

const Signup = () => {
  const { setUser } = useAppContext()
  const navigate = useNavigate()
  const [errorText, setErrorText] = useState()

  const handleSignup = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const username = e.target.username.value
    if (!email) {
      setErrorText('Email is required')
      return
    } else if (!password) {
      setErrorText('Password is required')
      return
    } else if (!username) {
      setErrorText('User Name is required')
      return
    }

    try {
      const newUser = await Auth.signup({username, email, password})
      if (!newUser.token) return
      console.log({newUser})
      setUser(newUser)
      navigate('/')
    } catch {
      return
    }
  }
  return (
    <div className='flex flex-col max-w-[350px] bg-neutral-200 border drop-shadow-2xl mt-12 mb-auto mx-auto pt-5 pb-7 px-6 rounded-sm border-solid border-black/20'>
      <h1 className='text-3xl font-bold my-6'>Signup</h1>
      <form className='flex flex-col items-start' onSubmit={handleSignup}>
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
          <label className='mt-0 mb-4 mx-0' htmlFor="email">
            Email
          </label>
          <input
            className='border text-xl p-2 rounded-md border-solid border-black/25 outline-none'
            type='email'
            name="email"
            placeholder="Email"
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
          Signup
        </button>
      </form>
    </div>
  )
}
export default Signup
