import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationContainer,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./src/screens/LoginScreen";
import MapScreen from "./src/screens/MapScreen";
import CommunityScreen from "./src/screens/CommunityScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";
import PrivacyScreen from "./src/screens/PrivacyScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const COLORS = {
  background: "#0F172A",
  surface: "#1E293B",
  border: "#334155",
  primary: "#00E676",
  muted: "#94A3B8",
  text: "#FFFFFF",
};

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: COLORS.background,
    card: COLORS.surface,
    border: COLORS.border,
    primary: COLORS.primary,
    text: COLORS.text,
  },
};

const TAB_ICONS = {
  Map: ["location", "location-outline"],
  Community: ["people", "people-outline"],
  Profile: ["person", "person-outline"],
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: COLORS.surface },
        headerTintColor: COLORS.text,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.muted,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.border,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const [active, inactive] = TAB_ICONS[route.name];
          return (
            <Ionicons
              name={focused ? active : inactive}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.surface },
          headerTintColor: COLORS.text,
          contentStyle: { backgroundColor: COLORS.background },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ title: "Edit Profile" }}
        />
        <Stack.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{ title: "Privacy" }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ title: "Notifications" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
