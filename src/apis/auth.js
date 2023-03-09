import axios from 'axios';

const API_URL = 'http://localhost:8000/api'

export const testApi = async () => {
  const res = await axios.get(API_URL + '/test')
  return res.data
}
