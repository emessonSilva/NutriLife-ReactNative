import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import CustomSearchHeader from "./CustomSearchHeader";

const CustomDrawerHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.toggleDrawer()}
      >
        <Ionicons name="menu-outline" size={24} color="#466546" />
      </TouchableOpacity>
      <CustomSearchHeader navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  iconContainer: {
    marginRight: 10,
  },
});

export default CustomDrawerHeader;
