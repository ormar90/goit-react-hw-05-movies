import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import { AboutLinkWrapper, GoBackLink, GoBackLinkWrapper, Link } from './MovieDetails.styled';

const MovieDetails = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await getMovieDetails(movieId);

        setMovieDetails(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  const { poster_path, title, release_date, overview, genres } = movieDetails;

  return (
    <>
      <GoBackLinkWrapper>
        <GoBackLink to={location.state?.from ?? '/movies'}>Go Back</GoBackLink>
      </GoBackLinkWrapper>
      <img src={`${IMG_URL}${poster_path}`} alt="" width="300" />
      <div>
        <h1>{title}</h1>
        <p>{release_date}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres.map(genre => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </p>
      </div>
      <div>
        <p>Adittional information</p>
        <AboutLinkWrapper>
          <Link to="cast" name={movieDetails.id}>
            Cast
          </Link>
          <Link to="reviews" name={movieDetails.id}>
            Reviews
          </Link>
        </AboutLinkWrapper>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
