import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { BaseStyles } from '../constants/Styles';
import CustomInput from '../components/ui/CustomInput';
import PreviewCard from '../components/ui/PreviewCard';
import CustomButton from '../components/ui/CustomButton';

import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

export default function AddFavoriteScreen() {
  const [newFavorite, setNewFavorite] = useState({
    title: '',
    image: '',
    location: '',
  });

  // LOCATION
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied', status);
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log('location');
    console.log(location.coords);
    setNewFavorite((prev) => ({
      ...prev,
      location: location.coords,
    }));
  };

  const handleInputChange = (inputValue) => {
    setNewFavorite((prev) => ({
      ...prev,
      title: inputValue,
    }));
  };
  // We can encapsulate all this in a custom hook
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNewFavorite((prev) => ({
        ...prev,
        image: result.assets[0].uri,
      }));
    }
  };

  const TAKE_PICTURE_BUTTON = [
    {
      icon: 'camera',
      action: pickImage,
      text: 'Add to favorites',
    },
  ];

  const LOCATION_BUTTONS = [
    {
      icon: 'location',
      action: getCurrentLocation,
      text: 'Locate User',
    },
    {
      icon: 'map',
      action: getCurrentLocation,
      text: 'Pick on Map',
    },
  ];
  return (
    <ScrollView contentContainerStyle={BaseStyles.space}>
      <View>
        <CustomInput lable="Title" onChange={handleInputChange} />
      </View>
      <PreviewCard previewImg={newFavorite.image} buttons={TAKE_PICTURE_BUTTON} />
      <PreviewCard location={newFavorite.location} buttons={LOCATION_BUTTONS} type="map" />
      <CustomButton text="Add Place" type="secondary" />
    </ScrollView>
  );
}
