import { Outlet } from 'react-router-dom';
import { MovieSearchSection, MovieSearchForm } from 'ui';
const MoviesPage = () => {
  return (
    <MovieSearchSection>
      <MovieSearchForm>
        <input type="text" placeholder="Please enter some movie" />
        <button type="submit">Search!</button>
      </MovieSearchForm>
      <Outlet />
    </MovieSearchSection>
  );
};

export default MoviesPage;
