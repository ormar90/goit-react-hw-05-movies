// import { MovieDetails } from 'pages/MovieDetails';
import { SearchBox } from 'components/SearchBox';
import { Outlet, useParams } from 'react-router-dom';

export const Movies = () => {
  const { movieId } = useParams();

  return (
    <>
      {!movieId && <SearchBox />}
      {/* {movieId && <MovieDetails />} */}
      <Outlet />
    </>
  );
};
