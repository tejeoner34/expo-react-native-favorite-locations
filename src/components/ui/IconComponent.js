import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Styles';

export default function IconComponent({ name, size = 24, color = Colors.textPrimary, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
