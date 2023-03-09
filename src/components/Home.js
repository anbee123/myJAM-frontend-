import * as Auth from '../apis/auth'

const Home = () => {
  const currentUser = Auth.getCurrentUser()
  console.log({currentUser})
  return (
    <div>
      this is Home Page
    </div>
  )
}
export default Home