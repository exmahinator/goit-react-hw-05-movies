import React, { useEffect, useState } from 'react';
import { getTrendingMedia } from 'api/AxiosRequests';
import { useLocation } from 'react-router-dom';
import {
  MovieSearchSection,
  MovieSearchList,
  MovieSearchLink,
  MovieSearchItem,
} from 'ui';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  async function getTrendingMovies() {
    const foundMovies = await getTrendingMedia();
    setMovies(foundMovies);
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <MovieSearchSection>
      <h1>Trending today:</h1>
      <MovieSearchList>
        {movies.map(({ id, title, name }) => {
          return (
            <MovieSearchItem key={id}>
              <MovieSearchLink to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </MovieSearchLink>
            </MovieSearchItem>
          );
        })}
      </MovieSearchList>
    </MovieSearchSection>
  );
};

export default HomePage;
