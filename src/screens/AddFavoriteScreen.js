import { ScrollView, View } from 'react-native';
import React from 'react';
import { BaseStyles } from '../constants/Styles';
import CustomInput from '../components/ui/CustomInput';
import PreviewCard from '../components/ui/PreviewCard';
import CustomButton from '../components/ui/CustomButton';

const TAKE_PICTURE_BUTTON = [
  {
    icon: 'camera',
    action: () => console.log('Add to favorites'),
    text: 'Add to favorites',
  },
];

const LOCATION_BUTTONS = [
  {
    icon: 'heart',
    action: () => console.log('Add to favorites'),
    text: 'Add to favorites',
  },
  {
    icon: 'heart',
    action: () => console.log('Add to favorites'),
    text: 'Add to favorites',
  },
];

export default function AddFavoriteScreen() {
  return (
    <ScrollView contentContainerStyle={BaseStyles.space}>
      <View>
        <CustomInput lable="Title" />
      </View>
      <PreviewCard buttons={TAKE_PICTURE_BUTTON} />
      <PreviewCard buttons={LOCATION_BUTTONS} />
      <CustomButton text="Add Place" type="secondary" />
    </ScrollView>
  );
}
