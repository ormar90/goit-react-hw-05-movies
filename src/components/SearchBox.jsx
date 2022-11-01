import { useState } from "react";
import { NavLink, useSearchParams } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { searchMovies } from "services/API";
import { useEffect } from "react";

export const SearchBox = () => {
  const [movies, setMovies] = useState([])
  const [searchParam, setSearchParam] = useSearchParams();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      movie: '',
    }
  });
  const query = searchParam.get('search') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchMovies = async () => {
      try {
        const { results } = await searchMovies(query);
        setMovies(results);
        reset({ movie: '' });
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, [query, reset, searchParam])
  
  const onSubmit = data => {
    setSearchParam(data.movie !== '' ? { search: data.movie } : {});          
  }  

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('movie')} />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && query && (
        <ul>
            {movies.map(({ id, title }) => {
              return (
                <li key={id}>
                  <NavLink to={`${id}`}>{title}</NavLink>
                </li>
              );
            })}{' '}
        </ul>
      )}
    </>
  );
};
