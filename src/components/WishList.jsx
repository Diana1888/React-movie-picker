import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

const WishList = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();
  const handleMovieItem = (id) => {
    navigate(`/movie/${id}`);
  };

  if (wishlist.length === 0) {
    return <h2 className="wishlist-message">Your wishlist is empty</h2>;
  }

  return (
    <>
      <h1 className="list-title">My Wishlist</h1>
      <div className="wishlist-container">
        {wishlist.map((movie) => (
          <div
            key={movie.id}
            className="wishlist-item"
            onClick={() => handleMovieItem(movie.id)}
          >
            <img
              className="movie-poster wishlist-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="wishlist-movie-title">{movie.title}</h3>
            <button
              className="btn-form active"
              onClick={(e) => {
                e.stopPropagation();
                removeFromWishlist(movie.id);
              }}
            >
              Remove X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishList;
