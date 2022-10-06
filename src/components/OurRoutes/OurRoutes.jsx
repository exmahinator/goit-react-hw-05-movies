import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from 'pages/Home';
import MovieItem from 'components/MovieItem';
import MovieReviews from 'components/MovieReviews';
import MovieCast from 'components/MovieCast';
import { MovieBackToLink } from 'ui';

const Movies = lazy(() => import('../../pages/Movies'));

const OurRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieItem />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Route>
      <Route
        path="*"
        element={
          <div>
            <h1>
              No available content with this address, please get back to Home
              page
            </h1>
            <MovieBackToLink to="/">Go back to Home page</MovieBackToLink>
          </div>
        }
      />
    </Routes>
  );
};

export default OurRoutes;
