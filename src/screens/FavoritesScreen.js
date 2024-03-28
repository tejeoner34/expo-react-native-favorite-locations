import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import IconComponent from '../components/ui/IconComponent';
import { BaseStyles } from '../constants/Styles';
import { useFavoritesContext } from '../hooks/useFavoritesContext';
import FavoritesList from '../components/ui/FavoritesList';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavoritesContext();
  const handleOnAddClick = () => {
    navigation.navigate('AddFavoriteScreen');
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconComponent name="add" onPress={handleOnAddClick} />,
    });
  }, []);
  return (
    <View style={BaseStyles.container}>
      <FavoritesList favoritesList={favorites} />
    </View>
  );
}
