import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Rubik_300Light,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";

export function CookingTipsScreen() {
  const [fontsLoaded] = useFonts({ Rubik_300Light, Rubik_500Medium });
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.returnArrow}
        >
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dicas Culinárias</Text>
      </View>
      <View style={styles.cardContainer}></View>
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
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 80,
  },
  cardButton: {
    display: "flex",
    justifyContent: "center",
    textDecorationLine: "none",
    color: "var(--theme-color)",
    display: "contents",
  },
  cardFood: {
    height: 150,
    width: "90%",
    backgroundColor: "#dee3dd",
    boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    marginTop: 30,
    gap: 20,
    flexDirection: "row",
  },
  cardFoodImage: {
    maxWidth: "40%",
    maxHeight: "80%",
    borderRadius: 10,
    borderWidth: 0,
    marginLeft: 10,
  },
  overlay: {
    height: "100%",
    width: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },
  overlayInner: {
    backgroundColor: "#fff",
    maxWidth: "90%",
    maxHeight: "90%",
    padding: 24,
    position: "relative",
    boxSizing: "border-box",
    overflow: "auto",
    fontSize: 20.8,
  },
  closeButton: {
    cursor: "pointer",
    position: "absolute",
    left: 320,
    top: 3.2,
    outline: "none",
    borderWidth: 0,
    fontSize: 20,
    width: 40,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  closeButtonText: {
    fontSize: 20,
  },
  innerBox: {
    marginTop: 60,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  overlayImage: {
    marginTop: 10,
    marginBottom: 10,
    width: "90%",
    height: "90%",
  },
  overlayText: {
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",
  },
});

export default CookingTipsScreen;
