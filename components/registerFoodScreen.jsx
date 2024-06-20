import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Rubik_300Light, Rubik_500Medium } from "@expo-google-fonts/rubik";
import { Camera } from 'expo-camera';

export function RegisterFoodScreen() {
  const [fontsLoaded] = useFonts({ Rubik_300Light, Rubik_500Medium });
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const cameraRef = useRef(null);

  // Função para abrir a câmera
  const handleOpenCamera = async () => {
    console.log('Chamando handleOpenCamera...');
  
    if (!fontsLoaded) {
      console.log('As fontes ainda não estão carregadas.');
      return; // Evita abrir a câmera antes que as fontes estejam carregadas
    }
  
    try {
      console.log('Aguardando permissão para acessar a câmera...');
      const { status } = await Camera.requestPermissionsAsync();
  
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'É necessário permitir o acesso à câmera para usar esta funcionalidade.');
        return;
      }
  
      setIsCameraOpen(true);
    } catch (error) {
      console.error('Erro ao solicitar permissão de câmera:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar acessar a câmera. Verifique suas configurações e tente novamente.');
    }
  };
  

  // Função para capturar a imagem
  const handleCaptureImage = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo); // Aqui você pode processar a imagem capturada, por exemplo, salvá-la
      setIsCameraOpen(false); // Fecha a câmera após capturar a imagem
    }
  };

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
      {isCameraOpen ? (
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.cameraPreview}
            ref={cameraRef}
            type={Camera.Constants.Type.back}
            ratio="16:9"
          />
          <TouchableOpacity style={styles.captureButton} onPress={handleCaptureImage}>
            <Text style={styles.captureButtonText}>Capturar</Text>
          </TouchableOpacity>
          <View style={styles.overlay} />
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
          <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
            <Text style={styles.buttonText}>Abrir Câmera</Text>
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
  returnArrow: {
    position: "absolute",
    left: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraPreview: {
    width: '100%',
    height: 300,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajuste a opacidade ou cor conforme necessário
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
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Rubik_300Light",
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#466546',
    padding: 15,
    borderRadius: 10,
  },
  captureButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Rubik_300Light',
  },
});

export default RegisterFoodScreen;
