import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { getTrending } from 'services/API';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await getTrending();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error.message);
      } 
    }
    fetchMovies();
  }, [])


  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;