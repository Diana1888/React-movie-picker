import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

const WishList = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return <h2>Your wishlist is empty</h2>;
  }

  return (
    <>
      <h1 className="list-title">My Wishlist</h1>
      <div className="wishlist-container">
        {wishlist.map((movie) => (
          <div key={movie.id} className="wishlist-item">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="wishlist-movie-title">{movie.title}</h3>
            <button
              className="btn-form active"
              onClick={() => removeFromWishlist(movie.id)}
            >
              Remove X
            </button>
          </div>
        ))}
      </div>
      {/* <button className="btn-form active navlink" onClick={() => navigate(-1)}>
        Back
      </button> */}
    </>
  );
};

export default WishList;
