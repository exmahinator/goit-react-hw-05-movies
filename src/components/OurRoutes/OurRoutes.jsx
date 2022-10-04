import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import Movies from 'pages/Movies';
import MovieItem from 'components/MovieItem';
import MovieReviews from 'components/MovieReviews';
import MovieCast from 'components/MovieCast';

const OurRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieItem />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Route>
      <Route path="*" element={<div>!!!ERROR MESSAGE!!!</div>} />
    </Routes>
  );
};

export default OurRoutes;
