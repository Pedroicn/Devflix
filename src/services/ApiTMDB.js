const key = process.env.REACT_APP_TMDB_API_KEY

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR&page=1`,
  requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=comedy&page=1&include_adult=false`,
  requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=action&page=1&include_adult=false`,
  requestDrama: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=drama&page=1&include_adult=false`
};

export default requests;
