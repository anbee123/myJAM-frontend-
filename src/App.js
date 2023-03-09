import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home'
import LoginPage from './components/Login'
import { useEffect } from 'react';
import { testApi } from './apis/auth'

function App() {
  useEffect(() => {
    const funcAPI = async () => {
      try {
        const data = await testApi()
        console.log({data})
      } catch (err) {
        console.log(err.response.data)
      }
    }
    funcAPI()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
