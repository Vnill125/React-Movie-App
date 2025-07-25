import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
    const {favorite} = useMovieContext()

    if (favorite) {
        return(
        <div className="movies-grid">
          {favorite
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>)
    }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorite;
