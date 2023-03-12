import axios from 'axios'

const API_URL = `https://api-v2.hearthis.at/feed/?type=popular&page=${0}&count=100`

export const fetchMusicData = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

export const searchMusic = async ({searchKey, page, count=10}) => {
  const API_URL = `https://api-v2.hearthis.at/search?t=${searchKey}&page=${page}&count=${count}`
  const res = await axios.get(API_URL)
  return res.data
}

export const fetchMusicDataByGenre = async ({genre='other', page=0, count=20}) => {
  const API_URL = `https://api-v2.hearthis.at/categories/${genre}/?page=${page}&count=${count}`
  const res = await axios.get(API_URL)
  return res.data
}
