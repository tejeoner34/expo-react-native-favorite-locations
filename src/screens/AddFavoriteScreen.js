import { ScrollView } from 'react-native';
import { BaseStyles } from '../constants/Styles';
import CustomInput from '../components/ui/CustomInput';
import PreviewCard from '../components/ui/PreviewCard';
import CustomButton from '../components/ui/CustomButton';
import { useAddFavorite } from '../hooks/useAddFavorite';
import { useEffect } from 'react';
import { handleNavigate } from '../utils/navigation';

export default function AddFavoriteScreen({ navigation, route }) {
  const {
    handleCreateFavorite,
    newFavorite,
    setCurrentLocation,
    setFavoriteTitle,
    setImage,
    setLocation,
  } = useAddFavorite();

  const onSubmit = () => {
    if (handleCreateFavorite()) navigation.goBack();
  };

  const TAKE_PICTURE_BUTTON = [
    {
      icon: 'camera',
      action: setImage,
      text: 'Add to favorites',
    },
  ];

  const LOCATION_BUTTONS = [
    {
      icon: 'location',
      action: setCurrentLocation,
      text: 'Locate User',
    },
    {
      icon: 'map',
      action: () => handleNavigate(navigation, 'MapScreen'),
      text: 'Pick on Map',
    },
  ];

  useEffect(() => {
    if (route.params?.location) {
      setLocation(route.params.location);
    }
  }, [route.params?.location]);
  return (
    <ScrollView contentContainerStyle={BaseStyles.space}>
      <CustomInput lable="Title" onChange={setFavoriteTitle} />
      <PreviewCard previewImg={newFavorite.image} buttons={TAKE_PICTURE_BUTTON} />
      <PreviewCard location={newFavorite.location} buttons={LOCATION_BUTTONS} type="map" />
      <CustomButton text="Add Place" type="secondary" action={onSubmit} />
    </ScrollView>
  );
}
