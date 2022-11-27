import React from 'react';
import Carousel from '../components/Carousel';
import Main from '../components/Main';
import requests from '../services/ApiTMDB';

const Home = () => {

  return (
    <>
      <Main />
      <Carousel rowId='1' title='Upcoming' fetchApi={ requests.requestUpcoming } />
      <Carousel rowId='2' title='Popular' fetchApi={ requests.requestPopular } />
      <Carousel rowId='3' title='Top RAted' fetchApi={ requests.requestTopRated } />
      <Carousel rowId='4' title='Trending' fetchApi={ requests.requestTrending } />
      <Carousel rowId='5' title='Horror' fetchApi={ requests.requestHorror } />
      <Carousel rowId='6' title='Comedy' fetchApi={ requests.requestComedy } />
      <Carousel rowId='7' title='Action' fetchApi={ requests.requestAction } />
      <Carousel rowId='8' title='Drama' fetchApi={ requests.requestDrama } />
    </>
  )
}

export default Home;
