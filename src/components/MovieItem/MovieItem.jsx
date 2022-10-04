import { Link, Outlet } from 'react-router-dom';
const MovieItem = () => {
  return (
    <section>
      <Link to="/">Go back</Link>
      <div>
        <div>
          <img src="someSRC" alt="SomeALT" width={300} height={300} />
        </div>
        <div>
          <h2>Movie</h2>
          <p>User score</p>
          <div>
            <p>Overwiew</p>
            <p>Some overwiew</p>
          </div>
          <div>
            <p>Genres</p>
            <ul>
              <li>Some genre</li>
              <li>Some genre</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};

export default MovieItem;
