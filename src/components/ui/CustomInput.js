import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/Styles';

export default function CustomInput({ lable, onChange, inputConfig }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{lable}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        onChangeText={onChange}
        {...inputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: 17,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary500,
    borderRadius: 4,
    fontSize: 16,
  },
});
