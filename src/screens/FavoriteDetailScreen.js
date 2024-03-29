import { Image, StyleSheet, Text, View } from 'react-native';
import { BaseStyles, Colors } from '../constants/Styles';
import { useEffect } from 'react';

export default function FavoriteDetailScreen({ navigation, route }) {
  useEffect(() => {
    if (route.params) {
      navigation.setOptions({ title: route.params.title });
    }
  }, []);
  return (
    <View style={BaseStyles.container}>
      <Image source={{ uri: route.params.image }} style={styles.image} />
      <Text style={styles.text}>{route.params.location.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '40%',
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.textSecondary,
    padding: 10,
  },
});
