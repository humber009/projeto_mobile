// src/screens/MapScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

export default function MapScreen() {
  const [mood, setMood] = useState("Feliz 😊");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de Emoções</Text>
      <Text style={styles.subtitle}>Seu humor atual no mapa: {mood}</Text>
      <CustomButton
        title="Mudar para Calmo 😌"
        onPress={() => setMood("Calmo 😌")}
      />
      <CustomButton
        title="Mudar para Animado 🤩"
        variant="secondary"
        onPress={() => setMood("Animado 🤩")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: { color: "#00E676", fontSize: 16, marginBottom: 20 },
});
