import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');

    } catch (error) {
      toast(error.message.slice(10), {
        position: 'top-center',
        theme: 'dark',
        type: 'error',
      })
    }
  }
  return (
    <>
      <header className='flex items-center  justify-between p-4 z-[100] w-full absolute'>
        <Link to='/'>
          <h1 className='text-blue-600 text-4xl font-bold cursor-pointer'>DEVFLIX</h1>
        </Link>
        {
          user?.email ? (
            <div>
              <Link to='/account'>
                <button className='text-white pr-4 text-xl'>Minha Conta</button>
              </Link>
            
                <button onClick={ handleLogout } className='bg-blue-600 px-6 py-2 rounded cursor-pointer text-white text-xl'>Sair</button>

            </div>
          ) : (
            <div>
              <Link to='/login'>
                <button className='text-white pr-4 text-xl'>Entrar</button>
              </Link>
              <Link to='/signup'>
                <button className='bg-blue-600 px-6 py-2 rounded cursor-pointer text-white text-xl'>Cadastrar</button>
              </Link>
            </div>
          )
        }
      </header>
      <ToastContainer />
    </>
  )
}

export default Header;
