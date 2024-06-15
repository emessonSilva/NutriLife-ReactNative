import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RegisterFoodScreen from "./registerFoodScreen";
import RegisteredFoodScreen from "./registeredFoodScreen";
import SearchHeader from "./searchHeader";

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
            tabBarActiveTintColor: "#466546",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              backgroundColor: "#f8f8f8",
              borderTopWidth: 0,
            },
            tabBarLabel: "",
          })}
        >
          <Tab.Screen
            name="Início"
            component={SearchHeader}
            options={{ headerShown: false }}
          
          />
          <Tab.Screen
            name="Registrar Refeição"
            component={RegisterFoodScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Lista de Refeições"
            component={RegisteredFoodScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default HomeScreen;
