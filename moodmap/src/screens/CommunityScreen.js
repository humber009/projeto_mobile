
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comunidade Moodmap</Text>
      <Text style={styles.subtitle}>Veja como seus amigos estão se sentindo hoje.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#94A3B8', fontSize: 15, textAlign: 'center' },
});