import axios from 'axios';

const API_URL = 'http://localhost:8000/api'

export const testApi = async () => {
  const res = await axios.get(API_URL + '/test')
  return res.data
}

export const signup = async ({username, email, password}) => {
  const res = await axios.post(API_URL + '/auth/signup', {username, email, password})
  return res.data
}

export const login = async ({username, password}) => {
  const res = await axios.post(API_URL + '/auth/login', {username, password})
  if (res.data.token) {
    localStorage.setItem("user", JSON.stringify(res.data))
  }
  return res.data
}
