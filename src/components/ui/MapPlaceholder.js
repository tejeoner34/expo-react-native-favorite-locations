import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Colors } from '../../constants/Styles';

export default function MapPlaceholder({ location }) {
  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      ) : (
        <Text style={styles.noImageText}>No Image</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: Colors.primary500,
  },
  noImageText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
