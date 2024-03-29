import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Styles';

export default function FavoriteItem({ favorite, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: favorite.image }} style={{ width: '100%', height: '100%' }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{favorite.title}</Text>
        <Text style={styles.description}>{favorite.location.address}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: Colors.primary100,
    borderRadius: 5,
    marginBottom: 10,
  },
  imgContainer: {
    width: '30%',
    backgroundColor: 'red',
  },
  infoContainer: {
    width: '70%',
    paddingTop: 10,
    paddingLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  description: {
    color: Colors.textPrimary,
  },
});
