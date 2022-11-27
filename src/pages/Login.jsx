import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
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
            <form className='w-full flex flex-col py-4'>
              <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
              <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Senha'  />
              <button className='bg-blue-600 py-3 my-6 rounded font-bold' type='submit'>Entrar</button>
              <div className='flex justify-between items-center text-gray-400'>
                <p><input className='mr-2' type="checkbox" />Lembre-me</p>
                <p>Ajuda?</p>
              </div>
              <p className='py-8'><span className='text-gray-400'>Ainda não é cadastrado?</span> <Link to='/signup'>Cadastrar</Link> </p>
            </form>
          </section>

        </div>
      </div>
    </main>
  )
}

export default Login;
