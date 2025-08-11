import { useWishlist } from '../context/WishlistContext';

const WishList = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <h2>Your wishlist is empty</h2>;
  }

  return (
    <div>
      <h1>My Wishlist</h1>
      <div className="wishlist-container">
        {wishlist.map((movie) => (
          <div key={movie.id} className="wishlist-item">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
            <button onClick={() => removeFromWishlist(movie.id)}>
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
