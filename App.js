import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/loginScreen';
import HomeScreen from './components/homeScreen';
import RegisterScreen from './components/RegisterScreen ';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Esconde o cabeçalho padrão
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Esconde o cabeçalho padrão
        />
        <Stack.Screen
          name="Cadastrer"
          component={RegisterScreen}
          options={{ headerShown: false }} // Esconde o cabeçalho padrão
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
