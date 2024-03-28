import { createContext } from 'react';
import { useState } from 'react';
import { Favorite } from '../../models/favorite';

const favoritesList = [
  new Favorite('image1.jpg', 'Golden Gate Bridge', {
    address: 'test addres jejejeejej',
  }),
  new Favorite('image2.jpg', 'Empire State Building', {
    address: 'test addres jejejeejej',
  }),
  new Favorite('image3.jpg', 'The Louvre Museum', {
    address: 'test addres jejejeejej',
  }),
  new Favorite('image4.jpg', 'The Great Wall of China', {
    address: 'test addres jejejeejej',
  }),
  new Favorite('image5.jpg', 'The Colosseum', {
    address: 'test addres jejejeejej',
  }),
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
