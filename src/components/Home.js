import * as Auth from '../apis/auth'
import * as MusicApi from '../apis/music'
import { useEffect, useState } from 'react'
import MusicList from './MusicList'
import CategoryList from './CategoryList'
import { genreListData } from './CategoryList'

const Home = ({searchKey}) => {
  const [genre, setGenre] = useState(genreListData[0].key)
  const [musics, setMusics] = useState([])

  useEffect(() => {
    const testAPI = async () => {
      try {
        const res = await MusicApi.fetchMusicDataByGenre({genre})
        if (res.length > 0) setMusics(res)
        console.log({res})
      } catch (err) {
        console.log('error: ', err.response.data)
      }
    }
    testAPI()
  }, [genre])

  return (
    <div>
      <CategoryList setGenre={setGenre} />
      <MusicList musics={musics} />
    </div>
  )
}
export default Home