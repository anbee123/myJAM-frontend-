import * as Auth from '../apis/auth'
import * as MusicApi from '../apis/music'
import { useEffect, useState } from 'react'
import MusicList from './MusicList'

const Home = () => {
  const currentUser = Auth.getCurrentUser()
  const [musics, setMusics] = useState([])
  console.log({currentUser})

  useEffect(() => {
    const testAPI = async () => {
      try {
        const res = await MusicApi.fetchMusicData()
        if (res.length > 0) setMusics(res)
        console.log({res})
      } catch (err) {
        console.log('error: ', err.response.data)
      }
    }
    testAPI()
  }, [])

  return (
    <div>
      this is Home Page
      Logged in
      <MusicList musics={musics} />
    </div>
  )
}
export default Home