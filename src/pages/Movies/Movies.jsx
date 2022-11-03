import SearchBox from 'components/SearchBox/SearchBox';
import { useParams, NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { searchMovies } from 'services/API';
import { useEffect } from 'react';

const Movies = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams(); 
  const query = searchParam.get('search') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchMovies = async () => {
      try {
        const { results } = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [query, searchParam]);

  const onSubmit = e => {
    console.log(e);
    setSearchParam(e.movie !== '' ? { search: e.movie } : {});
  };  

  return (
    <>
      {!movieId && <SearchBox onSubmit={onSubmit} />}
      {movies.length > 0 && query && (
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <NavLink to={`${id}`} state={{from: location}}>{title}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;