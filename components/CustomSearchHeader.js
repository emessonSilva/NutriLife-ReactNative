import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "react-native-vector-icons";

function CustomSearchHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquise um lugar..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => alert("botão pressionado")}
      >
        <Ionicons name="search-outline" size={24} color="#888" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => alert("botão pressionado")}
      >
        <Ionicons name="location-outline" size={24} color="#888" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 10,
    backgroundColor: "#ffffffaa",
  },
  searchInput: {
    width: 250,
    height: 40,
    borderRadius: 20,
    borderWidth: 0,
    backgroundColor: "#f8f8f8",
    paddingLeft: 10,
  },
  searchIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    width: "15%",
    height: "100%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
  },
});

export default CustomSearchHeader;
