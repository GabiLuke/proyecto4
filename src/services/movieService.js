const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const movieService = {
  getPopularMovies: async (page = 1) => {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
    );
    if (!response.ok) throw new Error("Error al obtener películas");
    return response.json();
  },

  searchMovies: async (query, page = 1) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${query}&page=${page}`
    );
    if (!response.ok) throw new Error("Error en la búsqueda");
    return response.json();
  },

  getMovieDetails: async (id) => {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`
    );
    if (!response.ok) throw new Error("Error al obtener detalles");
    return response.json();
  },
};
