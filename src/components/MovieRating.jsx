const MovieRating = ({ rating }) => {
  const getIcon = () => {
    if (rating >= 7) return '🍿';
    if (rating >= 5) return '🍅';
    return '👎';
  };

  return (
    <div className="movie-rating">
      <span className="icon">{getIcon()}</span>
      <span className="rating-text">{Math.round(rating * 10)}%</span>
    </div>
  );
};

export default MovieRating;
