import axios from 'axios'

const API_URL = `https://api-v2.hearthis.at/feed/?type=popular&page=${0}&count=20`

export const fetchMusicData = async () => {
  const res = await axios.get(API_URL)
  return res.data
}
