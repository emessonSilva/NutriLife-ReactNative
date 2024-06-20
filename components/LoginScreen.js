import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Rubik_300Light, Rubik_500Medium } from "@expo-google-fonts/rubik";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({ Rubik_300Light, Rubik_500Medium });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://nutrilife-api.onrender.com/NutriLife/api/users/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }

      const data = await response.json();

      
      await AsyncStorage.setItem('userId', data.id);

      
      navigation.navigate('MainDrawer');
    } catch (error) {
      Alert.alert('Erro ao fazer login', error.message);
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image
          source={require("../assets/NutriLife-logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#6B6869"
          autoCorrect={false}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#6B6869"
          secureTextEntry
          autoCorrect={false}
          style={[styles.input, { marginTop: 30 }]}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.registerContainerText}>
            Ainda não tem uma conta?{" "}
          </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.link}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEEDEB",
  },
  logo: {
    width: 140,
    height: 120,
    marginBottom: 50,
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#DEE3DD",
    padding: 15,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#466546",
    fontSize: 15,
    fontFamily: "Rubik_300Light",
  },
  button: {
    width: "50%",
    height: 60,
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: "#466546",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
    color: "white",
    fontSize: 18,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Rubik_500Medium",
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 50,
    fontSize: 25,
  },
  registerContainerText: {
    fontSize: 15,
    fontFamily: "Rubik_300Light",
  },
  link: {
    color: "#466546",
    fontSize: 15,
    fontFamily: "Rubik_300Light",
  },
});
