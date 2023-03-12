import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import Header from './components/Header';
import { AppContextProvider } from './context';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <AppContextProvider>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/item/:itemId' element={<ItemDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>
    </AppContextProvider>
  );
}

export default App;
