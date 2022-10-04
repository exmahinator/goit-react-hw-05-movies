import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMedia } from 'api/AxiosRequests';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  async function getTrendingMovies() {
    const foundMovies = await getTrendingMedia();
    setMovies(foundMovies);
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  console.log(movies);
  console.log(movies[0]);

  return (
    <ul>
      {movies.map(({ id, title, name }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HomePage;
