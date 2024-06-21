import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "react-native-vector-icons";
import HomeScreen from "./components/HomeScreen";
import UserProfileScreen from "./components/userProfileScreen";
import CookingTipsScreen from "./components/cookingTipsScreen";
import CustomSearchHeader from "./components/CustomSearchHeader";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen ";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainDrawer"
          component={MainDrawerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainDrawerScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
        drawerActiveBackgroundColor: "#DEE3DD",
        drawerInactiveBackgroundColor: "#f8f8f8",
        drawerInactiveTintColor: "gray",
        drawerActiveTintColor: "#466546",
      }}
    >
      <Drawer.Screen
        name="Início"
        component={HomeScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerTitle: () => <CustomSearchHeader navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="Perfil"
        component={UserProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Dicas Culinárias"
        component={CookingTipsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="restaurant-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={LoginScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-out-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}



export default App;
