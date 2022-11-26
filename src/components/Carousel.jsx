import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
        <div id={ 'slider' }>
          {
            movies.map((movie, index) => (
              <Movie movie={ movie } key={ index } />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Carousel;
