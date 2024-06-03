import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./loginScreen";
import RegisterFoodScreen from "./registerFoodScreen";
import RegisteredFoodScreen from "./registeredFoodScreen";

const Tab = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Início") {
                iconName = focused ? "map" : "map-outline";
              } else if (route.name === "Registrar Refeição") {
                iconName = focused ? "add" : "add-outline";
              } else if (route.name === "Lista de Refeições") {
                iconName = focused ? "list" : "list-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#008080",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              backgroundColor: "#f8f8f8",
              borderTopWidth: 0,
            },
            tabBarLabel: "",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Início" component={LoginScreen} />
          <Tab.Screen
            name="Registrar Refeição"
            component={RegisterFoodScreen}
          />
          <Tab.Screen
            name="Lista de Refeições"
            component={RegisteredFoodScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default HomeScreen;
