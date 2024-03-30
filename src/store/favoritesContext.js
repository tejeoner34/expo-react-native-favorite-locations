import { createContext, useEffect } from 'react';
import { useState } from 'react';

export const FavoritesContext = createContext({
  storeFavorite: (favorite) => {},
  removeFavorite: (id) => {},
  fetchFavorites: async () => {},
  favorites: [],
});

export function FavoritesContextProvider({ children, service }) {
  const [favorites, setFavorites] = useState([]);

  async function storeFavorite(favorite) {
    await service.insertLocation(favorite);
    setFavorites((prevFavorites) => [...prevFavorites, favorite]);
  }

  function removeFavorite(id) {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== id));
  }

  async function fetchFavorites() {
    const favorites = await service.fetchFavorites();
    console.log('favorites', favorites);
    setFavorites(favorites);
  }

  const value = {
    favorites,
    storeFavorite,
    removeFavorite,
    fetchFavorites,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
