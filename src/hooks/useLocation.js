import * as Location from 'expo-location';

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;
export function useLocation() {
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied', status);
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const address = await getAddress(location.coords);
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      address,
    };
  };

  const getAddress = async (location) => {
    const reverseGeocode = await Location.reverseGeocodeAsync(location);
    return reverseGeocode[0].formattedAddress;
  };

  return {
    getCurrentLocation,
    getAddress,
  };
}
