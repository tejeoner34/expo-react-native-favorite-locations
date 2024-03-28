import * as ImagePicker from 'expo-image-picker';

export function usePickImage() {
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    return result;
  };
  return {
    pickImage,
  };
}
