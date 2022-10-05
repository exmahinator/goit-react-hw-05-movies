import { useParams } from 'react-router-dom';
import { getMoviesActorsCast } from 'api/AxiosRequests';
import { useState, useEffect } from 'react';

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function getMovieById() {
      const data = await getMoviesActorsCast(movieId);
      setCast(data);
    }

    getMovieById();
  }, [movieId]);

  if (!cast) return;

  const alternativeImage =
    'https://www.drupal.org/files/project-images/broken-image.jpg';

  return (
    <ul>
      {cast.length > 0 ? (
        cast.map(({ original_name, character, profile_path }) => {
          const existingImg = `https://image.tmdb.org/t/p/w200${profile_path}`;
          return (
            <li key={original_name}>
              <img
                src={profile_path ? existingImg : alternativeImage}
                alt={`${original_name} poster`}
                width={200}
              />
              <p>{original_name}</p>
              <p>{character}</p>
            </li>
          );
        })
      ) : (
        <li>There are no casts currently...</li>
      )}
    </ul>
  );
};

export default MovieCast;
