import { useState } from 'react';
import { movieService } from '../services/movieService';
import { SearchBar } from '../components/SearchBar';
import { MovieCard } from '../components/MovieCard';
import { Loader } from '../components/Loader';

export const Search = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setSearched(true);
    try {
      const data = await movieService.searchMovies(query);
      setMovies(data.results);
    } catch (error) {
      console.error(error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Buscar Películas</h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && <Loader />}
        
        {!loading && searched && movies.length === 0 && (
          <p className="no-results">No se encontraron resultados</p>
        )}
        
        {!loading && movies.length > 0 && (
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};