import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import RegisterFoodScreen from "./registerFoodScreen";
import RegisteredFoodScreen from "./registeredFoodScreen";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <SafeAreaProvider>
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
          component={MapScreen}
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
    </SafeAreaProvider>
  );
}

function MapScreen() {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633309,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permissão para acessar localização não concedida");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);

    setRegion({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
      >
        {location && (
          <>
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title={"Sua Localização"}
              description={"Você está aqui"}
            />
            <Marker
              coordinate={{
                latitude: -8.051264176767653,
                longitude: -34.8891208889249
              }}
              title={"O Vegetariano Restaurante"}
              description={"Restaurante vegano aqui"}
              image={require("../assets/restaurante.png")}
            />
            <Marker
              coordinate={{
                latitude: -8.057859274091719,
                longitude: -34.88115727862078
              }}
              title={"Restaurante Vida Longa"}
              description={"Restaurante vegano aqui"}
              image={require("../assets/restaurante.png")}
            />
            <Marker
              coordinate={{
                latitude: -8.057604324164435,
                longitude: -34.88150060137855
              }}
              title={"VEGostices"}
              description={"Comida Nordestina Vegana"}
              image={require("../assets/restaurante.png")}
            />
          </>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
  },
});

export default HomeScreen;
