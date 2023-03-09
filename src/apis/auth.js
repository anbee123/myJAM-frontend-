import axios from 'axios';

const API_URL = 'http://localhost:8000/api'

export const testApi = async () => {
  const res = await axios.get(API_URL + '/test')
  return res.data
}

export const signup = async ({email, username, password}) => {
  const res = await axios.post(API_URL + '/signup', {email, username, password})
  return res.data
}
