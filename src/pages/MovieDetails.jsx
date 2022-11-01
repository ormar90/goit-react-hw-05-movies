import { useState, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { getMovieDetails } from "services/API";


export const MovieDetails = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result  = await getMovieDetails(movieId);
        
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
      <div>
        <NavLink to={location.state?.from ?? "/"}>Go Back</NavLink>
      </div>
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
        <NavLink to="cast" name={movieId}>
          Cast
        </NavLink>
        <NavLink to="reviews" name={movieId}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
