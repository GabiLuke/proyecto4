import { useState, useEffect } from "react";

export const usePeliculas = (funcionDeCarga, dep = null) => {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const cargarPeliculas = async () => {
      try {
        setCargando(true);
        setError(null);
        const data = await funcionDeCarga();

        if (isMounted) {
          setPeliculas(data.results || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setCargando(false);
        }
      }
    };

    cargarPeliculas();

    return () => {
      isMounted = false;
    };
  }, [dep]);

  return { peliculas, cargando, error };
};
