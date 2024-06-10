import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const SearchHeader = ({ onSearch, onLocate }) => {
  const [query, setQuery] = React.useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => alert("botão pressionado")}
      >
        <Ionicons name="menu-outline" size={24} color="#888" />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquise um lugar..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
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
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 10,
    backgroundColor: "#ffffffaa",
  },
  searchInput: {
    width: "66%",
    height: 40,
    borderRadius: 20,
    border: "transparent",
    backgroundColor: "#f6f6f6",
    paddingLeft: 20,
  },
  searchIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    width: "10%",
    height: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
  },
});

export default SearchHeader;
