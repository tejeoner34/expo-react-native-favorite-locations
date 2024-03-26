import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Styles';

export default function ImagePlaceholder({ source }) {
  return (
    <View style={styles.imagePlaceholder}>
      {source ? (
        <Image source={source} style={{ width: '100%', height: '100%' }} />
      ) : (
        <Text style={styles.noImageText}>No Image</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imagePlaceholder: {
    height: 250,
    backgroundColor: Colors.primary500,
  },
  noImageText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
