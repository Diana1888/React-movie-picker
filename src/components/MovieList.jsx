import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

const MovieList = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        setMoviesList((prevMovies) => {
          const newMovies = json.results.filter(
            (movie) =>
              !prevMovies.some((prevMovie) => prevMovie.id === movie.id)
          );
          return [...prevMovies, ...newMovies];
        });
      });
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const handleMovieItem = (id) => {
    navigate(`/movie/${id}`);
  };

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="list-container">
      <Navbar />
      <h1 className="list-title">Popular Movies</h1>
      <div className="movie-list">
        {moviesList.map((movie, index) => (
          <div
            key={index}
            className="movie-item"
            onClick={() => handleMovieItem(movie.id)}
          >
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie"
            />
          </div>
        ))}
      </div>
      <button className="more-btn" onClick={loadMoreMovies}>
        More Movies
      </button>
    </div>
  );
};

export default MovieList;
