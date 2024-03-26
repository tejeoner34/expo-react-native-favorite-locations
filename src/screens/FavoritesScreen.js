import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import IconComponent from '../components/ui/IconComponent';
import { BaseStyles } from '../constants/Styles';

export default function FavoritesScreen({ navigation }) {
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
      <Text>FavoritesScreen</Text>
    </View>
  );
}
