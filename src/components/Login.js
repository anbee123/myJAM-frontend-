const Login = () => {
  const handleLogin = () => {
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
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login