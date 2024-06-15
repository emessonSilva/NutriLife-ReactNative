import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const SearchHeader = ({ navigation, onLocate, onProfile, onTips }) => {
  const [query, setQuery] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [logoutConfirmVisible, setLogoutConfirmVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleLogoutConfirm = () => {
    setLogoutConfirmVisible(!logoutConfirmVisible);
  };

  const handleLogout = () => {
    toggleLogoutConfirm();
    navigation.navigate("LoginScreen");
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchIcon} onPress={toggleMenu}>
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

      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={toggleMenu}
      >
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("UserProfileScreen")}>
              <Text style={styles.menuItem}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onTips}>
              <Text style={styles.menuItem}>Dicas Culinárias</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleLogoutConfirm}>
              <Text style={styles.menuItem}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={logoutConfirmVisible}
        animationType="fade"
        onRequestClose={toggleLogoutConfirm}
      >
        <View style={styles.logoutOverlay}>
          <View style={styles.logoutConfirmContent}>
            <Text style={styles.confirmText}>Você deseja realmente sair?</Text>
            <View style={styles.confirmButtons}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleLogout}
              >
                <Text style={styles.confirmButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={toggleLogoutConfirm}
              >
                <Text style={styles.confirmButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    borderWidth: 0,
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  overlayContent: {
    width: "60%",
    padding: 20,
    marginTop: 60,
    marginLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "flex-start",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
  logoutOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutConfirmContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  confirmText: {
    fontSize: 18,
    marginBottom: 20,
  },
  confirmButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  confirmButton: {
    width: "45%",
    padding: 10,
    backgroundColor: "#466546",
    borderRadius: 10,
    alignItems: "center",
  },
  confirmButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default SearchHeader;
