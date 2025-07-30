import { ScrollView, StyleSheet, Text, View } from "react-native";
import Zocial from '@expo/vector-icons/Zocial';

export default function Index() {
  const socialIcons: { name: React.ComponentProps<typeof Zocial>["name"]; label: string }[] = [
    { name: "chrome", label: "Google Chrome" },
    { name: "email", label: "Email Access" },
    { name: "facebook", label: "Facebook Connect" },
    { name: "github", label: "GitHub Code" },
    { name: "google", label: "Google Account" },
    { name: "instagram", label: "Instagram Feed" },
    { name: "itunes", label: "Apple iTunes" },
    { name: "linkedin", label: "LinkedIn Network" },
    { name: "pinterest", label: "Pinterest Board" },
    { name: "spotify", label: "Spotify Music" },
  ];

  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.header}>10 Icon</Text>
      <View style={styles.iconGrid}>
        {socialIcons.map((item, index) => (
          <View key={index} style={styles.card}>
            <Zocial name={item.name} size={36} color="#2c3e50" />
            <Text style={styles.caption}>{item.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#eaf2f8",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a374d",
    textAlign: "center",
    marginBottom: 20,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  caption: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "600",
    color: "#34495e",
    textAlign: "center",
  },
});
