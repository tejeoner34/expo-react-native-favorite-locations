import { StyleSheet, Text, View } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Colors } from '../../constants/Styles';

export default function MapPlaceholder({ location }) {
  return (
    <View style={styles.container}>
      {location ? (
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} region={location}>
          <Marker coordinate={location} title="Marker" />
        </MapView>
      ) : (
        <Text style={styles.noImageText}>No selected location</Text>
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
