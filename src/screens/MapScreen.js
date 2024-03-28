import { StyleSheet, View } from 'react-native';
import { BaseStyles } from '../constants/Styles';

import MapView, { Marker } from 'react-native-maps';
import { useEffect, useLayoutEffect, useState } from 'react';
import IconComponent from '../components/ui/IconComponent';
import { useLocation } from '../hooks/useLocation';

export default function MapScreen({ navigation }) {
  const { getCurrentLocation } = useLocation();
  const [location, setLocation] = useState();
  const handleChooseLocation = (ev) => {
    const { coordinate } = ev.nativeEvent;
    setLocation(coordinate);
  };

  const onSaveLocation = () => {
    navigation.navigate('AddFavoriteScreen', { location });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => location && <IconComponent name="save" onPress={onSaveLocation} />,
    });
  }, [location]);

  useEffect(() => {
    getCurrentLocation().then((location) => {
      setLocation(location);
    });
  }, []);

  return (
    <View style={BaseStyles.container}>
      <MapView style={StyleSheet.absoluteFill} onLongPress={handleChooseLocation} region={location}>
        {location && <Marker coordinate={location} />}
      </MapView>
    </View>
  );
}
