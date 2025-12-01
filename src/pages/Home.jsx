import { movieService } from '../services/movieService';
import { usePeliculas } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { Loader } from '../components/Loader';

export const Home = () => {
  const { peliculas, cargando, error } = usePeliculas(movieService.getPopularMovies);

  if (cargando) return <Loader />;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="page">
      <div className="container">
        <h1>Películas Populares</h1>
        <div className="movies-grid">
          {peliculas.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};