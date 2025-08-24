import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

// Data mahasiswa lokal
const mahasiswa = [
  {
    nama: "Alizha",
    nim: "105841106722",
    foto: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106722_.jpg?1756047419",
  },
  {
    nama: "Mahasiswa 2",
    nim: "105841106822",
    foto: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106822_.jpg?1756047419",
  },
  {
    nama: "Mahasiswa 3",
    nim: "105841106922",
    foto: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106922_.jpg?1756047419",
  },
];

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Daftar Mahasiswa</Text>
      <FlatList
        data={mahasiswa}
        keyExtractor={(item) => item.nim}
        renderItem={({ item }) => (
          <Link href={`/${item.nim}`} asChild>
            <TouchableOpacity style={styles.item}>
              <Ionicons name="person-circle-outline" size={28} color="#2980b9" style={{ marginRight: 10 }} />
              <Text style={styles.nama}>{item.nama}</Text>
            </TouchableOpacity>
          </Link>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#eaf2f8",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a374d",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    width: "100%",
  },
  nama: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
  },
  separator: {
    height: 10,
  },
});
