import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMediaById } from 'api/AxiosRequests';
import { useLocation } from 'react-router-dom';
import {
  MovieSearchSection,
  MovieContainer,
  MovieSubContainer,
  MovieBackToLink,
  MovieInfo,
  AdditionalInfoList,
  AdditionalInfoLink,
  AdditionalInfoItem,
} from 'ui';

const MovieItem = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function getMovieById() {
      const data = await getTrendingMediaById(movieId);
      setMovie(data);
    }

    getMovieById();
  }, [movieId]);

  if (!movie) return;

  const {
    poster_path,
    overview,
    vote_average,
    title,
    name,
    genres,
    release_date,
  } = movie;
  const userScore = vote_average * 10;

  const alternativeImage =
    'https://www.drupal.org/files/project-images/broken-image.jpg';
  const existingImg = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <MovieSearchSection>
      <MovieBackToLink to={location.state?.from ?? '/'}>
        Go back
      </MovieBackToLink>
      {(name || title) && (
        <MovieContainer>
          <MovieSubContainer>
            <img
              src={poster_path ? existingImg : alternativeImage}
              alt={`${title || name} poster`}
              width={300}
            />
          </MovieSubContainer>
          <MovieSubContainer>
            <h2>
              {title || name} ({release_date.slice(0, 4)})
            </h2>
            <p>{Math.floor(userScore)}%</p>
            <div>
              <MovieInfo>Overwiew</MovieInfo>
              <p>{overview}</p>
            </div>
            <div>
              <MovieInfo>Genres</MovieInfo>
              {/* <ul>
                {genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </ul> */}
              <p>{genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </MovieSubContainer>
        </MovieContainer>
      )}
      {(name || title) && (
        <div>
          <MovieInfo>Additional information</MovieInfo>
          <AdditionalInfoList>
            <AdditionalInfoItem>
              <AdditionalInfoLink
                to="cast"
                state={{ from: location.state?.from }}
              >
                Cast
              </AdditionalInfoLink>
            </AdditionalInfoItem>
            <AdditionalInfoItem>
              <AdditionalInfoLink
                to="reviews"
                state={{ from: location.state?.from }}
              >
                Reviews
              </AdditionalInfoLink>
            </AdditionalInfoItem>
          </AdditionalInfoList>
        </div>
      )}
      <Outlet />
    </MovieSearchSection>
  );
};

export default MovieItem;
