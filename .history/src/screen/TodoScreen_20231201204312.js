import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TodoScreen = () => {
  return (
    <View style={{marginHorizontal:16}}>
      <Text>TodoScreen</Text>
      <TextInput style={{borderWidth:2, borderColor:"#1e90ff"}} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
