import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '03c36c8f9fb27db2b71a5071437967b0',
};

export async function getTrendingMedia() {
  try {
    const { data } = await axios.get(`trending/movie/week`);
    const moviesList = data.results;
    return moviesList;
  } catch (error) {
    Notify.failure('Something went wrong... Please try again later...');
  }
}

export async function getTrendingMediaById(id) {
  try {
    const { data } = await axios.get(`movie/${id}`);
    return data;
  } catch (error) {
    Notify.failure(
      'Sorry, the movie is currently unavailable. Please try again later...'
    );
  }
}

export async function getGenre() {
  try {
    const { data } = await axios.get(`genre/movie/list`);
    return data;
  } catch (error) {
    Notify.failure('Sorry, list of genres is unavaiable at this moment...');
  }
}

export async function getMovieSearch(query) {
  try {
    const { data } = await axios.get('search/movie', {
      params: {
        query,
      },
    });
    return data.results;
  } catch (error) {
    Notify.failure('Sorry, there are no matches with this search...');
  }
}

export async function getMoviesActorsCast(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`, {});
    return data.cast;
  } catch (error) {
    Notify.failure('Sorry, there are no casts...');
  }
}

export async function getMoviesReview(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, {});
    return data.results;
  } catch (error) {
    Notify.failure('Sorry, there are no reviews...');
  }
}
