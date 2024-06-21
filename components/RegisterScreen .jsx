import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {
  useFonts,
  Rubik_300Light,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";


import { useNavigation } from '@react-navigation/native';






export function RegisterScreen() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ Rubik_300Light, Rubik_500Medium });

  const handleLoginPress = () => {
    navigation.navigate('Login'); 
  };




  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image
          source={require("../assets/NutriLife-logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Registrar-se</Text>
        <Text style={styles.subtitle}>
          Parece que você ainda não tem uma conta. Vamos criar uma para você.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nome"
          placeholderTextColor="#6B6869"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#6B6869"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#6B6869"
          secureTextEntry
          autoCorrect={false}
          style={[styles.input]}
        />
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            Ao pressionar Criar Conta abaixo, eu concordo com os{" "}
            <TouchableOpacity>
              <Text style={styles.link}>
                Termos de Serviço & Política de Privacidade
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CRIAR CONTA</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Já tem uma conta?{" "}
            <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.link}>Entre</Text>
          </TouchableOpacity>
          </Text>
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
  textContainer: {
    width: "90%",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
    fontFamily: "Rubik_500Medium",
  },
  subtitle: {
    fontSize: 16,
    color: "#333333",
    textAlign: "left",
    fontFamily: "Rubik_300Light",
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
    marginBottom: 15,
    fontFamily: "Rubik_300Light",
  },
  button: {
    width: "60%",
    height: 60,
    marginTop: 40,
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
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Rubik_500Medium",
  },
  termsContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  termsText: {
    fontSize: 16,
    color: "#333333",
    textAlign: "left",
    fontFamily: "Rubik_300Light",
  },
  link: {
    color: "#466546",
    fontSize: 15,
    fontFamily: "Rubik_300Light",
  },
  loginContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
    color: "#333333",
    fontFamily: "Rubik_300Light",
  },
});

export default RegisterScreen;

