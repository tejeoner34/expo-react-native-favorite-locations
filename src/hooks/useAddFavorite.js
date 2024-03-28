import { useState } from 'react';
import { useLocation } from './useLocation';
import { usePickImage } from './usePickImage';
import { Alert } from 'react-native';
import { useFavoritesContext } from './useFavoritesContext';
import { Favorite } from '../../models/favorite';

export function useAddFavorite() {
  const [newFavorite, setNewFavorite] = useState({
    title: '',
    image: '',
    location: '',
  });
  const { addFavorite } = useFavoritesContext();
  const { getCurrentLocation } = useLocation();
  const { pickImage } = usePickImage();

  const setCurrentLocation = async () => {
    const location = await getCurrentLocation();
    setNewFavorite((prev) => ({
      ...prev,
      location,
    }));
  };

  const setFavoriteTitle = (inputValue) => {
    setNewFavorite((prev) => ({
      ...prev,
      title: inputValue,
    }));
  };

  const setImage = async () => {
    let result = await pickImage();
    if (!result.canceled) {
      setNewFavorite((prev) => ({
        ...prev,
        image: result.assets[0].uri,
      }));
    }
  };

  const setLocation = (locationData) => {
    setNewFavorite((prev) => ({
      ...prev,
      location: {
        ...locationData,
      },
    }));
  };

  const handleCreateFavorite = () => {
    const isValid = isFavoriteValid();
    if (!isValid) {
      Alert.alert('Fill in all the fields');
      return isValid;
    }
    addFavorite(new Favorite(newFavorite.image, newFavorite.title, newFavorite.location));
    setNewFavorite({
      title: '',
      image: '',
      location: '',
    });
    return isValid;
  };

  const isFavoriteValid = () => newFavorite.title && newFavorite.image && newFavorite.location;

  return {
    handleCreateFavorite,
    newFavorite,
    setCurrentLocation,
    setFavoriteTitle,
    setImage,
    setLocation,
  };
}
