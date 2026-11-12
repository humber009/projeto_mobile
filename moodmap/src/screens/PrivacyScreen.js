import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function PrivacyScreen({ navigation }) {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleUpdate = () => {
    if (!newPass || newPass !== confirmPass) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
    Alert.alert("Sucesso", "Senha atualizada!");
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Find people quickly and safely. Our app lets you share your real-time
          location with approved contacts, create safe zones, and receive
          notifications when someone arrives or leaves these locations. Ideal
          for families, groups of friends, and teams.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Change Password</Text>

      <CustomInput
        label="Current Password"
        value={currentPass}
        onChangeText={setCurrentPass}
        secureTextEntry
      />
      <CustomInput
        label="New Password"
        value={newPass}
        onChangeText={setNewPass}
        secureTextEntry
      />
      <CustomInput
        label="Confirm New Password"
        value={confirmPass}
        onChangeText={setConfirmPass}
        secureTextEntry
      />

      <CustomButton title="Update Password" onPress={handleUpdate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },
  infoBox: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  infoText: {
    color: "#94A3B8",
    fontSize: 13,
    lineHeight: 18,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
