import React, { useEffect } from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { fetchIP } from "./redux-thunk/Action";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const ipData = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Akses objek navigation

  useEffect(() => {
    dispatch(fetchIP());
  }, [dispatch]);

  const handleBack = () => {
    navigation.goBack(); // Kembali ke Page sebelumnya
  };

  const handleLinkPress = () => {
    const url = "http://ip-api.com/json/";
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.username}>Mohon tunggu...</Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.username}>Error: {error}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="keyboard-backspace" size={30} color="#f2f2f2" />
        </TouchableOpacity>
        <Icon name="account" size={100} color="#f2f2f2" />
        <Text style={styles.username}>B A D.</Text>
        <Text style={styles.quote}>"Go Advanced"</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.Label}>Nama Lengkap</Text>
          <Text style={styles.Value}>Bilhaq AVi Dewantara</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.Label}>NIM</Text>
          <Text style={styles.Value}>120140154</Text>
        </View>

        <View>
          <View style={styles.infoItem}>
            <Text style={styles.Label}>IP Anda</Text>
            <Text style={styles.Value}>{ipData?.query} </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.Label}>Kota Anda</Text>
            <Text style={styles.Value}>{ipData?.city}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.Label}>Negara Anda</Text>
            <Text style={styles.Value}>{ipData?.country}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.Label}>Zona</Text>
            <Text style={styles.Value}>{ipData?.timezone}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.Label}>Garis Lintang</Text>
            <Text style={styles.Value}>{ipData?.lat}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.Label}>Garis Bujur</Text>
            <Text style={styles.Value}>{ipData?.lon}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.Label}>ISP Anda</Text>
            <Text style={styles.Value}>{ipData?.isp}</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.Desc}>
            Profil ini memakai Redux Thunk dan API dari{" "}
            <Text style={styles.linkText} onPress={handleLinkPress}>
              http://ip-api.com/json/
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 30,
    zIndex: 1,
  },
  header: {
    backgroundColor: "#86b257",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: "100%",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },
  quote: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 5,
  },
  infoContainer: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  Label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  Value: {
    fontSize: 16,
    color: "#777777",
  },
  Desc: {
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    width: "100%",
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Profile;
