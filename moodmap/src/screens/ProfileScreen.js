import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import MenuOption from "../components/MenuOption";
import CustomButton from "../components/CustomButton";

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Carl Johnson</Text>
          <Text style={styles.username}>@agaragan</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>ACCOUNT</Text>
      <MenuOption
        icon="create-outline"
        title="Edit Profile"
        onPress={() => navigation.navigate("EditProfile")}
      />
      <MenuOption
        icon="lock-closed-outline"
        title="Privacy"
        onPress={() => navigation.navigate("Privacy")}
      />
      <MenuOption
        icon="notifications-outline"
        title="Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />

      <Text style={styles.sectionTitle}>MORE OPTIONS</Text>
      <MenuOption
        icon="settings-outline"
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <MenuOption
        icon="help-circle-outline"
        title="Help & Support"
        onPress={() => navigation.navigate("About")}
      />
      <MenuOption
        icon="information-circle-outline"
        title="About"
        onPress={() => navigation.navigate("About")}
      />

      <View style={styles.logoutContainer}>
        <CustomButton
          title="Log out"
          variant="danger"
          onPress={() => navigation.getParent()?.replace("Login")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 24,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    backgroundColor: "#334155",
  },
  name: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  username: {
    color: "#94A3B8",
    fontSize: 14,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 14,
    marginBottom: 10,
  },
  logoutContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});
