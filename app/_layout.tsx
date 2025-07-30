// app/_layout.tsx
import { Slot } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* Judul tetap tampil */}
      <Text style={styles.header}>Halo, Selamat Datang!</Text>
      <Text style={styles.subheader}>Berikut adalah ikon sosial media:</Text>

      {/* Konten halaman seperti index.tsx akan tampil di sini */}
      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  subheader: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
});
