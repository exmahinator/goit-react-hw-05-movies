import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieSearch } from 'api/AxiosRequests';

import { MovieSearchForm, SearchField, SearchButton } from 'ui';

const MovieSearch = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handleQuery = event => {
    setMovieName(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (movieName.trim() === '') {
      Notify.warning('Please enter some movie name!');
      return;
    }

    const data = await getMovieSearch(movieName.toLowerCase());

    if (data.length === 0) {
      Notify.warning('There is no movie with this name! Look for another one!');
      return;
    }
    onSubmit(movieName.toLowerCase());
    setMovieName('');
  };

  return (
    <MovieSearchForm onSubmit={handleSubmit}>
      <SearchField
        type="text"
        placeholder="Please enter some movie"
        name="movieName"
        value={movieName}
        onChange={handleQuery}
      />
      <SearchButton type="submit">Search!</SearchButton>
    </MovieSearchForm>
  );
};

export default MovieSearch;
