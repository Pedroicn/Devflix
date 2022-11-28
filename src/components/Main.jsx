import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../services/ApiTMDB';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)]
  const releaseDate = movie?.release_date;
  const reverseDate = releaseDate?.split('-').reverse().join('-')

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await axios.get(requests.requestPopular)
      setMovies(response.data.results)
    }
    fetchPopularMovies();
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  }

  return (
    <main className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black' />
        <img className='w-full h-full bg-cover bg-no-repeat bg-center' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={ movie?.title } />
        <section className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Assitir</button>
            <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>Assitir depois</button>
          </div>
          <p>Data de lançamento: { reverseDate }</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-xl text-blue-200'>{truncateString(movie?.overview, 200)}</p>
        </section>
      </div>
    </main>
  )
}

export default Main;
