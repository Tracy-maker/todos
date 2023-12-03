import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View>
      <image
        source={require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fto-do-list_4697260&psig=AOvVaw1PIyFqJwVOaEz9SpZQzKU8&ust=1701659576566000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDVmYem8oIDFQAAAAAdAAAAABAE")}
    style={height:300,width:300}
    />
    </View>
  );
};

export default Fallback;
