import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import MenuOption from "../components/MenuOption";

export default function AboutScreen() {
  const [search, setSearch] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <CustomInput
          placeholder="Search help..."
          value={search}
          onChangeText={setSearch}
        />
        <Text style={styles.faqItem}>How do I send message?</Text>
        <Text style={styles.faqItem}>Add friends?</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact</Text>
        <Text style={styles.contactText}>📧 Contato@gmail.com</Text>
        <Text style={styles.contactText}>
          Redes Sociais: Instagram • Twitter • Facebook
        </Text>
      </View>

      <MenuOption
        icon="document-text-outline"
        title="Termos de Serviço"
        showArrow
        onPress={() => {}}
      />
      <MenuOption
        icon="shield-checkmark-outline"
        title="Política de Privacidade"
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
  card: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  faqItem: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 8,
  },
  contactText: {
    color: "#CBD5E1",
    fontSize: 14,
    marginBottom: 6,
  },
});
