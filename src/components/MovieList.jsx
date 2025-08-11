import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import WishList from './WishList';
// import SearchMovie from './SearchMovie';

const MovieList = () => {
  const [mySearch, setMySearch] = useState('');
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [moviesList, setMoviesList] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState('');

  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const getMovies = () => {
    const url = searchSubmitted.trim()
      ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
          searchSubmitted
        )}&page=${page}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMoviesList((prevMovies) => {
          const newMovies = json.results.filter(
            (movie) =>
              !prevMovies.some((prevMovie) => prevMovie.id === movie.id)
          );
          console.log(newMovies.title);
          return [...prevMovies, ...newMovies];
        });
      });
  };

  useEffect(() => {
    getMovies();
  }, [page, searchSubmitted]);

  const handleMovieItem = (id) => {
    navigate(`/movie/${id}`);
  };

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMoviesList([]); // Reset movies list when searching
    setPage(1); // Reset page to 1
    setSearchSubmitted(mySearch);
  };

  return (
    <div className="list-container">
      <div>
        <NavBar />
      </div>

      <h1 className="list-title">Popular Movies</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setMySearch(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
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
