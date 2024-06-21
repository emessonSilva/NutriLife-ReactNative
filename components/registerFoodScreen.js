import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export function RegisterFoodScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("Permissão de acesso à galeria:", status);

      if (status !== "granted") {
        Alert.alert(
          "Permissão necessária",
          "É necessário permitir o acesso à galeria para usar esta funcionalidade."
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log("Resultado da seleção de imagem:", result);

      if (!result.cancelled) {
        const formData = new FormData();
        const localUri = result.uri;
        const filename = localUri.split("/").pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;

        formData.append("file", {
          uri: localUri,
          type: type,
          name: filename,
        });
        formData.append("upload_preset", "r2hjf5ed");

        console.log("FormData:", formData); // Verifica o FormData antes do envio

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dfrngbz8u/image/upload",
          {
            method: "POST",
            body: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const data = await response.json();
        console.log("Resposta do Cloudinary:", data);

        if (data.secure_url) {
          setSelectedImage(data.secure_url);
        } else {
          Alert.alert(
            "Erro ao enviar imagem",
            "Ocorreu um problema ao enviar a imagem. Tente novamente mais tarde."
          );
        }
      }
    } catch (error) {
      console.error("Erro ao selecionar imagem da galeria:", error);
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao tentar acessar a galeria. Verifique suas configurações e tente novamente."
      );
    }
  };

  const handleFormSubmit = async () => {
    try {
      const mealData = {
        title,
        description,
        calories,
        img_url: selectedImage,
      };

      const response = await fetch(
        "https://nutrilife-api.onrender.com/NutriLife/api/meals/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mealData),
        }
      );

      if (response.ok) {
        console.log("Refeição cadastrada com sucesso!");
      } else {
        console.error("Erro ao cadastrar refeição:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao cadastrar refeição:", error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Registrar Refeição</Text>
      </View>
      {selectedImage ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        </View>
      ) : (
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
          <TouchableOpacity style={styles.button} onPress={handlePickImage}>
            <Text style={styles.buttonText}>Selecionar Imagem da Galeria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>Salvar Refeição</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
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
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  selectedImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
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
  button: {
    width: "70%",
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
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Rubik_300Light",
  },
});

export default RegisterFoodScreen;
