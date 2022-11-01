import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '248eab561af730ae2789760eff8bc947';

const getTrending = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=1`
  );
  return data;
};

const searchMovies = async query => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
};

const getMovieDetails = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
const getMovieCredits = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

const getMovieRewievs = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}//reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieRewievs,
};
