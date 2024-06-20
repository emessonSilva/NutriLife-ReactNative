import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisteredFoodScreen = () => {
  const navigation = useNavigation();
  const [refeicoes, setRefeicoes] = useState([]);
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  useEffect(() => {
    carregarRefeicoes();
  }, []);


  const carregarRefeicoes = async () => {
    try {
    
      const userId = await AsyncStorage.getItem('userId');

      const url = `https://nutrilife-api.onrender.com/NutriLife/api/meals/get/${userId}`;
      
    
      const response = await fetch(url, {
        mode: 'cors',
      });

      
      if (!response.ok) {
        throw new Error('Não foi possível encontrar as refeições');
      }

    
      const data = await response.json();

      
      setRefeicoes(data); 
    } catch (error) {
      console.error('Erro ao carregar refeições:', error.message);
    }
  };


  const mostrarDetalhe = async (id) => {
    try {

      const url = `https://nutrilife-api.onrender.com/NutriLife/api/meals/get/id/${id}`;
      
     
      const response = await fetch(url, {
        mode: 'cors',
      });

    
      if (!response.ok) {
        throw new Error('Não foi possível obter as informações da receita');
      }

      
      const receita = await response.json();

    
      setReceitaSelecionada(receita); 
    } catch (error) {
      console.error('Erro ao carregar detalhes da receita:', error.message);
    }
  };


  const fecharDetalhe = () => {
    setReceitaSelecionada(null); 
  };

 
  const criarElementoRefeicao = (refeicao) => {
    return (
      <TouchableOpacity
        key={refeicao._id}
        style={styles.cardFoodContainer}
        onPress={() => mostrarDetalhe(refeicao._id)} 
      >
        <View style={styles.cardFood}>
          <Image
            source={{ uri: refeicao.img_url }}
            style={styles.cardFoodImage}
            resizeMode="cover"
          />
          <Text style={styles.cardFoodTitle}>{refeicao.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.returnArrow}
        />
        <Text style={styles.headerTitle}>Refeições Cadastradas</Text>
      </View>
      <View style={styles.cardContainer}>
        {refeicoes.map((refeicao) => criarElementoRefeicao(refeicao))}
      </View>

      
      {receitaSelecionada && (
        <View style={styles.overlay}>
          <View style={styles.overlayInner}>
            <TouchableOpacity onPress={fecharDetalhe} style={styles.close}>
              <Image
                source={require('../assets/fechar.png')} 
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <Image
              source={{ uri: receitaSelecionada.img_url }}
              style={styles.overlayImage}
              resizeMode="cover"
            />
            <Text style={styles.overlayTitle}>{receitaSelecionada.title}</Text>
            <Text style={styles.overlayDescription}>{receitaSelecionada.description}</Text>
          </View>
        </View>
      )}
    </View>
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
    fontFamily: "Rubik_500Medium",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    marginTop: 15,
  },
  cardFoodContainer: {
    marginBottom: 20,
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
    height: "100%",
    borderRadius: 10,
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
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayInner: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxWidth: 600,
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  overlayImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  overlayTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  overlayDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default RegisteredFoodScreen;
