import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import MenuOption from "../components/MenuOption";

export default function SettingsScreen() {
  const [theme, setTheme] = useState("Dark");
  const [mapStyle, setMapStyle] = useState("Standard");
  const [cloudSync, setCloudSync] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Theme & Appearance</Text>
      <View style={styles.row}>
        {["White", "Dark", "Blue"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.chip, theme === item && styles.activeChip]}
            onPress={() => setTheme(item)}
          >
            <Text style={styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Map Style</Text>
      <View style={styles.row}>
        {["Standard", "Satélite", "Emotional"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.chip, mapStyle === item && styles.activeChip]}
            onPress={() => setMapStyle(item)}
          >
            <Text style={styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Data & Privacy</Text>
      <MenuOption
        icon="server-outline"
        title="Storage"
        showArrow
        onPress={() => {}}
      />
      <MenuOption
        icon="time-outline"
        title="Saved Data"
        subtitle="Manage Saved Data"
        showArrow
        onPress={() => {}}
      />

      <Text style={styles.sectionTitle}>Backup & Sync</Text>
      <View style={styles.switchCard}>
        <View>
          <Text style={styles.switchTitle}>Cloud Sync</Text>
          <Text style={styles.switchSubtitle}>Cloud Sync Toggle</Text>
        </View>
        <Switch
          value={cloudSync}
          onValueChange={setCloudSync}
          trackColor={{ false: "#334155", true: "#00E676" }}
        />
      </View>

      <Text style={styles.sectionTitle}>Language</Text>
      <MenuOption
        icon="globe-outline"
        title="Language"
        showArrow
        onPress={() => {}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  chip: {
    flex: 1,
    backgroundColor: "#1E293B",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  activeChip: {
    borderColor: "#00E676",
  },
  chipText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  switchCard: {
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  switchSubtitle: {
    color: "#94A3B8",
    fontSize: 12,
  },
});
