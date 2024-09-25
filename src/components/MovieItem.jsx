import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import movieLoader from '../assets/movieLoader.gif';

const MovieListItem = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const getMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <img src={movieLoader} alt="Loading movie..." />;
  }

  return (
    <div className="list-container">
      <Navbar />
      <div className="movie-item-container">
        <img
          className="img-item"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie"
        />
        <div className="movie-info">
          <p className="movie-tagline">{movie.tagline}</p>
          <h1 className="movie-title">{movie.original_title}</h1>
          <p className="movie-desc">{movie.overview}</p>
          <p className="movie-desc">Release date: {movie.release_date}</p>
          <hr />
          <div className="genres-container">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genres-item">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
