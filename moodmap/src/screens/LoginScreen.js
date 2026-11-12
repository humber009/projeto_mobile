import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulação simples de login indo para a tela principal (Abas)
    navigation.replace("MainTabs");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-add" size={64} color="#00E676" />
        <Text style={styles.title}>Welcome to{"\n"}Moodmap</Text>
        <Text style={styles.subtitle}>
          map your emotions, discover your world.
        </Text>
      </View>

      <View style={styles.card}>
        <CustomInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
        />
        <CustomInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => Alert.alert("Recuperar senha", "Link enviado!")}
        >
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <CustomButton title="Enter" onPress={handleLogin} />

        <Text style={styles.divider}>──── Ou continue com ────</Text>

        <CustomButton
          title="Login with Google"
          variant="secondary"
          onPress={handleLogin}
        />
        <CustomButton
          title="Login with Facebook"
          variant="secondary"
          onPress={handleLogin}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 6,
  },
  card: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 16,
  },
  forgotText: {
    color: "#00E676",
    textAlign: "right",
    fontSize: 13,
    marginBottom: 14,
  },
  divider: {
    color: "#64748B",
    textAlign: "center",
    marginVertical: 14,
    fontSize: 12,
  },
});
