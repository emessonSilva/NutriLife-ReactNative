import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Rubik_300Light,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";

export function RegisterFoodScreen() {
  const [fontsLoaded] = useFonts({ Rubik_300Light, Rubik_500Medium });
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.returnArrow}
        >
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registrar Refeição</Text>
      </View>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite um título para a refeição"
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite uma breve descrição da refeição"
          value={description}
          onChangeText={setDescription}
          multiline={true}
          numberOfLines={7}
        />
        <Text style={styles.label}>Calorias</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite quantas calorias tem a refeição"
          value={calories}
          onChangeText={setCalories}
        />
      </ScrollView>
      <View style={styles.buttonPhoto}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Abrir Câmera</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#466546",
    padding: 20,
    position: "relative",
  },
  returnArrow: {
    position: "absolute",
    left: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
  },
  formContainer: {
    backgroundColor: "#eeedeb",
    padding: 20,
    borderRadius: 5,
    margin: 10,
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
    fontFamily: "Rubik_300Light",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonPhoto: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    width: "45%",
    height: 50,
    backgroundColor: "#466546",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Rubik_300Light",
  },
});

export default RegisterFoodScreen;
