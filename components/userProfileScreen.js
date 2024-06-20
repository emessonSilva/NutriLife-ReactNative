import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts, Rubik_300Light, Rubik_500Medium } from "@expo-google-fonts/rubik";
import { Ionicons } from "react-native-vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserProfileScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({ Rubik_300Light, Rubik_500Medium });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
 
  const loadUserData = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      const url = `https://nutrilife-api.onrender.com/NutriLife/api/users/get/${id}`;
      const response = await fetch(url, {
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados do usuário');
      }

      const user = await response.json();
      setName(user.name);
      setEmail(user.email);
    } catch (error) {
      console.error('Erro ao carregar os dados do usuário:', error);
    }
  };

  const updateUserData = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      const updatedData = {};
      updatedData.name = name;
      updatedData.email = email;
      

      const url = `https://nutrilife-api.onrender.com/NutriLife/api/users/update/${id}`;
      const response = await fetch(url, {
        mode: 'cors',
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar os dados do usuário');
      }

      const user = await response.json();
      setName(user.name);
      setEmail(user.email);
      console.log('Dados do usuário atualizados com sucesso:', user);
    } catch (error) {
      console.error('Erro ao atualizar os dados do usuário:', error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.returnArrow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil do Usuário</Text>
      </View>

      <View style={styles.containerForm}>
        <View style={styles.form}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nome"
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={updateUserData}>
          <Text style={styles.buttonText}>Salvar Mudanças</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#466546",
    padding: 20,
    marginBottom: 10,
  },
  headerTitle: {
    flex: 1,
    fontSize: 25,
    color: "#fff",
    textAlign: 'center',
    fontFamily: "Rubik_300Light",
  },
  containerForm: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    backgroundColor: "#eeedeb",
    padding: 20,
    borderRadius: 5,
    width: "95%",
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "Rubik_300Light",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#dee3dd",
    fontSize: 15,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "45%",
    height: 50,
    backgroundColor: "#466546",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
  },
});

export default UserProfileScreen;
