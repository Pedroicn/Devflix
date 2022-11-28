import React from 'react';
import Carousel from '../components/Carousel';
import Main from '../components/Main';
import requests from '../services/ApiTMDB';

const Home = () => {

  return (
    <>
      <Main />
      <Carousel rowId='1' title='Vem por aí' fetchApi={ requests.requestUpcoming } />
      <Carousel rowId='2' title='Popular' fetchApi={ requests.requestPopular } />
      <Carousel rowId='3' title='Melhor avaliados' fetchApi={ requests.requestTopRated } />
      <Carousel rowId='4' title='Tendência' fetchApi={ requests.requestTrending } />
      <Carousel rowId='5' title='Terror' fetchApi={ requests.requestHorror } />
      <Carousel rowId='6' title='Comedia' fetchApi={ requests.requestComedy } />
      <Carousel rowId='7' title='Ação' fetchApi={ requests.requestAction } />
      <Carousel rowId='8' title='Drama' fetchApi={ requests.requestDrama } />
    </>
  )
}

export default Home;
