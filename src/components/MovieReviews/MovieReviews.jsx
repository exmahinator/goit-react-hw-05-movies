import { getMoviesReview } from 'api/AxiosRequests';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieReviews = () => {
  const { movieId } = useParams();

  const [review, setReview] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function getMovieById() {
      const data = await getMoviesReview(movieId);
      setReview(data);
    }

    getMovieById();
  }, [movieId]);

  if (!review) return;

  return (
    <ul>
      {review.length > 0 ? (
        review.map(({ author, content }) => {
          return (
            <li key={author}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <li>There are no reviews currently...</li>
      )}
    </ul>
  );
};

export default MovieReviews;
