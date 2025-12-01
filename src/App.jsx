import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { MovieDetail } from './pages/MovieDetail';
import { Favorites } from './pages/Favorites';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;