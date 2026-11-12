import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress, variant = 'primary' }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' && styles.secondaryButton,
        variant === 'danger' && styles.dangerButton,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.text,
          variant === 'secondary' && styles.secondaryText,
          variant === 'danger' && styles.dangerText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00E676',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 6,
  },
  secondaryButton: {
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#334155',
  },
  dangerButton: {
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  text: {
    color: '#0F172A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryText: {
    color: '#FFFFFF',
  },
  dangerText: {
    color: '#EF4444',
  },
});