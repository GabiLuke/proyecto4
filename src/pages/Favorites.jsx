import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { MovieCard } from '../components/MovieCard';

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="page">
      <div className="container">
        <h1>Mis Favoritos</h1>
        
        {favorites.length === 0 ? (
          <div className="empty-state">
            <p>No tienes películas favoritas aún</p>
            <p>Explora y agrega tus películas favoritas ❤️</p>
          </div>
        ) : (
          <div className="movies-grid">
            {favorites.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};