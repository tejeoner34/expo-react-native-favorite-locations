import { useContext } from 'react';
import { FavoritesContext } from '../store/favoritesContext';

export function useFavoritesContext() {
  const { storeFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

  const addFavorite = (favorite) => storeFavorite(favorite);
  const deleteFavorite = (id) => removeFavorite(id);
  return {
    addFavorite,
    deleteFavorite,
    favorites,
  };
}
