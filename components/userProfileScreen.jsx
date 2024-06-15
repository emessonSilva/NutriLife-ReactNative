
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const UserProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const handleSaveChanges = () => {
    // Lógica para salvar as mudanças
    alert("Mudanças salvas!");
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

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

        {/* <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry={!showPassword}
        />
        <View style={styles.showPassword}>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#ccc"
            />
          </TouchableOpacity>
          <Text style={styles.showPasswordLabel}>Mostrar senha</Text>
        </View> */}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
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
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#466546",
    padding: 20,
    marginBottom: 20,
  },
  returnArrow: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 25,
    color: "#fff",
  },
  form: {
    backgroundColor: "#eeedeb",
    padding: 20,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
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
  // showPassword: {
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  // showPasswordLabel: {
  //   marginLeft: 10,
  //   fontSize: 15,
  // },
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
  },
});

export default UserProfileScreen;
