import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [misPeliculasFav, setMisPeliculasFav] = useState(() => {
    const saved = localStorage.getItem("mis_pelis_favoritas");
    return saved ? JSON.parse(saved) : [];
  });

  const [cargandoFavoritas, setCargandoFavoritas] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(
        "mis_pelis_favoritas",
        JSON.stringify(misPeliculasFav)
      );
    } catch (error) {
      console.error("Error al guardar favoritos en storage:", error);
    }
  }, [misPeliculasFav]);

  const agregarFavorito = (pelicula) => {
    setMisPeliculasFav((prev) => {
      const existe = prev.find((fav) => fav.id === pelicula.id);
      if (existe) {
        return prev;
      }
      return [...prev, pelicula];
    });
  };

  const removerFavorito = (peliculaId) => {
    setMisPeliculasFav((prev) => prev.filter((fav) => fav.id !== peliculaId));
  };

  const esFavorita = (idPelicu) => {
    return misPeliculasFav.some((fav) => fav.id === idPelicu);
  };

  const value = {
    favorites: misPeliculasFav,
    agregarFavorito,
    removerFavorito,
    esFavorita,
    cargandoFavoritas,
  };

  return (
    <FavoritesContext.Provider value={value}>
            {children}{" "}
    </FavoritesContext.Provider>
  );
};
