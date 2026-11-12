import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState("Carl");
  const [surname, setSurname] = useState("Johnson");
  const [email, setEmail] = useState("Carl.Johnson12@gmail.com");
  const [facebook, setFacebook] = useState("CJ, remember that name");

  const handleSave = () => {
    Alert.alert("Sucesso", "Perfil atualizado!");
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
          style={styles.avatar}
        />
        <Text style={styles.fullName}>
          {name} {surname}
        </Text>
        <Text style={styles.username}>@agaragan</Text>
      </View>

      <CustomInput label="Name" value={name} onChangeText={setName} />
      <CustomInput label="Surname" value={surname} onChangeText={setSurname} />
      <CustomInput label="Email" value={email} onChangeText={setEmail} />
      <CustomInput
        label="Facebook"
        value={facebook}
        onChangeText={setFacebook}
      />

      <CustomButton title="Save Changes" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    marginBottom: 10,
  },
  fullName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  username: {
    color: "#94A3B8",
    fontSize: 13,
  },
});
