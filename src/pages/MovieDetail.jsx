import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movieService } from '../services/movieService';
import { FavoritesContext } from '../context/FavoritesContext';
import { Loader } from '../components/Loader';

export const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { agregarFavorito, removerFavorito, esFavorita } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await movieService.getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (!movie) return <div>Película no encontrada</div>;

  const esFav = esFavorita(movie.id);

  return (
    <div className="page movie-detail-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Volver
      </button>
      
      <div className="movie-detail">
        <div className="movie-poster-large">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        
        <div className="movie-content">
          <h1>{movie.title}</h1>
          <div className="movie-stats">
            <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>
            <span className="year">{movie.release_date?.split('-')[0]}</span>
            <span className="runtime">{movie.runtime} min</span>
          </div>
          
          <button 
            onClick={() => esFav ? removerFavorito(movie.id) : agregarFavorito(movie)}
            className={`favorite-btn-large ${esFav ? 'active' : ''}`}
          >
            {esFav ? '❤️ Eliminar de favoritos' : '🤍 Agregar a favoritos'}
          </button>
          
          <div className="genres">
            {movie.genres?.map(genre => (
              <span key={genre.id} className="genre-tag">{genre.name}</span>
            ))}
          </div>
          
          <h2>Sinopsis</h2>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};