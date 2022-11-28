import React, { useEffect, useState, useContext } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import AuthContext from '../context/AuthContext';
import { db } from '../services/firebase';
import { updateDoc, doc, onSnapshot} from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(AuthContext);

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedItems);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${ user?.email }`)

  const deleteMovie = async (id) => {
    try {
      const result = movies.filter((movie) => movie.id !== id)
      await updateDoc(movieRef, {
        savedItems: result,
      })
    } catch (error) {
      console.log(error);
      toast(error.message.slice(10), {
        position: 'top-center',
        theme: 'dark',
        type: 'error',
      });
    }
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>Meus filmes favoritos</h2>
      <section className='relative flex items-center'>
        <MdChevronLeft onClick={ slideLeft } className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10' size={ 40 } />
        <div id={ 'slider' } className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {
            movies?.map((movie) => (
              <div key={movie?.title} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movie?.img}`} alt={ movie?.title } />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                  <p className='white-space-normal text-sm md:text-lg font-bold flex justify-center items-center h-full text-center'>
                    { movie?.title }
                  </p>

                  <p onClick={ () => deleteMovie(movie.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>

                </div>
              </div>
            ))
          }
        </div>
        <MdChevronRight onClick={ slideRight } className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10' size={ 40 } />
      </section>
      <ToastContainer />
    </>
  )
}

export default SavedMovies