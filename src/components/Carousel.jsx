import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie';

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
        <MdChevronLeft className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 w-10 h-10 cursor-pointer z-10' size={ 40 } />
        <div id={ 'slider' } className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {
            movies.map((movie, index) => (
              <Movie movie={ movie } key={ index } />
            ))
          }
        </div>
        <MdChevronRight className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 w-10 h-10 cursor-pointer z-10' />
      </section>
    </>
  )
}

export default Carousel;
