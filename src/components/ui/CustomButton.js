import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconComponent from './IconComponent';
import { Colors } from '../../constants/Styles';

export default function CustomButton({ text, icon, action, type = 'primary' }) {
  return (
    <TouchableOpacity style={styles[type]} onPress={action}>
      <IconComponent name={icon} color={styles[type].text.color} />
      <Text style={styles[type].text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primary100,
    borderRadius: 5,
    padding: 10,
    text: {
      color: Colors.textSecondary,
    },
  },
  secondary: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    text: {
      color: Colors.textTertiary,
    },
  },
});
