import { useEffect, useLayoutEffect } from 'react';
import { View } from 'react-native';
import IconComponent from '../components/ui/IconComponent';
import { BaseStyles } from '../constants/Styles';
import { useFavoritesContext } from '../hooks/useFavoritesContext';
import FavoritesList from '../components/ui/FavoritesList';
import { handleNavigate } from '../utils/navigation';

export default function FavoritesScreen({ navigation }) {
  const { favorites, fetchFavorites } = useFavoritesContext();

  useEffect(() => {
    fetchFavorites();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconComponent name="add" onPress={() => handleNavigate(navigation, 'AddFavoriteScreen')} />
      ),
    });
  }, []);
  return (
    <View style={BaseStyles.container}>
      <FavoritesList
        favoritesList={favorites}
        onItemClick={(itemData) => handleNavigate(navigation, 'FavoriteDetailScreen', itemData)}
      />
    </View>
  );
}
