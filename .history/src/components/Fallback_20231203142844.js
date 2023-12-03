import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/4697/4697260.png",
        }}
        style={{ height: 300, width: 300 }}
      />
    </View>
  );
};

export default Fallback;
