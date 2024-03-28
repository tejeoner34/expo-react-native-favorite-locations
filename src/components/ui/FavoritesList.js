import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FavoriteItem from './FavoriteItem';

function renderItems(itemData) {
  console.log(itemData);
  return <FavoriteItem favorite={itemData} />;
}

export default function FavoritesList({ favoritesList }) {
  return (
    <View>
      <FlatList
        data={favoritesList}
        renderItem={(item) => renderItems(item)}
        keyExtractor={(item) => item.location?.latitude}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
