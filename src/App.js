import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Login";
import Account from './pages/Account';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/account' element={ <Account /> } />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
