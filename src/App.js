import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/UserAuthContext';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className='w-full h-full bg-primary'>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
      
    
  )
}

export default App;
