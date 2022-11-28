import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/')
    } catch (error) {
      toast(error.message.slice(10), {
        position: 'top-center',
        theme: 'dark',
        type: 'error',
      })
    }
    
  }
  return (
    <main className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/f9c4098e-22e1-4b5c-b668-47519ee56dc7/BR-pt-20221121-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="/"
      />
      <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <section className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <form onSubmit={ handleSubmit } className='w-full flex flex-col py-4'>
              <input
                className='p-3 my-2 bg-gray-700 rounded'
                type="email"
                placeholder='Email'
                autoComplete='email'
                value={ email }
                onChange={ ({ target }) => setEmail(target.value) }
              />
              <input
                className='p-3 my-2 bg-gray-700 rounded'
                type="password"
                placeholder='Senha'
                value={ password }
                onChange={ ({ target }) => setPassword(target.value)}
              />
              <button
                className='bg-blue-600 py-3 my-6 rounded font-bold'
                type='submit'
              >
                Entrar
              </button>
              <div className='flex justify-between items-center text-gray-400'>
                <p><input className='mr-2' type="checkbox" />Lembre-me</p>
                <p>Ajuda?</p>
              </div>
              <p className='py-8'><span className='text-gray-400'>Ainda não é cadastrado?</span> <Link to='/signup'>Cadastrar</Link> </p>
            </form>
          </section>

        </div>
      </div>
      <ToastContainer />
    </main>
  )
}

export default Login;
