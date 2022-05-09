import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/UserAuthContext';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import UsefulRes from './components/UsefulRes';
import BookingsInProgress from './components/BookingsInProgress';
import ResetPasword from './components/ResetPasword';

function App() {
  return (
    <div className='w-full h-full bg-primary'>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/reset" element={<ResetPasword />}/>
            <Route path="/home" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }/>
            <Route path="/usefulInfo" element={
              <PrivateRoute>
                <UsefulRes />
              </PrivateRoute>
            }/>
            <Route path="/progress" element={
              <PrivateRoute>
                <UsefulRes name={"Bookings In Progress"} />
              </PrivateRoute>
            }/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
      
    
  )
}

export default App;
