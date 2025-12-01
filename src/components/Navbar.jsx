import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

export const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">🎬 MovieApp</Link>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/search">Buscar</Link></li>
          <li>
            <Link to="/favorites">
              Favoritos {favorites.length > 0 && `(${favorites.length})`}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};