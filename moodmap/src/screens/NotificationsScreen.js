import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen() {
  const [friendStatus, setFriendStatus] = useState('pending');

  return (
    <ScrollView style={styles.container}>
      {/* Card de solicitação de amizade */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Ionicons name="person-add" size={28} color="#3B82F6" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={styles.bold}>Naruto Uzumaki</Text> sent a friend request
            </Text>
            <Text style={styles.time}>5 minutes ago</Text>

            {friendStatus === 'pending' ? (
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.acceptBtn}
                  onPress={() => setFriendStatus('accepted')}
                >
                  <Text style={styles.btnText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.declineBtn}
                  onPress={() => setFriendStatus('declined')}
                >
                  <Text style={styles.btnText}>Decline</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={styles.statusText}>
                {friendStatus === 'accepted' ? 'Solicitação aceita!' : 'Solicitação recusada.'}
              </Text>
            )}
          </View>
        </View>
      </View>

      {/* Cards de mensagem */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Ionicons name="chatbubble-ellipses" size={28} color="#00E676" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              You have 3 new messages from <Text style={styles.bold}>Dracula</Text>
            </Text>
            <Text style={styles.time}>5 minutes ago</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
  },
  card: {
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 12,
    marginTop: 2,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  time: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  acceptBtn: {
    backgroundColor: '#00E676',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  declineBtn: {
    backgroundColor: '#475569',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  statusText: {
    color: '#00E676',
    marginTop: 8,
    fontWeight: 'bold',
  },
});