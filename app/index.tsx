import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const primaryImages = [
  "https://plus.unsplash.com/premium_photo-1664124888766-7d7693ae4879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlbWFuZGFuZ2FufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // diganti ke gambar sawah
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
];

const backupImages = [
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
];

const GRID_DIM = 3;
const PIC_DIM = 90;

export default function Index() {
  // Setiap item: {alt: boolean, scale: number}
  const [imageStates, setImageStates] = useState(
    Array.from({ length: 9 }, () => ({
      alt: false,
      scale: 1,
    }))
  );

  const onImagePress = (index: number) => {
    setImageStates((prev) =>
      prev.map((img, idx) => {
        if (idx !== index) return img;
        const nextScale = Math.min(img.scale * 1.2, 2);
        return {
          alt: !img.alt,
          scale: nextScale,
        };
      })
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        padding: 20,
      }}
    >
      {/* Header dan elemen awal */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 60,
          borderStyle: "solid",
          backgroundColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
          marginBottom: 20,
        }}
      />
      <View
        style={{
          minWidth: 160,
          paddingHorizontal: 24,
          height: 50,
          backgroundColor: "cyan",
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }} numberOfLines={1} ellipsizeMode="tail">
          105841106722
        </Text>
      </View>
      <View
        style={{
          width: 200,
          height: 60,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Alizha Nur Arspandy
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 30 }}>
        <Image
          source={{
            uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106722_.jpg?1751871436",
          }}
          style={{
            width: 120,
            height: 160,
            borderRadius: 10,
            marginRight: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif",
          }}
          style={{
            width: 120,
            height: 160,
            borderRadius: 10,
          }}
          resizeMode="contain"
        />
      </View>

      {/* Grid interaktif */}
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
        Galeri 3x3 Interaktif
      </Text>
      <View>
        {Array.from({ length: GRID_DIM }).map((_, rowIdx) => (
          <View key={rowIdx} style={{ flexDirection: "row" }}>
            {Array.from({ length: GRID_DIM }).map((_, colIdx) => {
              const imgIdx = rowIdx * GRID_DIM + colIdx;
              return (
                <TouchableOpacity
                  key={colIdx}
                  onPress={() => onImagePress(imgIdx)}
                  activeOpacity={0.8}
                  style={{ margin: 5 }}
                >
                  <Image
                    source={{
                      uri: imageStates[imgIdx].alt
                        ? backupImages[imgIdx]
                        : primaryImages[imgIdx],
                    }}
                    style={{
                      width: PIC_DIM,
                      height: PIC_DIM,
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: "#bbb",
                      backgroundColor: "#eee",
                      transform: [{ scale: imageStates[imgIdx].scale }],
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
