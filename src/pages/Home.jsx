import React from 'react';
import Carousel from '../components/Carousel';
import Main from '../components/Main';
import requests from '../services/ApiTMDB';

const Home = () => {

  return (
    <>
      <Main />
      <Carousel title='Upcoming' fetchApi={ requests.requestUpcoming } />
      <Carousel title='Popular' fetchApi={ requests.requestPopular } />
      <Carousel title='Top RAted' fetchApi={ requests.requestTopRated } />
      <Carousel title='Trending' fetchApi={ requests.requestTrending } />
      <Carousel title='Horror' fetchApi={ requests.requestHorror } />
      <Carousel title='Comedy' fetchApi={ requests.requestComedy } />
      <Carousel title='Action' fetchApi={ requests.requestAction } />
      <Carousel title='Drama' fetchApi={ requests.requestDrama } />
    </>
  )
}

export default Home;
