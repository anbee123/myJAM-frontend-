import * as Auth from '../apis/auth'

const Home = () => {
  const currentUser = Auth.getCurrentUser()
  console.log({currentUser})
  return (
    !currentUser ?
    <div>
      this is Home Page
      <h1>Please login</h1>
    </div>
    :
    <div>
      this is Home Page
      Logged in
    </div>
  )
}
export default Home