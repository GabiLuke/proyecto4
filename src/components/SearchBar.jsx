import { useRef } from 'react';

export const SearchBar = ({ onSearch }) => {
  const searchInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value.trim();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Buscar películas..."
        className="search-input"
      />
      <button type="submit" className="search-btn">
        🔍 Buscar
      </button>
    </form>
  );
};