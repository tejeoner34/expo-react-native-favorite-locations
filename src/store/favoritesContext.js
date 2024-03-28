import { createContext } from 'react';
import { useState } from 'react';
import { Favorite } from '../../models/favorite';

const favoritesList = [
  new Favorite('image1.jpg', 'Golden Gate Bridge', 'San Francisco, CA'),
  new Favorite('image2.jpg', 'Empire State Building', 'New York City, NY'),
  new Favorite('image3.jpg', 'The Louvre Museum', 'Paris, France'),
  new Favorite('image4.jpg', 'The Great Wall of China', 'Beijing, China'),
  new Favorite('image5.jpg', 'The Colosseum', 'Rome, Italy'),
];

export const FavoritesContext = createContext({
  storeFavorite: (favorite) => {},
  removeFavorite: (id) => {},
  favorites: [],
});

export function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState(favoritesList);

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
