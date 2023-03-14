import axios from 'axios';

const API_URL = 'https://myjam.herokuapp.com/api/'

export const testApi = async () => {
  const res = await axios.get(API_URL + '/auth/test')
  return res.data
}

export const signup = async ({username, email, password}) => {
  const res = await axios.post(API_URL + '/auth/signup', {username, email, password})
  if (res.data.token) localStorage.setItem("user", JSON.stringify(res.data))
  return res.data
}

export const login = async ({username, password}) => {
  const res = await axios.post(API_URL + '/auth/login', {username, password})
  if (res.data.token) {
    localStorage.setItem("user", JSON.stringify(res.data))
  }
  return res.data
}

export const logout = () => {
  localStorage.removeItem("user")
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
