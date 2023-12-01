import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TodoScreen = () => {
  return (
    <View>
      <Text>TodoScreen</Text>
      <TextInput style={{borderWidth:2, borderColor:"#"}} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
