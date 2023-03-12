import * as MusicApi from '../apis/music'
import { useEffect, useState } from 'react'
import MusicList from './MusicList'
import CategoryList from './CategoryList'
import { genreListData } from './CategoryList'
import { useAppContext } from '../context'

const Home = () => {
  const [ genre, setGenre ] = useState(genreListData[0].key)
  const { user, searchKey, musics, setMusics } = useAppContext()
  const filteredMusics = musics.filter(item => {
    if (!searchKey) return true
    return item && item.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
  })

  useEffect(() => {
    const testAPI = async () => {
      try {
        const res = await MusicApi.fetchMusicDataByGenre({genre})
        if (res.length > 0) setMusics(user? res : res.slice(0, 4))
        console.log({res})
      } catch (err) {
        console.log('error: ', {err})
      }
    }
    testAPI()
  }, [genre, setMusics, user])

  return (
    <div>
      <CategoryList setGenre={setGenre} />
      <MusicList musics={filteredMusics} />
    </div>
  )
}
export default Home