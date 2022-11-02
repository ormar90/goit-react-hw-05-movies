import SearchBox from 'components/SearchBox';
import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const Movies = () => {
  const { movieId } = useParams();

  return (
    <>
      {!movieId && <SearchBox />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;