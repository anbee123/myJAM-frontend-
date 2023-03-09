import * as Auth from '../apis/auth'
import * as MusicApi from '../apis/music'
import { useEffect } from 'react'

const Home = () => {
  const currentUser = Auth.getCurrentUser()
  console.log({currentUser})

  useEffect(() => {
    const testAPI = async () => {
      try {
        const res = await MusicApi.fetchMusicData()
        console.log({res})
      } catch (err) {
        console.log('error: ', err.response.data)
      }
    }
    testAPI()
  }, [])

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