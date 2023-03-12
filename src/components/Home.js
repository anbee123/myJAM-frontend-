import * as Auth from '../apis/auth'
import * as MusicApi from '../apis/music'
import { useEffect, useState } from 'react'
import MusicList from './MusicList'
import CategoryList from './CategoryList'

const Home = ({searchKey}) => {
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
      <CategoryList />
      <MusicList musics={musics} />
    </div>
  )
}
export default Home