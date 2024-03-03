import logo from './logo.svg';
import './App.css';
import RegisterPage from './components/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login';
import Admin from './components/AdminPage';
import SignInPage from './components/SignIn';
import SignOut from './components/SignOut';
import SignOutPage from './components/SignOut';
import UserList from './components/AdminPage';
import UserListDetails from './components/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path='/' element={<Admin />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/signup' element={<SignInPage />} />
          <Route path='/signout' element={<SignOutPage />} />
          <Route path="/userlistPage/:username" element={<UserListDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
