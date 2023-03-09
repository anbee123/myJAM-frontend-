import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import { useEffect } from 'react';
import * as Auth from './apis/auth'

function App() {
  useEffect(() => {
    const testAPI = async () => {
      try {
        const res = await Auth.testApi()
        console.log({res})
      } catch (err) {
        console.log(err.response.data)
      }
    }
    testAPI()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
