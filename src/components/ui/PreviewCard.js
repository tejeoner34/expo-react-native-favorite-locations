import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import ImagePlaceholder from './ImagePlaceholder';

function renderButtons(buttons) {
  return buttons.map((button, index) => (
    <CustomButton action={button.action} icon={button.icon} text={button.text} key={index} />
  ));
}

export default function PreviewCard({ buttons, previewImg }) {
  return (
    <View style={styles.container}>
      <View>
        <ImagePlaceholder />
      </View>
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
