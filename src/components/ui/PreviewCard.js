import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import ImagePlaceholder from './ImagePlaceholder';
import MapPlaceholder from './MapPlaceholder';

const TYPES = {
  img: 'img',
  map: 'map',
};

function renderButtons(buttons) {
  return buttons.map((button, index) => (
    <CustomButton action={button.action} icon={button.icon} text={button.text} key={index} />
  ));
}

function renderPlaceholder({ type, location, previewImg }) {
  const placehholder = {
    [TYPES.img]: <ImagePlaceholder source={previewImg} />,
    [TYPES.map]: <MapPlaceholder location={location} />,
  };

  return placehholder[type];
}

export default function PreviewCard({ buttons, previewImg, location, type = 'img' }) {
  return (
    <View style={styles.container}>
      <View>{renderPlaceholder({ type, location, previewImg })}</View>
      <View style={buttons.length > 1 && styles.buttonsContainer}>{renderButtons(buttons)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 10 },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 10,
  },
});
