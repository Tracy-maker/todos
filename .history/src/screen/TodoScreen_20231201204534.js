import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TodoScreen = () => {
  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput style={{ borderWidth: 2, borderColor: "#1e90ff" }} />
     placeholder="Add a task"
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
