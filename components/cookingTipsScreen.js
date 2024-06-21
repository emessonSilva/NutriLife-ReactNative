import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  useFonts,
  Rubik_300Light,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";
import AppLoading from "expo-app-loading";
import { Ionicons } from "react-native-vector-icons";

const CookingTipsScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({ Rubik_300Light, Rubik_500Medium });
  const [receitas, setReceitas] = useState([]);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  useEffect(() => {
    carregarReceitas();
  }, []);

  async function buscarReceitas() {
    try {
      const url =
        "https://nutrilife-api.onrender.com/NutriLife/api/revenues/get";
      const response = await fetch(url, {
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error("Não foi possível encontrar as receitas");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar receitas:", error.message);
      return [];
    }
  }

  function criarElementoReceita(receita) {
    return (
      <TouchableOpacity
        key={receita._id}
        style={styles.cardFoodContainer}
        onPress={() => mostrarDetalhe(receita._id)}
      >
        <View style={styles.cardFood}>
          <Image
            source={{ uri: receita.img_url }}
            style={styles.cardFoodImage}
            resizeMode="cover"
          />
          <Text style={styles.cardFoodTitle}>{receita.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  async function mostrarDetalhe(id) {
    try {
      const url = `https://nutrilife-api.onrender.com/NutriLife/api/revenues/get/id/${id}`;
      const response = await fetch(url, {
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error("Não foi possível obter as informações da receita");
      }
      const receita = await response.json();
      setReceitaSelecionada(receita);
    } catch (error) {
      console.error("Erro ao carregar detalhes da receita:", error.message);
    }
  }

  const fecharDetalhe = () => {
    setReceitaSelecionada(null);
  };

  async function carregarReceitas() {
    const receitasCarregadas = await buscarReceitas();
    setReceitas(receitasCarregadas);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.returnArrow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dicas Culinárias</Text>
      </View>

      <View style={styles.cardContainer}>
        {receitas.map((receita) => criarElementoReceita(receita))}
      </View>

      {receitaSelecionada && (
        <View style={styles.overlay}>
          <View style={styles.overlayInner}>
            <TouchableOpacity
              onPress={fecharDetalhe}
              style={styles.closeButton}
            >
              <Ionicons name="close-outline" size={40} color="#000" />
            </TouchableOpacity>
            <Image
              source={{ uri: receitaSelecionada.img_url }}
              style={styles.overlayImage}
              resizeMode="cover"
            />
            <Text style={styles.overlayTitle}>{receitaSelecionada.title}</Text>
            <Text style={styles.overlayText}>
              {receitaSelecionada.description}
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

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
    fontFamily: "Rubik_300Light",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  cardFoodContainer: {
    marginBottom: 20,
    width: "100%",
  },
  cardFood: {
    height: 150,
    width: "90%",
    backgroundColor: "#dee3dd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  cardFoodImage: {
    width: "40%",
    height: "80%",
    borderRadius: 10,
    marginLeft: 10,
  },
  cardFoodTitle: {
    fontSize: 18,
    marginLeft: 20,
    fontFamily: "Rubik_300Light",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayInner: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    height: 700,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
  overlayImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  overlayTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  overlayText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});

export default CookingTipsScreen;
