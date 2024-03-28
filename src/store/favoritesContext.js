import { createContext } from 'react';
import { useState } from 'react';

export const FavoritesContext = createContext({
  storeFavorite: (favorite) => {},
  removeFavorite: (id) => {},
  favorites: [],
});

export function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function storeFavorite(favorite) {
    setFavorites((prevFavorites) => [...prevFavorites, favorite]);
  }

  function removeFavorite(id) {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== id));
  }

  const value = {
    favorites,
    storeFavorite,
    removeFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
