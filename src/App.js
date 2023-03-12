import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import { useState } from 'react';
import Header from './components/Header';
import { AppContextProvider } from './context';

function App() {
  const [searchKey, setSearchKey] = useState('')
  return (
    <AppContextProvider>
    <div className="App">
      <Header searchKey={searchKey} setSearchKey={setSearchKey} />
      <Routes>
        <Route path='/' element={<HomePage searchKey={searchKey} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>
    </AppContextProvider>
  );
}

export default App;
