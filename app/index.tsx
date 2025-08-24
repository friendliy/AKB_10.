import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

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
  const [selectedNim, setSelectedNim] = useState<string | null>(null);

  if (selectedNim) {
    const mhs = mahasiswa.find((m) => m.nim === selectedNim);
    if (!mhs) {
      return (
        <View style={styles.wrapper}>
          <Text>Mahasiswa tidak ditemukan.</Text>
          <Pressable style={styles.backBtn} onPress={() => setSelectedNim(null)}>
            <Ionicons name="arrow-back" size={20} color="#fff" />
            <Text style={styles.backText}>Kembali</Text>
          </Pressable>
        </View>
      );
    }
    return (
      <View style={styles.wrapper}>
        <Image source={{ uri: mhs.foto }} style={styles.foto} />
        <Text style={styles.namaDetail}>{mhs.nama}</Text>
        <Text style={styles.nim}>NIM: {mhs.nim}</Text>
        <Pressable style={styles.backBtn} onPress={() => setSelectedNim(null)}>
          <Ionicons name="arrow-back" size={20} color="#fff" />
          <Text style={styles.backText}>Kembali</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Daftar Mahasiswa</Text>
      <FlatList
        data={mahasiswa}
        keyExtractor={(item) => item.nim}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => setSelectedNim(item.nim)}>
            <Ionicons name="person-circle-outline" size={28} color="#2980b9" style={{ marginRight: 10 }} />
            <Text style={styles.nama}>{item.nama}</Text>
          </TouchableOpacity>
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
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 24,
    marginTop: 40,
  },
  namaDetail: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    color: "#1a374d",
  },
  nim: {
    fontSize: 16,
    color: "#34495e",
    marginBottom: 32,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2980b9",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 20,
  },
  backText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8,
    fontSize: 16,
  },
});
