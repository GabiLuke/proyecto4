import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export const MovieCard = (props) => {
  const { agregarFavorito, removerFavorito, esFavorita } =
    useContext(FavoritesContext);
  const movie = props.movie;
  const esFav = esFavorita(movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    esFav ? removerFavorito(movie.id) : agregarFavorito(movie);
  };

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
           {" "}
      <div className="movie-poster">
               {" "}
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/placeholder.png"
          }
          alt={movie.title}
          loading="lazy"
        />
               {" "}
        <button
          className={`favorite-btn ${esFav ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
                    {esFav ? "❤️" : "🤍"}       {" "}
        </button>
             {" "}
      </div>
           {" "}
      <div className="movie-info">
                <h3>{movie.title}</h3>       {" "}
        <div className="movie-meta">
                   {" "}
          <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>   
               {" "}
          <span className="year">{movie.release_date?.split("-")[0]}</span>     
           {" "}
        </div>
             {" "}
      </div>
         {" "}
    </Link>
  );
};
