import {React, useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { CheckBox } from "react-native-elements";
import {
  useFonts,
  Rubik_300Light,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";
import { useNavigation } from "@react-navigation/native";

export function RegisterScreen() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ Rubik_300Light, Rubik_500Medium });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxToggle = (value) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  const handleRegister = async () => {
    try {
      const userData = {
        email,
        name,
        preferences: checkedItems,
        password,
      };

      const response = await fetch('https://nutrilife-api.onrender.com/NutriLife/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar conta');
      }

      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro ao criar conta', error.message);
    }
  };

  const goToLogin = () => {
    navigation.navigate("Login");
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
          value={name}
          onChangeText={setName}
        />
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
          style={[styles.input]}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.checkboxContainerTitle}>
          Preferências Alimentares
        </Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Vegano"
            checked={checkedItems.includes("vegan")}
            onPress={() => handleCheckboxToggle("vegan")}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
          <CheckBox
            title="Vegetariano"
            checked={checkedItems.includes("vegetarian")}
            onPress={() => handleCheckboxToggle("vegetarian")}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
          <CheckBox
            title="Sem glúten"
            checked={checkedItems.includes("gluten-free")}
            onPress={() => handleCheckboxToggle("gluten-free")}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
          <CheckBox
            title="Sem leite"
            checked={checkedItems.includes("lactose-free")}
            onPress={() => handleCheckboxToggle("lactose-free")}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
          <CheckBox
            title="Baixo Carboidrato"
            checked={checkedItems.includes("low-carb")}
            onPress={() => handleCheckboxToggle("low-carb")}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
          <CheckBox
            title="Pouca Gordura"
            checked={checkedItems.includes("low-fat")}
            onPress={() => handleCheckboxToggle("low-fat")}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
          <CheckBox
            title="Orgânico"
            checked={checkedItems.includes("organic")}
            onPress={() => handleCheckboxToggle("organic")}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>CRIAR CONTA</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Já tem uma conta?{" "}
            <TouchableOpacity onPress={goToLogin}>
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
  checkboxContainer: {
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginLeft: 0,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 5,
    fontFamily: "Rubik_300Light",
  },
  checkboxContainerTitle: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
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
