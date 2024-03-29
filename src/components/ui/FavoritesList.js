import { FlatList, View } from 'react-native';
import React from 'react';
import FavoriteItem from './FavoriteItem';

function renderItems(itemData, onItemClick) {
  return (
    <FavoriteItem
      favorite={itemData}
      onPress={() => {
        onItemClick(itemData);
      }}
    />
  );
}

export default function FavoritesList({ favoritesList, onItemClick }) {
  return (
    <View>
      <FlatList
        data={favoritesList}
        renderItem={(item) => renderItems(item.item, onItemClick)}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
