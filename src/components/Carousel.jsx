import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Carousel = ({ title, fetchApi }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await axios.get(fetchApi);
      setMovies(response.data.results);
    }
    fetchPopularMovies();
  }, [fetchApi]);
  console.log(movies)
  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{ title }</h2>
      <section className='realtive flex items-center'>
        <div id={ 'slider' }>
          {
            movies.map((movie, index) => (
              <div key={ index } className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={ movie?.title } />
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Carousel;
