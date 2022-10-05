import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieSearch } from 'api/AxiosRequests';
import MovieSearch from 'components/MovieSearch';
import {
  MovieSearchList,
  MovieSearchItem,
  MovieSearchLink,
  MovieSearchSection,
} from 'ui';

const MoviesPage = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getMovieBySearch() {
      const data = await getMovieSearch(query);
      setMovie(data);
    }

    getMovieBySearch();
  }, [query]);

  const handleSubmit = result => {
    setSearchParams(result !== '' ? { query: result } : {});
  };

  if (!movie) return;

  return (
    <MovieSearchSection>
      <MovieSearch onSubmit={handleSubmit} />
      <MovieSearchList>
        {movie.map(({ id, title, name }) => {
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

export default MoviesPage;
